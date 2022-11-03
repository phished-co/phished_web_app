import PhishForm from '../components/phishForm/PhishForm';
import MidtermForm from "../components/midtermForm/MidtermForm";
import axios from 'axios';
import styled from 'styled-components';

export const Container = styled.div`
  max-width: 360px;
  margin: 0 auto;
  margin-top: 4rem;
`

export default function Home() {
  // let senderEmailValidation;


    // function makeId(length) {
    //     let result = '';
    //     let characters = '0123456789abcdefghijklmnopqrstuvwxyz';
    //     let charactersLength = characters.length;
    //     for ( let i = 0; i < length; i++ ) {
    //         result += characters.charAt(Math.floor(Math.random() *
    //             charactersLength));
    //     }
    //     return result;
    // }


    const handleSendEmail = async (emailProperties) => {

      //sending query
      //   let theQuery = makeId(10)
      // emailProperties.uniqueQuary = theQuery
      // emailProperties.html += ` >>>> localhost:3000/youPhished?${theQuery}`
      //
      // console.log(emailProperties)

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

      <Container>
        {/* <PhishForm
          onSendEmail={handleSendEmail}
          onScheduleEmail={handleScheduleEmail}
        /> */}
        <MidtermForm
          onSendEmail={handleSendEmail}
          onScheduleEmail={handleScheduleEmail}
        />
      </Container>
    </>
  );
}
