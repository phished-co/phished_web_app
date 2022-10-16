import styles from './Search.module.css';
import { useState } from 'react';

export default function Search({ onSendEmail }) {
  const [fromEmail, setFromEmail] = useState('');
  const [toEmail, setToEmail] = useState('');
  const [content, setContent] = useState('');
  const [subject, setSubject] = useState('');
  const [name, setName] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    onSendEmail({ name, fromEmail, toEmail, subject, content });
    setFromEmail('');
    setToEmail('');
    setName('');
  }
  return (
    <div>
      <form className={styles.container} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="text"
          placeholder="full name of phish"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className={styles.input}
          type="text"
          placeholder="sender email"
          name="fromEmail"
          value={fromEmail}
          onChange={(e) => setFromEmail(e.target.value)}
        />
        <input
          className={styles.input}
          type="text"
          placeholder="receiver email"
          name="toEmail"
          value={toEmail}
          onChange={(e) => setToEmail(e.target.value)}
        />
        <input
          className={styles.input}
          type="text"
          placeholder="subject"
          name="subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
        <input
          className={styles.input}
          type="text"
          placeholder="content"
          name="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button className={styles.button} type="submit">
          send email
        </button>
      </form>
    </div>
  );
}
