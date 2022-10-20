import { db } from './firebaseConfig';
import {
  collection,
  doc,
  addDoc,
  getDoc,
  getDocs,
  deleteDoc,
} from 'firebase/firestore';
//addDoc allows you to write a document without manully giving it an id (firestore can do it for you)
//setDoc means you are giving it an id manually

//can be reused for both getAllEmails or getAllUsers
export async function getAllDocs(collectionName) {
  const querySnapshot = await getDocs(collection(db, collectionName));
  let allDocs = [];
  querySnapshot.forEach((doc) => {
    allDocs.push(doc);
  });
  return allDocs;
}

export async function getScheduledEmail(id) {
  const scheduledEmail = await getDoc(doc(db, 'scheduledEmail', id));
  return scheduledEmail.data();
  //if email is found, you can get it's data w/ scheduledEmail.data()
}

//getuser?

//postEmailContent
export async function postDoc(collectionName, postData) {
  const docAdded = await addDoc(collection(db, collectionName), { postData });
  return docAdded.id;
}

//to remove a email that has been scheduled!
export async function deleteScheduledEmail(id) {
  await deleteDoc(doc(db, 'scheduledEmails', id));
}

//probably need to be able to update a scheduled email lol
export async function updateScheduledEmail(id) {}
