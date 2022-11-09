import { db } from '../firebaseConfig';
import { useState, useEffect } from 'react';
import { collection, doc, setDoc, getDocs } from '@firebase/firestore';
import ScheduledData from '../components/scheduledData/ScheduledData';
import { Button } from '@mantine/core';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styled from 'styled-components';


const Container = styled.div`
  div h1 {
    margin: 2rem;
  }
`




export default function About() {
  const router = useRouter();

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
    <Container>
      <div>
      <h1>Scheduled Email List</h1>
      
      {loading ? (
        <h1> Loading... </h1>
      ) : scheduleEmails.length === 0 ? (
        <div>
          <h1>No scheduled Email</h1>
          <p>
            Consider adding a scheduled Email from{' '} </p>
            <Link href="/account">
              <Button color="blue" variant="outline">Click Here</Button>
            </Link>
          
        </div>
        
      ) : (
        <div>
          {scheduleEmails.map((email) => (
            // console.log(email.id)
            // console.log(email.data().postData)

            <Link key={email.id} href={`/email/${email.id}`}>
              <a>
                <ScheduledData
                  key={email.id}
                  firstName={email.data().firstName}
                  lastName={email.data().lastName}
                  senderEmail={email.data().senderEmail}
                  receiver={email.data().receiver}
                  subject={email.data().subject}
                  message={email.data().message}
                />
              </a>
            </Link>
          ))}
        </div>
      )}
      </div>
    </Container>
      );
      
}
