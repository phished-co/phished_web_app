
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
  deleteDoc,
  setDoc,
} from 'firebase/firestore';
import { Session } from 'inspector';

export const config = {
  api: { externalResolver: true },
};

function subtractMinutes(date, minutes) {
  date.setMinutes(date.getMinutes() - minutes);
  return date;
}


export default async function handler(req, res) {

  const {method} = req

  switch (method) {
    case 'POST':


      res.send(true);

      //Send data to Db
      let emailDataForDb = req.body
      

      console.log("ss", req.body)


      emailDataForDb.createdAt = Date.now()
      
      const consent = await addDoc(collection(db, "consentRequest"), emailDataForDb);

    
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


      let date = new Date();
      let newDate = subtractMinutes(date, 20);


      /* -- Phished Emails Link Destination---*/
      let consentLink = `https://phished.app/consent?consentCode=${consent.id}`       
      // let consentLink = `http://localhost:3000/consent?consentCode=${consent.id}`       

      let phishedApp = `https://phished.app/`
      

        
      var mailOptions = {
        from: req.body.from,
        to: req.body.to,
        yourName: req.body.yourName,
        subject: req.body.subject,
        replyTo: req.body.replyTo,
        template: req.body.template,
        targetName: req.body.targetName,
        // html: req.body.html,
        context: {
          text: req.body.html,
          datetime: newDate.toString(),
          email: req.body.to,
          bodyName:req.body.bodyName,
          bank:req.body.bankName,
          yourName: req.body.yourName,
          targetName: req.body.targetName,
          consentLink: consentLink,
          phishedApp: phishedApp,
          
        },
      };


      //sending email
      return new Promise((resolve, reject) => {
        transporter
            .sendMail(mailOptions)
            .then((info) => {
              console.log('test', req.body);
              console.log('Email sent: ' + info.response);
              resolve(info);
            })
            .catch((e) => {
              reject(e.response);
            });
      });

      break
    default:
      res.setHeader('Allow', ['POST'])
      res.status(405).end(`Method ${method} Not Allowed`)

  }
}
