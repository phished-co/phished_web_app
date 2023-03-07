import { Button, createStyles, TextInput, Textarea, Text } from '@mantine/core';
import styled from 'styled-components';
import { useState } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { Notification } from '@mantine/core';
import { IconCheck, IconX } from '@tabler/icons';
import { showNotification } from '@mantine/notifications';
// import Calendar from '../datetimepicker/Calendar';

const Container = styled.div`
  .button {
    display: flex;
    gap: 1rem;
    justify-content: center;
    margin-top: 2rem;
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

const templateStyle = {
  marginTop: 20,
  padding: 20,
  backgroundColor: '#D4EBFF',
  border: '1px dashed #50A7F2',
  borderRadius: '5px',
  color: '#3F3F3F',
  fontSize: '10px',
};

export function NewDeviceForm({ submitHandler, onScheduleEmail }) {
  // Styles
  const { classes } = useStyles();
  const { textarea } = textAreaStyles();

  // Inputs
  const [subject, setSubject] = useState('New login');
  const [fromEmail, setFromEmail] = useState('phishedapp@gmail.com');
  const [to, setTo] = useState('');
  const [html, setHtml] = useState('');
  const [fname, setFname] = useState('Automated Message');
  const [lname, setLname] = useState('');
  const [template, setTemplate] = useState('new_device');
  const [submissionNote, setSubmissionNote] = useState('invisable');

  async function onClick(e) {
    e.preventDefault();

    setTo('');
    setHtml('');

    let from = `${fname} ${lname} ${fromEmail}`;
    let validation = await submitHandler({ from, to, subject, html, template });

    setSubmissionNote(validation.toString());
    const timeId = setTimeout(() => {
      setSubmissionNote('invisable');
    }, 4500);
    return () => clearTimeout(timeId);
  }

  return (
    // <Container>

    <>
      <div style={templateStyle}>
        <Text>New device signed in using [target email]</Text>
        <Text>
          Your account was just signed in to from a new Apple IPhone device.
          You're getting this email to make sure it was you.
        </Text>
        <Text>
          <u>CHECK ACTIVITY</u>
        </Text>
      </div>

      <form onSubmit={onClick} style={{ marginTop: 20 }}>
        <TextInput
          label="Receiver's Email"
          placeholder="receivers.email@gmail.com"
          classnames={classes}
          mb={12}
          value={to}
          onChange={(e) => setTo(e.target.value)}
          type="email"
          required
        />

        <div className="button">
          <Button type="submit" variant="outline">
            Send email
          </Button>

          {/*<Link href="/scheduleEmail" passHref>*/}
          {/*  <a*/}
          {/*      onClick={() =>*/}
          {/*          onScheduleEmail({ fname, lname, fromEmail, to, subject, html, template })*/}
          {/*      }*/}
          {/*  >*/}
          {/*    <Button variant="subtle">Save email for later</Button>*/}
          {/*  </a>*/}
          {/*</Link>*/}
        </div>
      </form>

      {submissionNote == 'true' &&
        showNotification({
          id: 'successEmail',
          disallowClose: true,
          autoClose: 7000,
          title: 'Email Submitted',
          message: 'It may take a few minutes before the email is delivered.',
          color: 'teal',
          icon: <IconCheck />,
          className: 'my-notification-class',
          loading: false,
        })}

      {submissionNote == 'false' &&
        showNotification({
          id: 'consentFailed',
          disallowClose: false,
          autoClose: 10000,
          title: 'Consent Needed',
          message: (
            <>
              The person you are trying to phish has not consented to receiving
              our phishing emails yet.{' '}
              <a href="https://phished.app/consentEmails">Learn more.</a>
            </>
          ),
          color: 'red',
          icon: <IconX />,
          className: 'my-notification-class',
          loading: false,
          styles: (theme) => ({
            root: {
              backgroundColor: theme.white,
              borderColor: theme.white,
            },

            title: { color: theme.colors.red[7] },
            // description: { color: theme.colors.red[6] },
            closeButton: {
              color: theme.colors.red[7],
            },
          }),
        })}
    </>
  );
}

export default NewDeviceForm;
