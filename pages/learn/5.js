import styled from 'styled-components';
import { Text } from '@mantine/core';
import { TextContainer, ImgContainer, Header, AuthorDate } from './2';
import { Container } from '../quiz'

export const SubHeading = styled(Text)`
  font-size: 1.75em;
  font-weight: 500;
`
export const SubSubHeading = styled(Text)`
  font-size: 1.25em;
  font-weight: 500;
  margin-bottom:0.5rem;
  color:#5e5e5e;
`

export default function Article() {
  return (
    <div>
      <ImgContainer>
        <img src="../../ArticleSplash/Shield.png" />
      </ImgContainer>
      <TextContainer>
        <Header>Senior's guide to staying cyber safe</Header>
        <AuthorDate>
          September 9 2022, 10:32 am
        </AuthorDate>
        <Text>
          The Internet and mobile devices have some risks, just like any other powerful tool. As long as you adhere to some fundamental rules of the digital road, these dangers can be controlled. In addition to all the topics we discuss in this guide, we also go over basic safety measures.
        </Text>
        <br />
        <Text>
          <SubHeading>Tips to Stay Safe</SubHeading>
          <br />
          <SubSubHeading>Use strong and unique passwords for every account</SubSubHeading>
          Experts recommend including symbols, numbers, upper and lowercase letters, and at least eight characters. Try to avoid using names or common words. To further security, always enable multi-factor authentication.

        </Text>
        <br />
        <Text>
        <SubSubHeading>Report online abuse</SubSubHeading>
        Any abuse should be reported, whether directed towards you or not. Children are frequently mentioned as victims of "cyberbullying," but it may also happen to adults, especially elders. Reach out for support and assistance from a person you can trust and report the conduct to the website or service if you receive emails or texts that are threatening, mean, accusatory, or otherwise abusive. All significant social media platforms, as well as internet and mobile service providers, have staff members who respond to abuse reports.
        </Text>
      </TextContainer>
    </div>
  );
}