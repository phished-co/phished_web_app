import PhishForm from '../components/phishForm/PhishForm';
import MidtermForm from "../components/midtermForm/MidtermForm";
import Button from '../components/button/Button';
import axios from 'axios';
import styled from 'styled-components';

export const Container = styled.div`
  outline: 2px solid red;
  max-width: 360px;
  margin: 0 auto
`

export default function Home() {
  // let senderEmailValidation;

  const handleSendEmail = async (emailProperties) => {
    await axios.post('/api/emailSent', {
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
      <Container>
        <PhishForm
          onSendEmail={handleSendEmail}
          onScheduleEmail={handleScheduleEmail}
        />
        <MidtermForm
          onSendEmail={handleSendEmail}
          onScheduleEmail={handleScheduleEmail}
        />
      </Container>
    </>
  );
}
