import styled from "styled-components";
import { Divider, Text, Title } from "@mantine/core";

const Container = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  margin-top: 8rem;
`

const AboutContainer = styled.div`
  text-align: center;
  max-width: 60ch;
  margin: 0 auto;
`

export default function About() {
  return (
    <Container>
      <AboutContainer>
        <Title mb={12}>About Phished</Title>
        <Text>Phished is a non-profit organization that proudly empowers our users to educate their family members, friends, and neighbours on internet safety. Phished wil always be free and open-source. </Text>
        <br />
        <Text>Phished was developed for people to gain experience in dealing with phishing emails without exposing themselves to online fraud. Our phishing simulator provides hands-on training and is based on real-world examples of common phishing techniques. </Text>
        <br />
        <Text>If you have any questions, or want to get in contact, please send us an email at support@phished.app</Text>
        <Divider mt={48} mb={48} />
        <Text>Developed in Canada 🇨🇦 by Yasmina Amirifar, Sue Lee, Trevor Lee, Ivan Li, Lucia Martin, Sejin Oh, and Ivan Tong</Text>
      </AboutContainer>
    </Container>
  );
}
