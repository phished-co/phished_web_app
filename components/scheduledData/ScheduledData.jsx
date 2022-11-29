import styled from 'styled-components';
import { Button, Card } from '@mantine/core';


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
    <>
      <Card  p="lg" radius="md" withBorder>
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
        <br />
        <div className="button">
          <Button variant="outline" onClick={() => onEdit(id)}>
            Schedule Date
          </Button>
          <br></br>
          <br></br>
          {/* <Link href={`/email/${id}`} key={id}> */}
          {/* <Button variant="outline">SET DATE</Button> */}
          {/* </Link> */}
          <Button variant="outline" onClick={() => onDelete(id)}>
            Delete
          </Button>
        </div>
        
      </Card>
      <br></br>
      </>
      
        
  
  );
}

