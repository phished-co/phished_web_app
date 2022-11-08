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
const Calendar = dynamic(
  () => import('../../components/datetimepicker/Calendar'),
  {
    ssr: false,
  }
);
import * as firebase from 'firebase/firestore';
import { Button, createStyles, TextInput, Textarea } from '@mantine/core';

export default function email({ email }) {
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
    <>
      <form onSubmit={handleSubmit}>
        <TextInput
          onChange={(e) => setFromEmail(e.target.value)}
          label="Your Phish Email"
          value={fromEmail}
        ></TextInput>
        <TextInput
          label="to"
          value={to}
          onChange={(e) => setTo(e.target.value)}
        ></TextInput>
        <TextInput
          label="subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        ></TextInput>
        <Textarea
          label="content"
          value={html}
          onChange={(e) => setHtml(e.target.value)}
        ></Textarea>
        <p>
          this is where the email should be edited/deleted and removed from
          scheduled emails once sent (this is sent to tasks) (once scheduled
          can't change it lol)
        </p>

        <Calendar onChange={handleChange}></Calendar>

        <Button variant="outline" type="submit">
          Schedule Email
        </Button>
      </form>
    </>
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
    fallback: true,
  };
}
