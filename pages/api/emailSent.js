
// import { useSession } from "next-auth/react"
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

//


export const config = {
  api: { externalResolver: true },
};

function subtractHours(date, minutes) {
  date.setMinutes(date.getMinutes() - minutes);
  return date;
}


export default async function handler(req, res) {
  if (req.method === 'POST') {
    res.send(true);

    ///--------------------------------------


    let emailDataForDb = req.body

    emailDataForDb.userEmail = "01ssTZgBlq376xEaZaYo"
    emailDataForDb.timestamp = Date.now()


    const sentEmail = await addDoc(collection(db, "sentEmails"), emailDataForDb);
      // console.log(sentEmail.id)


      ///--------------------------------------

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
    let newDate = subtractHours(date, 20);

    //localhost
    let phishedLink = `http://localhost:3000/youPhished?phishingCode=${sentEmail.id}`
    //deplyment
    // let phishedLink = `https://phished.app/youPhished?${sentEmail.id}`

    var mailOptions = {
      from: req.body.from,
      to: req.body.to,
      subject: req.body.subject,
      replyTo: req.body.replyTo,
      template: req.body.template,
      html:req.body.html,
      context: {
        text: req.body.html,
        datetime: newDate.toUTCString(),
        // datetime: "Monday, November 7, at 6:57 PM (PDT).",
        targetName:req.body.targetName,
        phishedLink:phishedLink
      },
    };




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
  }
}
