import { transporter } from '../../nodemailer';
import hbs from 'nodemailer-express-handlebars';
import path from 'path';

import { db } from '../../firebaseConfig';

import {
  collection,
  doc,
  addDoc,
  getDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  setDoc,
  query,
  where,
} from 'firebase/firestore';

export const config = {
  api: { externalResolver: true },
};

export default async function handler(req, res) {
  const {method} = req
  switch (method) {


    case 'POST':

      let phishedEmailId = req.body.id

      //get the sent email doc from sentEmails collection
      const sentEmailsDocRef = doc(db, "sentEmails", phishedEmailId);
      const sentEmailDocSnap = await getDoc(sentEmailsDocRef);

      //get the phished email doc from phishedEmails collection
      const phishedEmailsDocRef = doc(db, "phishedEmails", phishedEmailId);
      const phishedEmailsDocSnap = await getDoc(phishedEmailsDocRef);

      //check if the phishe email already exist if it does do nothing
      if (phishedEmailsDocSnap.exists()) {
        console.log("This link has been used before.")
        break
      }
      
      console.log("Email has been saved in DB as a success.")
      await setDoc(doc(db, "phishedEmails", phishedEmailId), sentEmailDocSnap.data());
      await updateDoc(phishedEmailsDocRef, {
        phishedAt: Date.now()
      });


      //sending email to the sender
      //email the sender that their user has been phished
      let senderEmail = sentEmailDocSnap.data().creatorEmail
      let targetEmail = sentEmailDocSnap.data().to
      let emailTemplate = sentEmailDocSnap.data().template
      /* -- Notification Emails Link Destination---*/
      let websiteLink = `https://phished.app/`        //Deploymnt
      // let websiteLink = `http://localhost:3000/`   //LocalHost


      //Template Connection
      const handlebarOptions = {
        viewEngine: {
          extName: '.handlebars',
          partialsDir: path.resolve('./templates'),
          defaultLayout: false,
        },
        viewPath: path.resolve('./templates'),
        extName: '.handlebars',
      };

      transporter.use('compile', hbs(handlebarOptions));


      //template variables
      var mailOptions = {
        from: 'phishedapp@gmail.com',
        to: senderEmail,
        subject: 'Your target has been phished!',
        replyTo: 'phishedapp@gmail.com',
        template: 'phishConfirm',
        context: {
          targetEmail:targetEmail,
          template: emailTemplate,
          link: websiteLink,

        },
      };


      //sending emails

      return new Promise((resolve, reject) => {
        transporter
            .sendMail(mailOptions)
            .then((info) => {
              // console.log(req.body);
              console.log('Email sent: ' + info.response);
              resolve(info);
            })
            .catch((e) => {
              reject(e.response);
            });
      });


      break
    
    case 'GET':

      //Initialize the Object Array
      let userSentEmails = []
      let userPhishedEmails = []
      let chartMonths = [];

      let monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
      let newMonth = 0;

      var d = new Date();
      for (let i = 0; i < 6; ++i) {

        newMonth = i === 0 ? d.getMonth() :  d.getMonth() - 1
        d.setMonth(newMonth);

        chartMonths.push({
          date : `${monthNames[d.getMonth()]} ${d.getFullYear()}` ,
          sent : 0,
          success : 0
        });
      }



      //get the user sent emails
      const userSentEmailsQuery = query(collection(db, "sentEmails"), where("creatorEmail", "==", req.query.userEmail));
      const sentEmailsQuerySnapshot = await getDocs(userSentEmailsQuery);
      sentEmailsQuerySnapshot.forEach((doc) => {

        //adding the matched docs to objectArray
        let newDate = new Date(doc.data().createdAt);
        chartMonths.forEach((i) => {
          if (`${monthNames[newDate.getMonth()]} ${newDate.getFullYear()}` === i.date) {
            i.sent += 1;
          }
        });

      });



      //get the user phished emails
      const userPhishedEmailsQuery = query(collection(db, "phishedEmails"), where("creatorEmail", "==", req.query.userEmail));
      const phishedEmailsQuerySnapshot = await getDocs(userPhishedEmailsQuery);
      phishedEmailsQuerySnapshot.forEach((doc) =>{

        //adding the matched docs to objectArray
        let newDate = new Date(doc.data().createdAt);
        chartMonths.forEach((i) => {
          if (`${monthNames[newDate.getMonth()]} ${newDate.getFullYear()}` === i.date) {
            i.success += 1;
          }
        })
      });


      //
      // ///-----FAKE DATA FOR DEMO ----------------------
      //last Month
      chartMonths[1].sent = 23
      chartMonths[1].success = 18
      // // 2months ago
      // chartMonths[2].sent = 29
      // chartMonths[2].success = 24
      // // 3months ago
      // chartMonths[3].sent = 20
      // chartMonths[3].success = 16
      // // 4months ago
      // chartMonths[4].sent = 25
      // chartMonths[4].success = 15
      // // 5months ago
      // chartMonths[5].sent = 10
      // chartMonths[5].success = 7
      // //--------------------------------------------------




      res.send(chartMonths.reverse())
      // console.log(chartMonths)

      break
    default:
      res.setHeader('Allow', ['POST'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}
