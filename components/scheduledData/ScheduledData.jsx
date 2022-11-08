import styles from './ScheduledData.module.css';

export default function ScheduledData({
  firstName,
  lastName,
  senderEmail,
  receiver,
  subject,
  message,
}) {
  return (
    <div className={styles.data}>
      <p>FirstName: {firstName}</p>
      <p>LastName: {lastName}</p>
      <p>Sender: {senderEmail}</p>
      <p>Receiver: {receiver}</p>
      <p>Subject: {subject}</p>
      <p>Message: {message}</p>
    </div>
  );
}
