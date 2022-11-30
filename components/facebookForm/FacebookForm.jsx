import { Button, createStyles, TextInput, Textarea } from '@mantine/core';
import styled from 'styled-components';
import { useState } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { Notification } from '@mantine/core';
import { IconCheck, IconX } from '@tabler/icons';
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


const templateStyle ={
  marginTop: 20,
  padding: 20,
  backgroundColor: '#D4EBFF',
  border: '1px dashed #50A7F2',
  borderRadius: '5px',
  color: '#3F3F3F',
  fontSize: '10px',


}

export function FacebookForm({ submitHandler, onScheduleEmail }) {
  // Styles
  const { classes } = useStyles();
  const { textarea } = textAreaStyles();

  // Inputs
  const [subject, setSubject] = useState('Your Facebook password has been changed! ');
  const [fromEmail, setFromEmail] = useState('phishedapp@gmail.com');
  const [to, setTo] = useState('');
  const [html, setHtml] = useState('');
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [bodyName, setBodyName] = useState('');
  const [template, setTemplate] = useState('facebook');
  const [submissionNote, setSubmissionNote] = useState("invisable");




  async function onClick(e) {
    e.preventDefault();

    setTo('');
    setFname('');
    setLname('');
    setHtml('');
    setBodyName('');

    let from = `${fname} ${lname} ${fromEmail}`;
    let validation = await submitHandler({ from, to, subject, html, bodyName, template})
    
    setSubmissionNote(validation.toString())
    const timeId = setTimeout(() => {
      setSubmissionNote("invisable");
      }, 2500);
    return () => clearTimeout(timeId);

  }
  

  return (
      // <Container>

      <>
        <div style={templateStyle} >
          <p>Hello [targetName],</p>
          <p>Your Facebook password was changed on [datetime]</p>
          <p>If you did this, you can safely disregard this email.</p>
          <p>If you didn't do this, please <u>secure your account. </u></p>
          <p>Thanks, </p>
          <p>The Facebook Security Team</p>
        </div>

        <form onSubmit={onClick} style={{marginTop: 20 }} >

          <TextInput
              label="First Name"
              placeholder="Jane"
              classnames={classes}
              mb={12}
              value={fname}
              onChange={(e) => setFname(e.target.value)}
              required
          />
          <TextInput
              label="Last Name"
              placeholder="Doe"
              classnames={classes}
              mb={12}
              value={lname}
              onChange={(e) => setLname(e.target.value)}
              required
          />

          <TextInput
              label="Receiver Email"
              placeholder="receivers.email@gmail.com"
              classnames={classes}
              mb={12}
              value={to}
              onChange={(e) => setTo(e.target.value)}
              type="email"
              required
          />
          <TextInput
              label="Target Name"
              placeholder="Sam"
              classnames={classes}
              mb={12}
              value={bodyName}
              onChange={(e) => setBodyName(e.target.value)}
              required
          />



          <div className="button">
            <Button type="submit" variant="outline">
              Send email
            </Button>

            {/*<Link href="/scheduleEmail" passHref>*/}
            {/*  <a*/}
            {/*      onClick={() =>*/}
            {/*          onScheduleEmail({ fname, lname, fromEmail, to, subject, html })*/}
            {/*      }*/}
            {/*  >*/}
            {/*    <Button variant="subtle">Schedule email for later</Button>*/}
            {/*  </a>*/}
            {/*</Link>*/}
          </div>
        </form>

        {submissionNote=="true" &&
        <Notification icon={<IconCheck size={18} />} color="teal" title="Email Sent">
          Submitted successfully
        </Notification>
        }

        {submissionNote=="false" &&
        <Notification icon={<IconX size={18} />} color="red" title="Consent Needed">
          The person you are trying to phish has not consented to receiving our phishing emails yet. <a>Learn more</a>
        </Notification>
        }

      </>

  );
}

export default FacebookForm;
