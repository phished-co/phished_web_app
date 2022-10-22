import styles from './PhishForm.module.css';
import Button from '../button/Button';

import { useState } from 'react';
// import EmailDeepValidator from 'email-deep-validator';
//import EmailValidator from 'email-validator';



export default function PhishForm({ onSendEmail, senderEmailValidator}) {
  const [fromEmail, setFromEmail] = useState('');
  const [to, setTo] = useState('');
  const [html, setHtml] = useState('');
  const [subject, setSubject] = useState('');
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [submissionNote, setSubmissionNote] = useState(false)
  const [errorNote, setErrorNote]= useState(false)


  const confrimStyle = {
    backgroundColor: "RGBA(150,183,80,0.43)",
    padding: "10px",
    margin:"10px",
    textAlign:"center",
    fontSize:"10px"
  };

  const errorStyle = {
    backgroundColor: "RGBA(255,0,41,0.32)",
    padding: "10px",
    margin:"10px",
    textAlign:"center",
    fontSize:"10px"
  };


  function confirmationNote(validation){
    validation? setSubmissionNote(true): setErrorNote(true)

    const timeId = setTimeout(() => {
      setSubmissionNote(false)

    }, 2000)
    return () => clearTimeout(timeId);
  }


  async function handleSubmit(e) {

    e.preventDefault();

    setErrorNote(false)
    let from = `${fname} ${lname} ${fromEmail}`;
    let validation = await onSendEmail({ from, to, subject, html });

    if (validation) {
      setFromEmail('');
      setTo('');
      setFname('');
      setLname('');
      setSubject('');
      setHtml('');
      }

      confirmationNote(validation)


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
        <Button type="submit" txt = "send email" />
      </form>

      {/* {emailNotif ? <EmailSentNotif email={to}></EmailSentNotif> : <></>} */}
      {submissionNote ? <div style={confrimStyle}><p> Submitted successfully</p></div>
        : <></>
      }
      {errorNote ? <div style={errorStyle}><p> Please Enter a valid sender email </p></div>
        : <></>
      }

    </div>
  );
}


