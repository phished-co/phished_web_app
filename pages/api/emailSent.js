// import emailSMTPVerificator from 'email-smtp-verificator';
// import validate from 'deep-email-validator';
// import validate from 'email-validator';
// import { verifyEmail } from '@devmehq/email-validator-js';
import { transporter } from '../../nodemailer';
//emailSent.js is if the user decides to send their email right away (ie. without scheduling)

export const config = {
  api: { externalResolver: true },
};

export default async function handler(req, res) {
  // await new Promise((resolve, reject) => {
  //   // verify connection configuration
  //   transporter.verify(function (error, success) {
  //     if (error) {
  //       console.log(error);
  //       reject(error);
  //     } else {
  //       console.log('Server is ready to take our messages');
  //       resolve(success);
  //     }
  //   });
  // });
  // if (req.method === 'POST') {
  //   res.send(true);

  //   await new Promise((resolve, reject) => {
  //     transporter.sendMail(req.body, (error, info) => {
  //       if (error) {
  //         console.error(error);
  //         reject(error);
  //         res.status(400).end();
  //       } else {
  //         console.log('Email sent: ' + info.response);
  //         resolve(info);
  //         res.status(200).send();
  //       }
  //     });
  //   });
  // }

  if (req.method === 'POST') {
    res.send(true);

    return new Promise((resolve, reject) => {
      transporter
        .sendMail(req.body)
        .then((info) => {
          console.log('Email sent: ' + info.response);
          resolve(info);
        })
        .catch((e) => {
          reject(e.response);
        });
    });

    // return new Promise(async (resolve, reject) => {
    //   try {
    //     const info = await transporter.sendMail(req.body);
    //     console.log('Email sent: ' + info.response);
    //     resolve(info);
    //   } catch (e) {
    //     reject(e);
    //   }
    // });
  }
}
