import { transporter } from '../../nodemailer';
//emailSent.js is if the user decides to send their email right away (ie. without scheduling)

export default async function handler(req, res) {
  try {
    if (req.method === 'POST') {
      transporter.sendMail(req.body, (error, info) => {
        if (error) console.log(error);
        else console.log('Email sent: ' + info.response);
      });
    }
    res.status(200).send();
  } catch (e) {
    console.log(e);
    res.status(400).end();
  }
}
