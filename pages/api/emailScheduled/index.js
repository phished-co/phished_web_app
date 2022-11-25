import { getUserscheduledEmails, getScheduledEmail, postScheduleEmail, deleteScheduledEmail, deleteEmailFromTasks, updateScheduledEmail } from '../../../firebase';
import { unstable_getServerSession } from "next-auth/next"
import { authOptions } from '../auth/[...nextauth]';

export default async function handler(req, res) {
  console.log('we want to store this info for later -');
  console.log("info:", req.body);
  const session = await unstable_getServerSession(req, res, authOptions)

  try {
    let emailInfo = {
      firstName: req.body.fname,
      lastName: req.body.lname,
      senderEmail: req.body.fromEmail,
      receiver: req.body.to,
      subject: req.body.subject,
      message: req.body.html,
    };

    //need to somehow have a user id field in scheduled Emails 

    if (req.body.id) { emailInfo.id = req.body.id; }

    if (req.method === 'GET') {
      //getUserscheduledEmails
      const allEmails = await getUserscheduledEmails('scheduledEmails', session.userId);
      res.status(200).json(allEmails);

    } else if (req.method === 'POST') {
      //need to somehow have a user id field in scheduled Emails
      const scheduledEmail = await postScheduleEmail('scheduledEmails', { userId: req.body.userId, options: emailInfo });
      console.log('*Successfully stored in db*');
      console.log('*** Id ***: ' + scheduledEmail);
      res.status(200).send(scheduledEmail);

    } else if (req.method === 'PUT') {
      //update email
      const updatedEmail = await updateScheduledEmail(emailInfo.id);
      console.log('***Successfully updated in db***' + emailInfo);
      res.status(200).send(updatedEmail);

    } else if (req.method === 'DELETE') {
      // delete email
      const deletedEmail = await deleteScheduledEmail('scheduledEmails', emailInfo.id);
      console.log("here", emailInfo);
      console.log('*** Deleted Email ***: ' + deletedEmail);
    }

  } catch (e) {
    console.log(e);
    res.status(400).end();
  }
}
