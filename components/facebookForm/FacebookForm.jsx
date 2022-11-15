import { Button, createStyles, TextInput, Textarea } from '@mantine/core';
import styled from 'styled-components';
import { useState } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';

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

export function FacebookForm({ onSendEmail, onScheduleEmail }) {
  // Styles
  const { classes } = useStyles();
  const { textarea } = textAreaStyles();

  // Inputs
  const [fromEmail, setFromEmail] = useState('');
  const [to, setTo] = useState('');
  const [html, setHtml] = useState('');
  const [subject, setSubject] = useState('');
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [template, setTemplate] = useState('basic');
  const [targetName, setTargetName] = useState('');

  const [successNote, setSuccessNote] = useState(false);
  const [errorNote, setErrorNote] = useState(false);

  const confirmStyle = {
    backgroundColor: 'RGBA(150,183,80,0.43)',
    padding: '10px',
    margin: '10px',
    textAlign: 'center',
    fontSize: '10px',
  };
  const errorStyle = {
    backgroundColor: 'RGBA(255,0,41,0.32)',
    padding: '10px',
    margin: '10px',
    textAlign: 'center',
    fontSize: '10px',
  };

  function submissionNote(validation) {
    setErrorNote(false);
    validation ? setSuccessNote(true) : setErrorNote(true);

    const timeId = setTimeout(() => {
      setSuccessNote(false);
    }, 2000);
    return () => clearTimeout(timeId);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    
    let template = "facebook"
    let from = `${fname} ${lname} ${fromEmail}`;
    let validation = await onSendEmail({ from, to, subject, html, template, targetName, template });

    submissionNote(validation);

    if (validation) {
      setFromEmail('');
      setTo('');
      setFname('');
      setLname('');
      setSubject('');
      setHtml('');
      setTargetName('');
    }
  }

  return (
      // <Container>

        <form onSubmit={handleSubmit}>

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
              label="Sender Email"
              placeholder="my.email@gmail.com"
              classnames={classes}
              mb={12}
              value={fromEmail}
              onChange={(e) => setFromEmail(e.target.value)}
              required
          />
          <TextInput
              label="Receiver Email"
              placeholder="receivers.email@gmail.com"
              classnames={classes}
              mb={12}
              value={to}
              onChange={(e) => setTo(e.target.value)}
              required
          />


              {/*<TextInput*/}
              {/*    label="Subject"*/}
              {/*    placeholder="You won!"*/}
              {/*      classnames={classes}*/}
              {/*      mb={12}*/}
              {/*      value={subject}*/}
              {/*      onChange={(e) => setSubject(e.target.value)}*/}
              {/*      required*/}

              {/*  />*/}

              {/*  <Textarea*/}
              {/*      label="Content"*/}
              {/*      placeholder="Hi Mom..."*/}
              {/*      autosize*/}
              {/*      minRows={4}*/}
              {/*      classnames={textarea}*/}
              {/*      value={html}*/}
              {/*      onChange={(e) => setHtml(e.target.value)}*/}
              {/*      required*/}
              {/*  />*/}

                <TextInput
                    type = "hidden"
                    value={"Verify your account"}
                    onChange={(e) => setSubject(e.target.value)}
                    required
                />

                <TextInput
                    label="target Name"
                    placeholder="sam"
                    classNames={classes}
                    mb={12}
                    value={targetName}
                    onChange={(e) => setTargetName(e.target.value)}
                    required
                />



          

          <div className="button">
            <Button type="submit" variant="outline">
              Send email
            </Button>

            <Link href="/scheduleEmail" passHref>
              <a
                  onClick={() =>
                      onScheduleEmail({ fname, lname, fromEmail, to, subject, html })
                  }
              >
                <Button variant="subtle">Schedule email for later</Button>
              </a>
            </Link>
          </div>
        </form>

      //   {successNote ? (
      //       <div style={confirmStyle}>
      //         <p> Submitted successfully</p>
      //       </div>
      //   ) : errorNote ? (
      //       <div style={errorStyle}>
      //         <p> Please Enter a valid sender email </p>
      //       </div>
      //   ) : (
      //       <></>
      //   )}
      // // </Container>
  );
}

export default FacebookForm;
