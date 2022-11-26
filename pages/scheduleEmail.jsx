import { useState, useEffect } from 'react';
import ScheduledData from '../components/scheduledData/ScheduledData';
import { Button } from '@mantine/core';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styled from 'styled-components';
import axios from 'axios';
import { authOptions } from './api/auth/[...nextauth]';
import { unstable_getServerSession } from 'next-auth';

const Container = styled.div`
  div h1 {
    margin: 2rem;
  }

  .title {
    display: flex;
    justify-content: center;
    font-family: 'Verdana';
    text-transform: uppercase;
    color: #459cfb;
  }

  .btn-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2rem;
    height: 40vh;
  }

  div .box {
    font-size: 1.5rem;
  }

  .card {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 65%;
    margin: 0 auto;
  }

  .card .button {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1.5rem;
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
    <Container>
      <div>
      <h1 className="title">Scheduled Email List</h1>
        {loading ? (
          <h1 className="title"> Loading... </h1>
        ) : scheduleEmails.length === 0 ? (
          <div>
            <div className="box">

            <h2 className="title">No scheduled Email</h2>
            <p className="title">Consider adding a scheduled Email from </p>
            </div>
            <div className="btn-container">
            <Link href="/account">
              <Button color="blue" variant="outline">
                Click Here
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
