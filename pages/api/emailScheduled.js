import {
  getAllDocs,
  postDoc,
  getScheduledEmail,
  deleteScheduledEmail,
  updateScheduledEmail,
} from '../../firebase';

export default async function handler(req, res) {
  //   if (req.method === 'POST') {
  console.log('we want to store this info for later -');
  console.log(req.body);

  try {
    let emailInfo = {
      firstName: req.body.fname,
      lastName: req.body.lname,
      senderEmail: req.body.fromEmail,
      receiver: req.body.to,
      subject: req.body.subject,
      message: req.body.html,
    };

    if (req.method === 'POST') {
      const scheduledEmail = await postDoc('scheduledEmails', emailInfo);
      console.log('*Successfully stored in db*');
      console.log('*** Id ***: ' + scheduledEmail);
    }
    res.status(200).send();
  } catch (e) {
    console.log(e);
    res.status(400).end();
  }
}
