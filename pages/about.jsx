import styled from 'styled-components';
import { Divider, Text, Title, List } from '@mantine/core';
import { useRouter } from 'next/router';
import { NumbersCards } from '../components/mantine/cardFeature/cardNumbers';
import { Text } from '@mantine/core';

const Container = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  margin-top: 2rem;
  padding: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .cnt {
    width: 95%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
  }

  .first {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const SubCont = styled.div`
  ${'' /* text-align: center; */}
  width: 90%;
  margin: 2rem 0;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  .left {
    margin-right: 10px;
    width: 45%;

    @media (max-width: 768px) {
      display: none;
    }
  }

  .right {
    margin-left: 10px;
    width: 45%;

    @media (max-width: 768px) {
      width: 100%;
      justify-content: center;
    }
  }
`;
const Link = styled.span`
  color: #449cfe;
  font-weight: bold;

  :hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export default function About() {
  const r = useRouter();

  return (
    <Container>
      <SubCont>
        <Title mb={30} order={2} size="h1" weight="900">
          About Us{' '}
        </Title>

        <div className="cnt">
          <Text sx={{ lineHeight: 1.6 }}>
            {' '}
            <Text weight="700" component="span" variant="gradient">
              Phished Co.
            </Text>{' '}
            is a team of students from BCIT studying Digital Design and
            Development and Full-Stack Web Development. With the topic of
            developing online digital solutions for underrepresented or
            disadvantaged communities, our group wanted to address and resolve
            the problem of one of the most common and serious cybercrimes,
            phishing.
          </Text>
          <br />
          <Text sx={{ lineHeight: 1.6 }}>
            As phishing techniques are constantly evolving, phishing and scam
            campaigns are more common than ever. Elderly individuals are
            targeted more due to their low tech proficiency and typically have
            larger savings.
          </Text>
          <br />
          <Text sx={{ lineHeight: 1.6 }}>
            We've taken this matter into our own hands and developed a solution
            to help not only elderly individuals, but also other vulnerable
            users on the internet.{' '}
          </Text>
        </div>
      </SubCont>

      <SubCont>
        <Title mb={30} order={2} size="h1" weight="900">
          What is{' '}
          <Text
            component="span"
            variant="gradient"
            gradient={{ from: 'blue', to: 'blue' }}
            inherit
          >
            Phishing
          </Text>
          ?
        </Title>

        <div className="cnt">
          <Text sx={{ lineHeight: 1.6 }}>
            Phishing is a social engineering cybercrime where a scammer uses
            methods such as calling, emailing, or texting to trick victims into
            revealing sensitive information, such as their credit card numbers,
            bank information, or login credentials.
          </Text>
          <br />
          <Text sx={{ lineHeight: 1.6 }}>
            The typical phishing email:
            <List withPadding listStyleType="disc">
              <List.Item>
                {' '}
                ask for personal information such as financial information
              </List.Item>
              <List.Item>
                {' '}
                request users to click on the link or download the software
              </List.Item>
              <List.Item>
                {' '}
                impersonate friends and family or a credible corporates such as
                financial institutes and social media.
              </List.Item>
            </List>
          </Text>
          <br />
          <Text sx={{ lineHeight: 1.6 }}>
            To learn more about different types of phishing,{' '}
            <Link onClick={() => r.replace({ pathname: `/learn/2` })}>
              click here
            </Link>
            .
          </Text>
        </div>
      </SubCont>

      <NumbersCards />

      <SubCont>
        <Title mt={40} mb={30} order={2} size="h1" weight="900">
          This is{' '}
          <Text
            component="span"
            variant="gradient"
            gradient={{ from: 'blue', to: 'blue' }}
            inherit
          >
            Phished
          </Text>
        </Title>

        <div className="cnt">
          <Text sx={{ lineHeight: 1.6 }}>
            Phished was developed for people to gain experience in dealing with
            phishing emails without exposing themselves to online fraud. Our
            phishing simulator provides hands-on training and is based on
            real-world examples of common phishing techniques.
          </Text>
          <br />
          <Text sx={{ lineHeight: 1.6 }}>
            Phished is a non-profit organization that proudly empowers our users
            to educate their family members, friends, and neighbours on internet
            safety. Phished will always be free and open-source.
          </Text>
          <br />
          <Text sx={{ lineHeight: 1.6 }}>
            If you have any questions, or want to get in contact, please send us
            an email at support@phished.app
          </Text>
        </div>
      </SubCont>

      {/* <Divider mt={48} mb={48} />
      <Text>Developed in Canada 🇨🇦 by Yasmina Amirifar, Sue Lee, Trevor Lee, Ivan Li, Lucia Martin, Sejin Oh, and Ivan Tong</Text> */}
    </Container>
  );
}
