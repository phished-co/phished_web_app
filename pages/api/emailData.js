import { db } from '../../firebaseConfig';

import {
  collection,
  doc,
  addDoc,
  getDoc,
  getDocs,
  deleteDoc,
  setDoc,
} from 'firebase/firestore';

export default async function handler(req, res) {
  try {
    let phishedEmailId = req.body.id

    //get the sent email doc from sentEmails collection
    const sentEmailsDocRef = doc(db, "sentEmails", phishedEmailId);
    const sentEmailDocSnap = await getDoc(sentEmailsDocRef);

    //get the phished email doc from phishedEmails collection
    const phishedEmailsDocRef = doc(db, "phishedEmails", phishedEmailId);
    const docSnap = await getDoc(phishedEmailsDocRef);

    //if the recent phished email id was not in phishedEmails collection add.
    if (!docSnap.exists()) {
      console.log("jabada")
      await setDoc(doc(db, "phishedEmails", phishedEmailId),  sentEmailDocSnap.data());
    }

  } catch (e) {
    console.log(e);
    res.status(400).end();
  }
}
