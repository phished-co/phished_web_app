import { db } from '../firebaseConfig';
import { useState, useEffect } from 'react';
import { collection, doc, setDoc, getDocs } from '@firebase/firestore';
import ScheduledData from '../components/scheduledData/ScheduledData';
import { Button } from '@mantine/core';

export default function About() {
  const [scheduleEmails, setScheduleEmails] = useState([]);
  const [loading, setLoading] = useState(true);
  const scheduledEmailList = collection(db, 'scheduledEmails');

  const getScheduledEmail = async () => {
    const querySnapshot = await getDocs(scheduledEmailList);
    let allDocs = [];
    querySnapshot.forEach((doc) => {
      allDocs.push(doc);
    });
    setScheduleEmails(allDocs);
  };
  
  useEffect(() => {
    // get the todos
    getScheduledEmail();
    // reset loading
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      <h1>Scheduled Email List</h1>
      {loading ? ( 
          <h2> Loading... </h2>
        ) : 
          scheduleEmails.length === 0 ? (
            <div>
             <h2>No scheduled Email</h2>
             <p>Consider adding a scheduled Email from <a href="/account">Click Here</a></p>
            </div>
           ) : (  
            <div>
              {scheduleEmails.map((email) => (
                // console.log(email.id)
                // console.log(email.data().postData)
              
                <ScheduledData key={email.id} firstName={email.data().firstName} lastName={email.data().lastName} senderEmail={email.data().senderEmail} receiver={email.data().receiver} subject={email.data().subject} message={email.data().message} />
                
                ))}
                
            </div>
          )
        }
    </div>
  );
}


