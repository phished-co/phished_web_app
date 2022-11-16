import styled from 'styled-components';
import { Button } from '@mantine/core';
import Link from 'next/link';

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

  .button {
    display: flex;
    gap: 1rem;
    justify-content: center;
    margin-top: 1.5rem;
  }

  .message {
    display: block;
    width: 100px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    -webkit-line-clamp: 3;
  }
`;

export default function ScheduledData({
  firstName,
  lastName,
  senderEmail,
  receiver,
  subject,
  message,
  onDelete,
  onEdit,
  id,
}) {
  return (
    <Container>
      <div className="card">
        <h2 className="card-title">
          {firstName}
          {lastName}
        </h2>
        <p>First Name: {firstName}</p>
        <p>Last Name: {lastName}</p>
        <p>Sender: {senderEmail}</p>
        <p>Receiver: {receiver}</p>
        <p>Subject: {subject}</p>
        <span className="message">Message: {message}</span>
        <div className="button">
          {/* <Button variant="outline" onClick={() => onEdit(id)}>SET DATE</Button> */}
          <Link href={`/email/${id}`} key={id}>
            <Button variant="outline">SET DATE</Button>
          </Link>
          <Button variant="outline" onClick={() => onDelete(id)}>
            DELETE
          </Button>
        </div>
      </div>
    </Container>
  );
}
