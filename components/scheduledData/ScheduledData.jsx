import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin: 2rem;
  width: 100%;

  .card {
    border: 1px solid #459cfb;
    padding: 2rem;
    border-radius: 10px;
  }

  .card .card-title {
    margin: 0 0 1rem 0;
    font-size: 1.5rem;
  }
`;

export default function ScheduledData({
  firstName,
  lastName,
  senderEmail,
  receiver,
  subject,
  message,
}) {
  return (
    <Container>
      <div className="card">
        <h2 className="card-title">Phished</h2>
        <p>First Name: {firstName}</p>
        <p>Last Name: {lastName}</p>
        <p>Sender: {senderEmail}</p>
        <p>Receiver: {receiver}</p>
        <p>Subject: {subject}</p>
        <p>Message: {message}</p>
      </div>
    </Container>
  );
}
