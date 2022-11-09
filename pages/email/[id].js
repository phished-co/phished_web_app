import { db } from '../../firebaseConfig';
import {
  collection,
  doc,
  addDoc,
  getDoc,
  getDocs,
  deleteDoc,
} from 'firebase/firestore';
import { useState } from 'react';
import axios from 'axios';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { Button, createStyles, TextInput, Textarea } from '@mantine/core';
import * as firebase from 'firebase/firestore';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50vw;
  margin: 3rem auto;

  h1 {
    margin-bottom: 2rem;
  }

  .button {
    display: flex;
    gap: 1rem;
    justify-content: center;
  }

  .description {
    margin: 1rem;
  }
`;

const useStyles = createStyles((theme) => ({
  root: {
    position: 'relative',
  },

  input: {
    height: 'auto',
    paddingTop: 16,
  },

  label: {
    position: 'absolute',
    pointerEvents: 'none',
    fontSize: theme.fontSizes.xs,
    paddingLeft: theme.spacing.sm,
    paddingTop: theme.spacing.sm / 2,
    zIndex: 1,
  },
}));

const textAreaStyles = createStyles((theme) => ({
  root: {
    position: 'relative',
  },

  input: {
    height: 'auto',
    paddingTop: 16,
  },

  label: {
    position: 'absolute',
    pointerEvents: 'none',
    fontSize: theme.fontSizes.xs,
    paddingLeft: theme.spacing.sm,
    paddingTop: theme.spacing.sm / 2,
    zIndex: 1,
  },
}));

const Calendar = dynamic(
  () => import('../../components/datetimepicker/Calendar'),
  {
    ssr: false,
  }
);

export default function Email({ email }) {
  const { classes } = useStyles();
  const { textarea } = textAreaStyles();

  const [fromEmail, setFromEmail] = useState(
    `${email.firstName} ${email.lastName} ${email.senderEmail}`
  );
  const [to, setTo] = useState(email.receiver);
  const [html, setHtml] = useState(email.message);
  const [subject, setSubject] = useState(email.subject);
  const [dateTime, setDateTime] = useState(firebase.Timestamp.now().seconds);

  function handleChange(date, time) {
    console.log('this is from handleChange');
    console.log(new Date(`${date} ${time}`));

    let firebaseTimestamp = firebase.Timestamp.fromDate(
      new Date(`${date} ${time}`)
    ).seconds;
    // setDateTime(new Date(`${date} ${time}`));
    setDateTime(firebaseTimestamp);
  }

  const handleScheduleEmail = (props) => {
    axios.post('/api/emailTasks', props);
  };

  async function handleSubmit(e) {
    e.preventDefault();
    let emailTemplate = {
      performAt: dateTime,
      worker: 'mailer',
      status: 'scheduled',
      options: {
        from: fromEmail,
        to: to,
        html: html,
        text: html,
        subject: subject,
      },
    };
    console.log(emailTemplate);
    handleScheduleEmail(emailTemplate);
  }
  return (
    <Container>
      <h1> Schedule Your Email</h1>
      <form onSubmit={handleSubmit}>
        <TextInput
          onChange={(e) => setFromEmail(e.target.value)}
          label="Your Phish Email"
          value={fromEmail}
          mb={12}
          classNames={classes}
          required
        ></TextInput>
        <TextInput
          label="to"
          value={to}
          mb={12}
          classNames={classes}
          onChange={(e) => setTo(e.target.value)}
          required
        ></TextInput>
        <TextInput
          label="subject"
          value={subject}
          mb={12}
          classNames={classes}
          onChange={(e) => setSubject(e.target.value)}
          required
        ></TextInput>
        <Textarea
          label="content"
          value={html}
          autosize
          minRows={4}
          classNames={textarea}
          onChange={(e) => setHtml(e.target.value)}
          required
        ></Textarea>
        <div className="description">
          This is where the email should be edited/deleted and removed from
          scheduled emails once sent (this is sent to tasks) (once scheduled
          can't change it lol)
        </div>

        <Calendar onChange={handleChange}></Calendar>

        <div className="button">
          <Button variant="outline" type="submit">
            Schedule Email
          </Button>
          <Link href="/scheduleEmail">
            <Button variant="outline">Cancel</Button>
          </Link>
        </div>
      </form>
    </Container>
  );
}

export async function getStaticProps(context) {
  const id = context.params.id;
  const email = await getDoc(doc(db, 'scheduledEmails', id));
  console.log(email.data());
  const returnedEmail = email.data();
  return {
    props: { email: returnedEmail },
  };
}

export async function getStaticPaths() {
  const querySnapshot = await getDocs(collection(db, 'scheduledEmails'));
  const allEmails = [];
  querySnapshot.forEach((doc) => {
    allEmails.push(doc);
  });
  const paths = allEmails.map((email) => {
    return {
      params: { id: `${email.id}` },
    };
  });

  return {
    paths,
    fallback: false,
  };
}
