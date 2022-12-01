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
import { Button, createStyles, TextInput, Textarea, Title, Container } from '@mantine/core';
import * as firebase from 'firebase/firestore';
import styled from 'styled-components';
import { authOptions } from '../api/auth/[...nextauth]';
import { unstable_getServerSession } from 'next-auth';
import { Notification } from '@mantine/core';
import { showNotification } from '@mantine/notifications';
import { IconCheck, IconX } from '@tabler/icons';


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

  console.log("this is the email props")
  console.log(email)
  const [fromEmail, setFromEmail] = useState(
    `${email.firstName} ${email.lastName} ${email.senderEmail}`
  );
  const [to, setTo] = useState(email.receiver);
  const [html, setHtml] = useState(email.message);
  const [subject, setSubject] = useState(email.subject);
  const [dateTime, setDateTime] = useState(firebase.Timestamp.now().seconds);

  const [successNote, setSuccessNote] = useState(false);

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
    axios.post('/api/emailTasks', { props });
  };

  function deleteScheduledEmail(id) {
    axios
      .delete(`/api/emailScheduled/${id}`)
      .then((res) => {
        // setScheduleEmails(emails.filter((email) => email.id !== id));
        console.log("delete email", res.data());
      })
      .catch((err) => {
        console.error('error', err);
      });
    return true;
  }

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
    setFromEmail("")
    setTo("")
    setSubject("")
    setHtml("")
    setSuccessNote(true)

  }
  return (
    <Container>
      <br></br>
      <Title color="blue.5" order={2}>Schedule Your Email</Title>
      <br></br>
      <form onSubmit={handleSubmit}>
        <TextInput
          onChange={(e) => setFromEmail(e.target.value)}
          label="from"
          value={fromEmail}
          mb={12}
          classNames={classes}
          required
          placeholder="Jane Doe janedoe@gmail.com"
        ></TextInput>
        <TextInput
          label="to"
          value={to}
          mb={12}
          classNames={classes}
          onChange={(e) => setTo(e.target.value)}
          required
          placeholder="receivers.email@gmail.com"
        ></TextInput>
        <TextInput
          label="subject"
          value={subject}
          mb={12}
          classNames={classes}
          onChange={(e) => setSubject(e.target.value)}
          required
          placeholder="You Won!"

        ></TextInput>
        <Textarea
          label="content"
          value={html}
          autosize
          minRows={4}
          classNames={textarea}
          onChange={(e) => setHtml(e.target.value)}
          required
          placeholder="Hi Mom..."
        ></Textarea>
        <div className="description">
        </div>


        <Calendar onChange={handleChange}></Calendar>

        <div className="button">
          <Button variant="outline" type="submit">
            Send on scheduled date
          </Button>
          <br>
          </br>
          <br></br>
          <Link href="/scheduleEmail">
            <Button variant="outline">Cancel</Button>
          </Link>
        </div>
      </form>
      <br></br>
      {successNote &&
        deleteScheduledEmail(email.id) &&
        showNotification({
          id: 'successEmail',
          disallowClose: true,
          autoClose: 7000,
          title: "Email Successfully Scheduled",
          message: 'Your email will be send on your chosen date.',
          color: 'teal',
          icon: <IconCheck />,
          className: 'my-notification-class',
          loading: false,
        })
      }
    </Container>
    // </>

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
        destination: '/',
        permanent: false,
      },
    };
  }

  const id = context.params.id;
  const email = await getDoc(doc(db, 'scheduledEmails', id));
  // console.log(email.data())

  if (!email.data()) {
    return {
      redirect: {
        destination: '/scheduleEmail',
        permanent: false,
      },
    };
  }

  const returnedEmail = email.data().options;
  returnedEmail.id = id;


  return {
    props: { email: returnedEmail },
  };

}