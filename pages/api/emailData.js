import { db } from '../../firebaseConfig';

import {
  collection,
  doc,
  addDoc,
  getDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  setDoc,
  query,
  where,
} from 'firebase/firestore';

export default async function handler(req, res) {
  const {method} = req
  switch (method) {


    case 'POST':

      let phishedEmailId = req.body.id

      //get the sent email doc from sentEmails collection
      const sentEmailsDocRef = doc(db, "sentEmails", phishedEmailId);
      const sentEmailDocSnap = await getDoc(sentEmailsDocRef);

      //get the phished email doc from phishedEmails collection
      const phishedEmailsDocRef = doc(db, "phishedEmails", phishedEmailId);
      const phishedEmailsDocSnap = await getDoc(phishedEmailsDocRef);

      //if the phished email id was not in phishedEmails collection add.

      if (!phishedEmailsDocSnap.exists()) {
        await setDoc(doc(db, "phishedEmails", phishedEmailId), sentEmailDocSnap.data());
        await updateDoc(phishedEmailsDocRef, {
          phishedAt: Date.now()
        });
      }
      


      break
    case 'GET':

      //Initialize the Object Array
      let userSentEmails = []
      let userPhishedEmails = []
      let chartMonths = [];

      let monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
      let newMonth = 0;

      var d = new Date();
      for (let i = 0; i < 6; ++i) {

        newMonth = i === 0 ? d.getMonth() :  d.getMonth() - 1
        d.setMonth(newMonth);

        chartMonths.push({
          date : `${monthNames[d.getMonth()]} ${d.getFullYear()}` ,
          sent : 0,
          success : 0
        });
      }



      //get the user sent emails
      const userSentEmailsQuery = query(collection(db, "sentEmails"), where("creatorEmail", "==", req.query.userEmail));
      const sentEmailsQuerySnapshot = await getDocs(userSentEmailsQuery);
      sentEmailsQuerySnapshot.forEach((doc) => {

        //adding the matched docs to objectArray
        let newDate = new Date(doc.data().createdAt);
        chartMonths.forEach((i) => {
          if (`${monthNames[newDate.getMonth()]} ${newDate.getFullYear()}` === i.date) {
            i.sent += 1;
          }
        });

      });


      //get the user phished emails
      const userPhishedEmailsQuery = query(collection(db, "phishedEmails"), where("creatorEmail", "==", req.query.userEmail));
      const phishedEmailsQuerySnapshot = await getDocs(userPhishedEmailsQuery);
      phishedEmailsQuerySnapshot.forEach((doc) =>{

        //adding the matched docs to objectArray
        let newDate = new Date(doc.data().createdAt);
        chartMonths.forEach((i) => {
          if (`${monthNames[newDate.getMonth()]} ${newDate.getFullYear()}` === i.date) {
            i.success += 1;
          }
        })
      });


      res.send(chartMonths)
      // console.log(chartMonths)

      break
    default:
      res.setHeader('Allow', ['POST'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}
