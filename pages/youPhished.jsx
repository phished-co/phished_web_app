import styled from 'styled-components';
import { Text, Title, Divider, Accordion } from "@mantine/core";

const Container = styled.div`
  max-width: 420px;
  margin: 0 auto;
  padding: 1rem;

  .hero {
    text-align: center;
  }

  .oops {
    font-size: 8rem;
  }

`


export default function tracktest() {
  return (
    <>
      <Container>
        <div className="hero">
          <Title className="oops">Oops!</Title>
          <Title order={3} size={'1.75rem'}>You've been phished 🎣</Title>
          <Text>You're here because you clicked on a link that you shouldn't have. Don't feel embarassed – politicians, CEOs, and many more people have all been fooled by phishing emails. </Text>
        </div>
        <Divider mt={48} mb={48} />
        <Title order={4} size={'1.5rem'}>Don't worry!</Title>
        <Text>Your device has not been compromised and your personal data is safe. Our mission is to educate people to protect themselves online.</Text>
        <Title order={4} size={'1.5rem'} mt={32}>Tips for next time</Title>
        <Text>Spotting and recognizing phishing emails is not easy. Keep these tips in mind for next time:</Text>

        <Accordion variant="contained" radius="md" defaultValue={'who'} mt={16}>
          <Accordion.Item value="who">
            <Accordion.Control>Who is it?</Accordion.Control>
            <Accordion.Panel>Look to the sender's email address – does it make sense? Does the email address match up with the email content? When in doubt, don't respond or reply to the email – seek them out directly on your own.</Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item value="urls">
            <Accordion.Control>Suspicious URLs</Accordion.Control>
            <Accordion.Panel>Before clicking, hover your cursor over a link. Some signs of a fishy URL include misspelled words, extra words, or numbers tacked onto the end.</Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item value="urgency">
            <Accordion.Control>A Sense of Urgency</Accordion.Control>
            <Accordion.Panel>Be suspicious of emails that issue threats or urgent call-to-actions; scammers create a false sense of security to pressure their victims into making a mistake.</Accordion.Panel>
          </Accordion.Item>
        </Accordion>

      </Container>
    </>
  );
}


