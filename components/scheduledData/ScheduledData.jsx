import styled from 'styled-components';
import { Button } from '@mantine/core';
import Link from 'next/link';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin: 2rem;
  width: 80%;
  font-family: 'Verdana';

  .card {
    border: 1px solid #459cfb;
    padding: 2rem;
    border-radius: 10px;
  }

  .card .card-title {
    margin: 0 0 1rem 0;
    font-size: 1.5rem;
    font-weight: 600;
    text-transform: uppercase;
    color: #292a2d;
  }

  .card .info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 50%;
    color: #292a2d;
  }

  .button {
    display: flex;
    gap: 1rem;
    justify-content: center;
    margin-top: 1.5rem;
  }

  .message {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 200px;
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
          {firstName} {lastName}
        </h2>
        <div className="info">
          <p>
            <strong>First Name:</strong> {firstName}
          </p>
          <p>
            <strong>Last Name:</strong> {lastName}
          </p>
          <p>
            <strong>Sender:</strong> {senderEmail}
          </p>
          <p>
            <strong>Receiver:</strong> {receiver}
          </p>
          <p>
            <strong>Subject:</strong> {subject}
          </p>
          <span className="message">
            <strong>Message:</strong> {message}
          </span>
        </div>
        <div className="button">
          <Button variant="outline" onClick={() => onEdit(id)}>
            SET DATE
          </Button>
          {/* <Link href={`/email/${id}`} key={id}> */}
          {/* <Button variant="outline">SET DATE</Button> */}
          {/* </Link> */}
          <Button variant="outline" onClick={() => onDelete(id)}>
            DELETE
          </Button>
        </div>
      </div>
    </Container>
  );
}
