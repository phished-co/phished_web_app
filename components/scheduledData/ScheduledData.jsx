import styled from 'styled-components';
import { Button, Card, Table, Group} from '@mantine/core';


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
    <Table horizontalSpacing="sm">
    <tbody>
      <thead>
      <tr>
        <th>First Name:</th>
      <td>{firstName}</td>
    </tr>
    </thead>
    <thead>
    <tr >
        <th>Last Name:</th>
      <td>{lastName}</td>
    </tr>
    </thead>
    <thead>
    <tr>
        <th>Sender:</th>
      <td>{senderEmail}</td>
    </tr>
</thead>
<thead>
    <tr>
        <th>Receiver:</th>
      <td>{receiver}</td>
    </tr>
    </thead>
    <thead>
    <tr>
      
        <th>Subject:</th>
      <td>{subject}</td>
    </tr>
    </thead>
    <thead>
    <tr>
        <th>Message:</th>
      <td>{message}</td>
    </tr>
    </thead>
    </tbody>

    </Table>
    
        <br />

        <div className="button">

          <Button variant="outline" onClick={() => onEdit(id)}>
            Schedule email
          </Button>
          <br></br>
          <br></br>
          {/* <Link href={`/email/${id}`} key={id}> */}
          {/* <Button variant="outline">SET DATE</Button> */}
          {/* </Link> */}
          <Button variant="light" color="red" size="xs" compact onClick={() => onDelete(id)}>
            Delete
          </Button>
        
        </div>
        
      </Card>
      <br></br>
      </>
      
        
  
  );
}

