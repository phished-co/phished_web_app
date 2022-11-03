import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
admin.initializeApp();
const db = admin.firestore();

export const taskRunner = functions
  .runWith({ memory: '2GB' })
  .pubsub.schedule('* * * * *')
  .onRun(async (context) => {
    // Consistent timestamp
    const now = admin.firestore.Timestamp.now();

    // Query all documents ready to perform
    const query = db
      .collection('tasks')
      .where('performAt', '<=', now)
      .where('status', '==', 'scheduled');

    const tasks = await query.get();

    // Jobs to execute concurrently.
    const jobs: Promise<any>[] = [];

    // Loop over documents and push job.
    tasks.forEach((snapshot) => {
      const { worker, options } = snapshot.data();

      const job = workers[worker](options)

        // Update doc with status on success or error
        .then(() => snapshot.ref.update({ status: 'complete' }))
        .catch((err) => snapshot.ref.update({ status: 'error' }));

      jobs.push(job);
    });

    // Execute all jobs concurrently
    return await Promise.all(jobs);
  });

// Optional interface, all worker functions should return Promise.
interface Workers {
  [key: string]: (options: any) => Promise<any>;
}

// Business logic for named tasks. Function name should match worker field on task document.
const workers: Workers = {
  helloWorld: () => db.collection('logs').add({ hello: 'world' }),
  //we want nodemailer to occur when helloWorld is called (at the performAt timestamp)
};
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
