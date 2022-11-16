import { getAllscheduledEmails, getScheduledEmail, postScheduleEmail, deleteScheduledEmail, deleteEmailFromTasks, updateScheduledEmail } from '../../../firebase';

export default async function handler(req, res) {
  console.log('we want to store this info for later -');
  console.log("info:", req.body);

  try {
    let emailInfo = {
      firstName: req.body.fname,
      lastName: req.body.lname,
      senderEmail: req.body.fromEmail,
      receiver: req.body.to,
      subject: req.body.subject,
      message: req.body.html,
    };

    if (req.body.id) { emailInfo.id = req.body.id; }
    
    if (req.method === 'GET') {
      const allEmails = await getAllscheduledEmails('scheduledEmails');
      res.status(200).json(allEmails);

    } else if (req.method === 'POST') {
      const scheduledEmail = await postScheduleEmail('scheduledEmails', emailInfo);
      console.log('*Successfully stored in db*');
      console.log('*** Id ***: ' + scheduledEmail);
      res.status(200).send(scheduledEmail);
    
    } else if (req.method === 'PUT') {
      //update email
      const updatedEmail = await updateScheduledEmail(emailInfo.id);
      console.log('***Successfully updated in db***' + emailInfo);
      res.stutus(200).send(updatedEmail);
    
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
