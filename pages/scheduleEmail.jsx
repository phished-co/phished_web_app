import { useState, useEffect } from 'react';
import ScheduledData from '../components/scheduledData/ScheduledData';
import { Button, Container, Title, Card } from '@mantine/core';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styled from 'styled-components';
import axios from 'axios';
import { authOptions } from './api/auth/[...nextauth]';
import { unstable_getServerSession } from 'next-auth';
import NextNProgress from '../components/LoadingBar/LoadingBar';

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
        console.log('+++', res.data);
      })
      .catch((err) => {
        console.log('error appeared', err);
      });

    // reset loading
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const handleDelete = (id) => {
    console.log('delete', id);
    if (id) {
      axios
        .delete(`/api/emailScheduled/${id}`)
        .then((res) => {
          setScheduleEmails(emails.filter((email) => email.id !== id));
          // console.log("delete email", res.data.id);
        })
        .catch((err) => {
          console.error('error', err);
        });
      // redirect to the scheduleEmail page
      router.reload();
    }
  };

  const handleEdit = (id) => {
    console.log('edit', id);
    router.push(`/email/${id}`);
  };

  return (
    <>
    <NextNProgress
      color="#459CFB"
      startPosition={0.3}
      stopDelayMs={300}
      height={5}
      showOnShallow={true}
      easing="ease"
      speed={500}
      options={{ showSpinner: false }}
    />
    <Container>
      <div>
        <br></br>
        <Title color="blue.5" order={2}>
          Your Scheduled Emails
        </Title>
        <br></br>
        {loading ? (
          <Title order={5} color="dimmed" italic>
            loading...
          </Title>
        ) : scheduleEmails.length === 0 ? (
          <div>
            <div className="box">
              <Title order={5} color="dimmed" italic>
                No scheduled Emails
              </Title>
              <br />
            </div>
            <div className="btn-container">
              <Link href="/account">
                <Button color="blue" variant="outline">
                  Add a Scheduled Email
                </Button>
              </Link>
            </div>
          </div>
        ) : (
          <div className="card">
            {scheduleEmails.map((email) => (
              <ScheduledData
                id={email.id}
                key={email.id}
                firstName={email.options.firstName}
                lastName={email.options.lastName}
                senderEmail={email.options.senderEmail}
                receiver={email.options.receiver}
                subject={email.options.subject}
                message={email.options.message}
                onDelete={handleDelete}
                onEdit={handleEdit}
              />
            ))}
            <Link href="/account" className="button">
              <Button color="blue" variant="outline">
                Go back to Email page
              </Button>
            </Link>
          </div>
        )}
      </div>
    </Container>
    </>
  );
}
export async function getServerSideProps(context) {
  const session = await unstable_getServerSession(
    context.req,
    context.res,
    authOptions
  );

  if (!session) {
    return {
      redirect: {
        destination: '/api/auth/signin',
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
}
