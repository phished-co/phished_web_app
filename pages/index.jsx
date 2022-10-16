import Search from '../components/search/Search';
import Header from '../components/header/Header';
import styles from '../styles/Home.module.css';
import axios from 'axios';

export default function Home() {
  function handleSendEmail(name, fromEmail, toEmail, subject, content) {
    axios
      .post('/api/hello', {
        from: `${name} ${fromEmail}`,
        to: `${toEmail}`,
        subject: `${subject}`,
        text: `${content}`,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <>
      <Header></Header>
      <div className={styles.container}>
        <h1> Welcome to phished!</h1>
        <Search onSendEmail={handleSendEmail} />
      </div>
    </>
  );
}
