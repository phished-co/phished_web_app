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
  try {
    await new Promise((resolve, reject) => {
      // verify connection configuration
      transporter.verify(function (error, success) {
        if (error) {
          console.log(error);
          reject(error);
        } else {
          console.log('Server is ready to take our messages');
          resolve(success);
        }
      });
    });
    if (req.method === 'POST') {
      // let senderInfo = req.body.from.split(' ')

      //verifier
      // let validationInfo =  await validate({email: senderInfo[2], verbose: true, timeout: 2000})
      // console.log(validationInfo)

      //deep validator
      // let validationInfo = await validate(senderInfo[2])
      // console.log(validationInfo)
      // res.send(validationInfo.valid)
      // if (!validationInfo.valid) return

      //verificator
      // const verify = emailSMTPVerificator({ timeout: 12000 });
      // console.log(await verify(senderInfo[2]))

      //temporarily
      res.send(true);

      await new Promise((resolve, reject) => {
        transporter.sendMail(req.body, (error, info) => {
          if (error) {
            console.error(error);
            reject(error);
          } else {
            console.log('Email sent: ' + info.response);
            resolve(info);
          }
        });
      });
    }
    res.status(200).send();
  } catch (e) {
    console.log(e);
    res.status(400).end();
  }
}
