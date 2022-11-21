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
      // console.log("jabada")
      await setDoc(doc(db, "phishedEmails", phishedEmailId), sentEmailDocSnap.data());
    }





  } else if (req.method === 'GET'){

    let userSentEmails = []
    let userPhishedEmails = []

    //Get current month and past months function
    let currentDate = new Date()
    let currentMonth = currentDate.getMonth()

    function subtractMonths(date, months) {
      const formattedDate = new Date(date);

      date.setMonth(formattedDate.getMonth() - months);
      return date.getMonth();
    }



    //get the user sent emails
    const userSentEmailsQuery = query(collection(db, "sentEmails"), where("creatorEmail", "==", req.query.userEmail));
    const sentEmailsQuerySnapshot = await getDocs(userSentEmailsQuery);
    sentEmailsQuerySnapshot.forEach((doc) => {
      userSentEmails.push(doc.data())
    });



    //get the user phished emails
    const userPhishedEmailsQuery = query(collection(db, "phishedEmails"), where("creatorEmail", "==", req.query.userEmail));
    const phishedEmailsQuerySnapshot = await getDocs(userPhishedEmailsQuery);
    phishedEmailsQuerySnapshot.forEach((doc) =>{
      userPhishedEmails.push(doc.data());
    });

    //month names
    let monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];



    //Emails quantity by month

    let currentMonthSent = 0
    let oneMonthAgoSent = 0
    let twoMonthsAgoSent = 0
    let threeMonthsAgoSent = 0
    let fourMonthsAgoSent = 0
    let fiveMonthsAgoSent = 0

    let currentMonthPhished = 0
    let oneMonthAgoPhished = 0
    let twoMonthsAgoPhished = 0
    let threeMonthsAgoPhished = 0
    let fourMonthsAgoPhished = 0
    let fiveMonthsAgoPhished = 0


    // //    -----------------------------------------------------------------------------------------



    let sentEmailsByMonth = userSentEmails.map(sentEmail=>{
      let date = new Date(sentEmail.createdAt)
      date.getMonth() == currentMonth && currentMonthSent++
      date.getMonth() == subtractMonths(currentDate, 1) && oneMonthAgoSent++
      date.getMonth() == subtractMonths(currentDate, 2) && twoMonthsAgoSent++
      date.getMonth() == subtractMonths(currentDate, 3) && threeMonthsAgoSent++
      date.getMonth() == subtractMonths(currentDate, 4) && fourMonthsAgoSent++
      date.getMonth() == subtractMonths(currentDate, 5) && fiveMonthsAgoSent++


    })

    let phishedEmailsByMonth = userPhishedEmails.map(phishedEmail=>{
      let date = new Date(phishedEmail.createdAt)
      date.getMonth() == currentMonth && currentMonthPhished++
      date.getMonth() == subtractMonths(currentDate, 1) && oneMonthAgoPhished++
      date.getMonth() == subtractMonths(currentDate, 2) && twoMonthsAgoPhished++
      date.getMonth() == subtractMonths(currentDate, 3) && threeMonthsAgoPhished++
      date.getMonth() == subtractMonths(currentDate, 4) && fourMonthsAgoPhished++
      date.getMonth() == subtractMonths(currentDate, 5) && fiveMonthsAgoPhished++


    })


    // let tweleveMonthsAgo = subtractMonths(currentDate, 12)
    // console.log(`12 month ago was the month number ${tweleveMonthsAgo} in year  ???`)
    console.log(`This month you had ${currentMonthPhished} success out of ${currentMonthSent}`)


//    -----------------------------------------------------------------------------------------



let graphData = [
  {
    date: "Jan 2022",
    sent: 6,
    success: 4,
  },
  {
    date: "Feb 2022",
    sent: 10,
    success: 8,
  },
  {
    date: "Mar 2022",
    sent: 14,
    success: 14,
  },
  {
    date: "Apr 2022",
    sent: 21,
    success: 12,
  },
  {
    date: "May 2022",
    sent: 25,
    success: 14,
  },
  {
    date: "Jun 2022",
    sent: 32,
    success: 15,
  },

]


    res.send([])




  }
}
