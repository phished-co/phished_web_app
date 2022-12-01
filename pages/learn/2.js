import styled from 'styled-components';
import { Text } from '@mantine/core';
import { Container } from '../quiz'

export const TextContainer = styled.div`
  display: flex;
  flex-grow: 3;
  flex-direction: column;
  align-items: start;
  min-width: 50vw;
  max-width: 70vw;
  height: 100%;
  margin: 0 auto;
  margin-top: 3rem;
  padding: 20px;
  ${'' /* border: green 2px solid; */}
`;

export const ImgContainer = styled.div`
  ${'' /* outline: 2px solid green; */}
  margin: 0 auto;

  img {
    margin: 0 auto;
    object-fit: cover;
    width: 100%;
    height: 30rem;
  }
`;

export const Header = styled.div`
    font-weight: 600;
    font-size: 2.5em;
    margin-bottom: 2rem;
`

export const AuthorDate = styled(Text)`
    font-size: 1em;
    margin-bottom: 2rem;
    color: grey;
`

export const SubHeading = styled(Text)`
  font-size: 1.75em;
  font-weight: 500;
`

const HoverLink = styled.span`
    color: blue;
    cursor: pointer;

    :hover {
      text-decoration: underline;
    }
`


export default function Article() {
  return (
    <Container>
      <ImgContainer>
        <img src="../../ArticleSplash/Ocean.png" />
      </ImgContainer>
      <TextContainer>
        <Header>The Most Common Phishing Methods in 2022 (and how to spot them)</Header>
        <AuthorDate>
          October 5 2022, 5:01pm
        </AuthorDate>
        <Text>
          Phishing scams are more sophisticated than ever. Phishing is an increasingly popular method used by criminals to steal personal data or infect devices – here’s an overview of the most common phishing techniques in 2022 and how you can avoid them.
        </Text>
        <br />
        <Text>
          <SubHeading>Email Phishing</SubHeading>
          <br />
          Emails are where the majority of phishing incidents occur – oftentimes a “spoofed domain address” will be used to further the illusion by impersonating a legitimate organizational address. By clicking on links or downloading attachments sent from sketchy emails, you open yourself up to being phished.

          To protect yourself, inspect the sender’s email address closely. Some addresses may exploit web fonts, exchanging capital I’s for l’s and 0 for O. Before taking any action on an email you’ve received, hover your mouse cursor over any buttons or links. Most browsers will show a URL preview at the bottom of your window – ensure that the URL is safe before proceeding.

        </Text>
        <br />
        <Text>
          <SubHeading>Spear Phishing</SubHeading>
          <br />
          While traditional phishing campaigns often rely on sending their emails en masse, “spear phishing” is a term used for scam campaigns that target specific groups or individuals. Criminals will include information or news specific to the target to make their email appear more credible. Spear phishing messages are created with care and use social engineering methods to trick their targets.

          Spear phishing attacks are highly effective and difficult to spot. Take steps to protect your online data by enabling two-factor authentication and using strong, unique passwords for each of your accounts.

        </Text>
        <br />
        <Text>
          <SubHeading>Whaling</SubHeading>
          <br />
          “Whaling” is a term that refers to two different phishing strategies. Traditional “whaling” attacks will target high-ranking employees within an organization because their accounts often have permission to access sensitive data.
          <br />
          Whaling also refers to the method that targets vulnerable people by sending them emails seemingly sent from people or organizations of authority. Because these figures often command a high-level of trust and respect, victims are more likely to be fooled.
          <br />
          Inducing fear is a key component to social engineering – when you receive important messages, consider the following:
          <br/>
          <br/>

              - Is the message urgent or time-sensitive? Criminals use language designed to pressure you.
              <br/>
              - heck the address the message is sent from – have you communicated with this address before?
              <br/>
              - Before clicking any links, hover over them and take a look at the URL preview at the bottom of your browser. 
              <br/>
              -Verify the link will direct you to a safe domain.
  
          <br/>
          <br />
          <SubHeading>Smishing</SubHeading>
          <br />
          “Smishing” is done through the SMS (short message service) that our cell phones utilize. Smishing messages can be just as nefarious as messages sent by email. Some attributes you can look out for are typos, poor grammar, and the area code of the sender.
          <br />
          —
          <br />
          Worried a family member might click on a phishing link? <a href='https://phished.app/account'><HoverLink>Send them a phishing email</HoverLink></a> with our free tool!

        </Text>
      </TextContainer>
    </Container>
  );
}
