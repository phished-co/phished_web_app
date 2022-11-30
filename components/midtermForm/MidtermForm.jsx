import { Button, createStyles, TextInput, Textarea } from '@mantine/core';
import styled from 'styled-components';
import { useState } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { Notification } from '@mantine/core';
import { IconCheck } from '@tabler/icons';


const templateStyle ={
  marginTop: 20,
  padding: 20,
  backgroundColor: '#D4EBFF',
  border: '1px dashed #50A7F2',
  borderRadius: '5px',
  color: '#3F3F3F',
  fontSize: '10px',
}

export function MidtermForm({ submitHandler, onScheduleEmail }) {

  // Inputs
  const [fromEmail, setFromEmail] = useState('');
  const [to, setTo] = useState('');
  const [html, setHtml] = useState('');
  const [subject, setSubject] = useState('');
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [targetName, setTargetName] = useState('');
  const [template, setTemplate] = useState('basic');

  const [successNote, setSuccessNote] = useState(false);

  async function onClick(e) {
    e.preventDefault();

    setTo('');
    setFromEmail('');
    setFname('');
    setLname('');
    setSubject('');
    setHtml('');
    setTargetName('');

    let from = `${fname} ${lname} ${fromEmail}`;
    let validation = submitHandler({ from, to, subject, html, targetName, template})

    setSuccessNote(true)
    const timeId = setTimeout(() => {
      setSuccessNote(false);}, 2000);
    return () => clearTimeout(timeId);
  }

  return (

  <>
    <div style={templateStyle} >
      {/* <p>[your text] <br/> link</p> */}
      <p>[Phish emoticon]</p>
      <p>[your text]</p>
      <p><u>Click Here</u></p>

    </div>

        <form onSubmit={onClick} style={{marginTop: 20 }} >

          <TextInput
              label="Receiver: First Name"
              placeholder="Jane"
              mb={12}
              value={fname}
              onChange={(e) => setFname(e.target.value)}
              required
          />
          <TextInput
              label="Receiver: Last Name"
              placeholder="Doe"
              mb={12}
              value={lname}
              onChange={(e) => setLname(e.target.value)}
              required
          />
          <TextInput
              label="Sender Email"
              placeholder="senders.email@gmail.com"
              mb={12}
              value={fromEmail}
              onChange={(e) => setFromEmail(e.target.value)}
              type="email"
              required
          />
          <TextInput
              label="Receiver Email"
              placeholder="receivers.email@gmail.com"
              mb={12}
              value={to}
              onChange={(e) => setTo(e.target.value)}
              type="email"
              required
          />


              <TextInput
                  label="Subject"
                  placeholder="You won!"
                    mb={12}
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    required

                />

                <Textarea
                    label="Content"
                    placeholder="Hi Mom..."
                    autosize
                    minRows={4}
                    value={html}
                    onChange={(e) => setHtml(e.target.value)}
                    required
                />
  {successNote &&
      <>
        <br></br>
        <Notification icon={<IconCheck size={18} />} color="teal" title="Email Sent">
          Submitted successfully
        </Notification>
      </>
      }

          <div className="button">
            <br />
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
        
    

  </>

  );
}

export default MidtermForm;
