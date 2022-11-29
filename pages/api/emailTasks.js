import {
  getAllscheduledEmails,
  getScheduledEmail,
  postScheduleEmail,
  deleteScheduledEmail,
  deleteEmailFromTasks,
  updateScheduledEmail,
} from '../../firebase';
import { unstable_getServerSession } from "next-auth/next"
import { authOptions } from './auth/[...nextauth]';

export default async function handler(req, res) {
  const session = await unstable_getServerSession(req, res, authOptions)
  try {
    if (req.method === 'POST') {
      const emailTask = await postScheduleEmail('tasks', {
        ...req.body, replyTo: 'phishedapp@gmail.com',
        creatorEmail: session.user.email
      });
      console.log(`***stored in db: Tasks with Id: ${emailTask}***`);
    }
    res.status(200).send();
  } catch (e) {
    console.log(e);
    res.status(400).end();
  }
}
