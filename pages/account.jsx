import Search from '../components/phishForm/PhishForm';
import Header from '../components/header/Header';
import styles from '../styles/Home.module.css';
import Button from '../components/button/Button';
import { Container } from '../styles/global';
// import {getUsers, setUsers} from "../firebase/users"
import axios from 'axios';



export default function Home() {
  const handleSendEmail = async (emailProperties) => {
    // eslint-disable-next-line no-unused-vars
    const res = await axios.post('/api/emailSent', {
      ...emailProperties,
      replyTo: 'phishedapp@gmail.com',
    });
  };


  return (
    <>
      <Header></Header>
      <Container>
        <Search onSendEmail={handleSendEmail} />
      </Container>
    </>
  );
}
