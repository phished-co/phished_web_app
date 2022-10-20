import styles from './PhishForm.module.css';
import Button from '../button/Button';
import { useState } from 'react';
import Link from 'next/link';

export default function PhishForm({ onSendEmail, onScheduleEmail }) {
  const [fromEmail, setFromEmail] = useState('');
  const [to, setTo] = useState('');
  const [html, setHtml] = useState('');
  const [subject, setSubject] = useState('');
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [showNote, setShowNote] = useState(false);

  const mystyle = {
    backgroundColor: 'RGBA(150,183,80,0.)',
    padding: '10px',
    margin: '10px',
    textAlign: 'center',
    fontSize: '10px',
  };

  function confirmationNote() {
    const timeId = setTimeout(() => {
      setShowNote(false);
    }, 2000);

    return () => {
      clearTimeout(timeId);
    };
  }

  let from = `${fname} ${lname} ${fromEmail}`;
  function handleSubmit(e) {
    e.preventDefault();
    onSendEmail({ from, to, subject, html });

    setShowNote(true);
    confirmationNote();

    setFromEmail('');
    setTo('');
    setFname('');
    setLname('');
    setSubject('');
    setHtml('');
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
        <Button type="submit" txt="send email" />
      </form>
      <Link href="/scheduleEmail" passHref>
        <a onClick={() => onScheduleEmail({ from, to, subject, html })}>
          <Button txt="schedule email for later" />
        </a>
      </Link>
      {/* {emailNotif ? <EmailSentNotif email={to}></EmailSentNotif> : <></>} */}
      {showNote ? (
        <div style={mystyle}>
          <p> Submitted successfully</p>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
