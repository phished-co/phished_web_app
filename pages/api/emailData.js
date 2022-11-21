import { db } from '../../firebaseConfig';

import {
  collection,
  doc,
  addDoc,
  getDoc,
  getDocs,
  deleteDoc,
  setDoc,
  query,
  where,
} from 'firebase/firestore';

export default async function handler(req, res) {
  if (req.method === 'POST') {

    let phishedEmailId = req.body.id

    //get the sent email doc from sentEmails collection
    const sentEmailsDocRef = doc(db, "sentEmails", phishedEmailId);
    const sentEmailDocSnap = await getDoc(sentEmailsDocRef);

    //get the phished email doc from phishedEmails collection
    const phishedEmailsDocRef = doc(db, "phishedEmails", phishedEmailId);
    const docSnap = await getDoc(phishedEmailsDocRef);

    //if the recent phished email id was not in phishedEmails collection add.
    if (!docSnap.exists()) {
      await setDoc(doc(db, "phishedEmails", phishedEmailId), sentEmailDocSnap.data());
    }





  } else if (req.method === 'GET'){

    let userSentEmails = []
    let userPhishedEmails = []

    let chartMonths = [];
    let graphData = []

    let monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

    let newMonth = 0;
    var d = new Date();
    for (let i = 0; i < 6; ++i) {

      if (i === 0 ) {
        newMonth = d.getMonth();
      } else {
        newMonth = d.getMonth() - 1;
      }
      d.setMonth(newMonth);
      chartMonths.push({
        date : `${monthNames[d.getMonth()]} ${d.getFullYear()}` ,
        sent : 0,
        success : 0
      });

    }
    //Get current month and past months function
    let currentDate = new Date()
    let currentMonth = currentDate.getMonth()

    function subtractMonths(date, months) {
      const formattedDate = new Date(date);

      date.setMonth(formattedDate.getMonth() - months);
      return date;
    }



    //get the user sent emails
    const userSentEmailsQuery = query(collection(db, "sentEmails"), where("creatorEmail", "==", req.query.userEmail));
    const sentEmailsQuerySnapshot = await getDocs(userSentEmailsQuery);
    sentEmailsQuerySnapshot.forEach((doc) => {
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
      let newDate = new Date(doc.data().createdAt);
      chartMonths.forEach((i) => {
        if (`${monthNames[newDate.getMonth()]} ${newDate.getFullYear()}` === i.date) {
          i.success += 1;
        }
      })
    });
    graphData = chartMonths;
    console.log(graphData)




  }
}
