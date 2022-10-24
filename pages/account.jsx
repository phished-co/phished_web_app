import PhishForm from '../components/phishForm/PhishForm';
// import Header from '../components/header/Header';
import styles from '../styles/Home.module.css';
import Button from '../components/button/Button';
import { Container } from '../styles/global';
import axios from 'axios';

export default function Home() {
  // let senderEmailValidation;

  const handleSendEmail = async (emailProperties) => {
   const res = await axios.post('/api/emailSent', {
      ...emailProperties,
      replyTo: 'phishedapp@gmail.com',
    });
    
    return res.data
  };

  const handleScheduleEmail = (props) => {
    axios.post('/api/emailScheduled', props);
  };

  return (
    <>
      {/*<Header></Header>*/}
      <Container>
        <PhishForm
          onSendEmail={handleSendEmail}
          onScheduleEmail={handleScheduleEmail}
        />
      </Container>
    </>
  );
}
