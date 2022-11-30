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
  const { method } = req
  switch (method) {

    case 'POST':

      let consentId = req.body.id;

      //get the doc from consentRequest collection
      const sentConsentDocRef = doc(db, "consentRequest", consentId);
      const sentConsentDocSnap = await getDoc(sentConsentDocRef);

      if (sentConsentDocSnap.data().consent === true) {
      console.log("This user already gave us consent.");
      break
      }

      await setDoc(sentConsentDocRef, sentConsentDocSnap.data());
      await updateDoc(sentConsentDocRef, {
        consent: true,
        receivedAt: Date.now()
      });

      console.log("updated consent with time received", consentId)



      // sending email to the sender
      
      let senderEmail = sentConsentDocSnap.data().creatorEmail;
      let targetEmail = sentConsentDocSnap.data().to;
      let emailTemplate = sentConsentDocSnap.data().template;
      let targetName = sentConsentDocSnap.data().targetName;

      /* -- Notification Emails Link Destination---*/
      let websiteLink = `https://phished.app/`        //Deploymnt
      // let websiteLink = `http://localhost:3000/`   //Localhost

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


      //template variables for the notification email to sender
      var mailOptions = {
        from: 'phishedapp@gmail.com',
        to: senderEmail,
        subject: 'Your target accepted your consent request!',
        replyTo: 'phishedapp@gmail.com',
        template: 'consentConfirm',
        context: {
          targetName: targetName,
          targetEmail: targetEmail,
          template: emailTemplate,
          link: websiteLink,
        },
      };

      //sending emails to notify the sender

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


      break;


    
    default:
      res.setHeader('Allow', ['POST'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}
