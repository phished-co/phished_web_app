import PhishForm from '../components/phishForm/PhishForm';
import MidtermForm from '../components/midtermForm/MidtermForm';
import axios from 'axios';
import styled from 'styled-components';

export const Container = styled.div`
  max-width: 360px;
  margin: 0 auto;
  margin-top: 4rem;
`;



export default function Home() {
  const handleSendEmail = async (emailProperties) => {
    const res = await axios.post('/api/emailSent', {
      ...emailProperties,
      replyTo: 'phishedapp@gmail.com',
    });

    return res.data;
  };

  const handleScheduleEmail = (props) => {
    axios.post('/api/emailScheduled', props);
  };
  

  return (
    <>
      <Container>
        <MidtermForm
          onSendEmail={handleSendEmail}
          onScheduleEmail={handleScheduleEmail}
        />
      </Container>
    </>
  );
}
