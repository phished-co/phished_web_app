
import validate from 'deep-email-validator'
import { transporter } from '../../nodemailer';
//emailSent.js is if the user decides to send their email right away (ie. without scheduling)


export const config = {
  api:{ externalResolver: true, },
}


export default async function handler(req, res) {
  try {
    if (req.method === 'POST') {
    
      let senderInfo = req.body.from.split(' ')
      let validationInfo = await validate(senderInfo[2])
      console.log(validationInfo)

      console.log(validationInfo)


      res.send(validationInfo.validators.mx)
      if (!validationInfo.validators.mx) return

      // res.send(validationInfo.valid)
      // if (!validationInfo.valid) return

    
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
