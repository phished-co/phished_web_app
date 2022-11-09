import {
  getAllscheduledEmails,
  getScheduledEmail,
  postScheduleEmail,
  deleteScheduledEmail,
  deleteEmailFromTasks,
  updateScheduledEmail,
} from '../../firebase';

export default async function handler(req, res) {
  try {
    if (req.method === 'POST') {
      const emailTask = await postScheduleEmail('tasks', req.body);
      console.log(`***stored in db: Tasks with Id: ${emailTask}***`);
    }
    res.status(200).send();
  } catch (e) {
    console.log(e);
    res.status(400).end();
  }
}
