import { db } from './firebaseConfig';
import {
  collection,
  doc,
  addDoc,
  getDoc,
  getDocs,
  deleteDoc,
  setDoc,
} from 'firebase/firestore';
//addDoc allows you to write a document without manully giving it an id (firestore can do it for you)
//setDoc means you are giving it an id manually

//can be reused for both getAllEmails or getAllUsers
export async function getAllscheduledEmails(collectionName) {
  const querySanpshot = await getDocs(collection(db, collectionName));
  const allEmails = querySanpshot.docs.map((doc) => {
    return { ...doc.data(), id: doc.id };
  });
  return allEmails;
}

//can be reused for both getEmail or getUser
export async function getScheduledEmail(id) {
  const scheduledEmail = await getDoc(doc(db, 'scheduledEmail', id));
  return scheduledEmail.data();
  //if email is found, you can get it's data w/ scheduledEmail.data()
}

//postEmailContent
export async function postScheduleEmail(collectionName, postData) {
  const docAdded = await addDoc(collection(db, collectionName), postData);
  return docAdded.id;
}

//to remove a email that has been scheduled!
export async function deleteScheduledEmail(id) {
  await deleteDoc(doc(db, 'scheduledEmails', id));
  console.log(`scheduledEmail deleted from db: scheduledEmails + ${id}`);
}

//to remove from db: tasks
export async function deleteEmailFromTasks(id) {
  await deleteDoc(doc(db, 'tasks', id));
  console.log(`email deleted from db: tasks + ${id}`);
}

//probably need to be able to update a scheduled email
export async function updateScheduledEmail(id) {
  await setDoc(doc(db, 'scheduledEmails', id), {
    //update info
    firstName,
    lastName,
    senderEmail,
    receiver,
    subject,
    message,
  });
}
