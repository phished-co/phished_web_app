import {
  getAllDocs,
  postDoc,
  getScheduledEmail,
  deleteScheduledEmail,
  updateScheduledEmail,
} from '../../firebase';

export default async function handler(req, res) {
  try {
    if (req.method === 'POST') {
      const emailTask = await postDoc('tasks', req.body);
      console.log(emailTask);
    }
    res.status(200).send();
  } catch (e) {
    console.log(e);
    res.status(400).end();
  }
}
