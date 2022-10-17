// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import nodemailer from 'nodemailer';
// import cron from 'cron';

const users = [
  {
    id: 1,
    firstName: 'Lucia',
    lastName: 'Martin',
    emailsSent: 0,
    email: 'luciammperu@gmail.com',
    phishCaught: 0,
    // ^^ ie they responded to the email or clicked a link
  },
];
// eslint-disable-next-line no-unused-vars
const UsersPhished = [
  {
    id: 1,
    firstName: 'first',
    lastName: 'last',
    email: 'lucia.emm25@gmail.com',
    linksClicked: 0,
  },
];

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
    console.log(req.body);
    transporter.sendMail(req.body, (error, info) => {
      if (error) console.log(error);
      else console.log('Email sent: ' + info.response);
    });

    //has to query through database
    users.forEach((user) => {
      if (req.body.from == user.email) {
        user.emailsSent++;
      }
    });
  }
}
