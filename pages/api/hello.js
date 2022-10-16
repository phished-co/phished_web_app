// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import nodemailer from 'nodemailer';
// import cron from 'cron';

// //serverless computing / lambda functions

let transporter = nodemailer.createTransport({
  pool: true,
  host: 'smtp-relay.sendinblue.com',
  port: 587,
  secure: false, // use TLS
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// eslint-disable-next-line no-unused-vars
export default function handler(req, res) {
  if (req.method === 'POST') {
    transporter.sendMail(req.body, (error, info) => {
      if (error) console.log(error);
      else console.log('Email sent: ' + info.response);
    });
  }
}
