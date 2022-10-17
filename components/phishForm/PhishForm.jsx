import styles from './PhishForm.module.css';
import { useState } from 'react';

export default function PhishForm({ onSendEmail }) {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [html, setHtml] = useState('');
  const [subject, setSubject] = useState('');
  const [name, setName] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    setFrom(`${name}, ${from}`);
    onSendEmail({ from, to, subject, html });
    setFrom('');
    setTo('');
    setName('');
    setSubject('');
    setHtml('');
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
          name="from"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
        />
        <input
          className={styles.input}
          type="text"
          placeholder="receiver email"
          name="to"
          value={to}
          onChange={(e) => setTo(e.target.value)}
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
        <button className={styles.button} type="submit">
          send email
        </button>
      </form>
    </div>
  );
}
