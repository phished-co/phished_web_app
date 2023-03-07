import styles from './PhishForm.module.css';
import MyButton from '../button/Button';
import { Text } from '@mantine/core';

import { useState } from 'react';
import Link from 'next/link';

export default function PhishForm({ onSendEmail, onScheduleEmail }) {
  const [fromEmail, setFromEmail] = useState('');
  const [to, setTo] = useState('');
  const [html, setHtml] = useState('');
  const [subject, setSubject] = useState('');
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [successNote, setSuccessNote] = useState(false);
  const [errorNote, setErrorNote] = useState(false);

  const confirmStyle = {
    backgroundColor: 'RGBA(150,183,80,0.43)',
    padding: '10px',
    margin: '10px',
    textAlign: 'center',
    fontSize: '10px',
    borderRadius: '10px',
  };

  const errorStyle = {
    backgroundColor: 'RGBA(255,0,41,0.32)',
    padding: '10px',
    margin: '10px',
    textAlign: 'center',
    fontSize: '10px',
    borderRadius: '10px',
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

    let from = `${fname} ${lname} ${fromEmail}`;
    let validation = await onSendEmail({ from, to, subject, html });

    submissionNote(validation);

    if (validation) {
      setFromEmail('');
      setTo('');
      setFname('');
      setLname('');
      setSubject('');
      setHtml('');
    }
  }

  return (
    <div>
      <form className={styles.container} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="text"
          placeholder="phishing first name"
          name="name"
          value={fname}
          onChange={(e) => setFname(e.target.value)}
          required
        />
        <input
          className={styles.input}
          type="text"
          placeholder="phishing Last name"
          name="name"
          value={lname}
          onChange={(e) => setLname(e.target.value)}
          required
        />
        <input
          className={styles.input}
          type="text"
          placeholder="sender email"
          name="from"
          value={fromEmail}
          onChange={(e) => setFromEmail(e.target.value)}
          required
        />
        <input
          className={styles.input}
          type="text"
          placeholder="receiver email"
          name="to"
          value={to}
          onChange={(e) => setTo(e.target.value)}
          required
        />
        <input
          className={styles.input}
          type="text"
          placeholder="subject"
          name="subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
        <textarea
          className={styles.input}
          type="text"
          placeholder="content"
          name="content"
          value={html}
          onChange={(e) => setHtml(e.target.value)}
        />
        <MyButton type="submit" txt="send email" />
      </form>

      <Link href="/scheduleEmail" passHref>
        <a onClick={() => onScheduleEmail({ from, to, subject, html })}>
          <MyButton txt="schedule email for later" />
        </a>
      </Link>

      {successNote ? (
        <div style={confirmStyle}>
          <Text> Submitted successfully</Text>
        </div>
      ) : errorNote ? (
        <div style={errorStyle}>
          <Text> Please Enter a valid sender email </Text>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
