import { useState, useEffect } from 'react';
import ScheduledData from '../components/scheduledData/ScheduledData';
import { Button } from '@mantine/core';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styled from 'styled-components';
import axios from 'axios';

const Container = styled.div`
  div h1 {
    margin: 2rem;
  }
`;

export default function About() {
  const router = useRouter();
  const [scheduleEmails, setScheduleEmails] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // get the scheduled emails from the database
    axios
      .get('/api/emailScheduled')
      .then((res) => {
        setScheduleEmails(res.data);
        console.log("+++", res.data);
      })
      .catch((err) => {
        console.log('error appeared', err);
      });

    // reset loading
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const handleDelete = () => {
    axios
      .delete(`/api/emailScheduled`)
      .then((res) => {
        // setScheduleEmails(
        //   emails.filter((singleEmail) => singleEmail.id !== id)
        //   )
          console.log("delete email", res.data.id);
      })
      .catch((err) => {
        console.error('error', err);
      });
  };

  return (
    <Container>
      <div>
        <h1>Scheduled Email List</h1>

        {loading ? (
          <h1> Loading... </h1>
        ) : scheduleEmails.length === 0 ? (
          <div>
            <h1>No scheduled Email</h1>
            <p>Consider adding a scheduled Email from </p>
            <Link href="/account">
              <Button color="blue" variant="outline">
                Click Here
              </Button>
            </Link>
          </div>
        ) : (
          <div>
            {scheduleEmails.map((email) => (
              <Link key={email.id} href={`/email/${email.id}`}>
                <a>
              <ScheduledData
                key={email.id}
                firstName={email.firstName}
                lastName={email.lastName}
                senderEmail={email.senderEmail}
                receiver={email.receiver}
                subject={email.subject}
                message={email.message}
                // onDelete={handleDelete}
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
