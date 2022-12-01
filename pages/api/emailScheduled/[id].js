import { deleteScheduledEmail } from '../../../firebase';

export default async function handler(req, res) {
  try {
    if (req.method === 'DELETE') {
      // delete email
      let emailId = req.query.id || req.body.id;
      const deletedEmail = await deleteScheduledEmail(
        emailId
      );
      console.log('*** Deleted Email ***', deletedEmail);
    }
  } catch (e) {
    console.log(e);
    res.status(400).end();
  }
}
