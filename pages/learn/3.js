import styled from 'styled-components';
import { Text } from '@mantine/core';
import { TextContainer, ImgContainer, Header, AuthorDate } from './2';
import { Container } from '../quiz'

export default function Article() {
  return (
    <Container>
      <ImgContainer>
        <img src="../../ArticleSplash/Browser.png" />
      </ImgContainer>
      <TextContainer>
        <Header>How Cyber Threats Work</Header>
        <AuthorDate>
          September 21 2022, 10:32 am
        </AuthorDate>
        <Text>
        To protect yourself from the ever looming threat of being cyber hacked, remember there are many different kinds of attacks. Some sophisticated cyber attacks involve carefully planned stages, each one designed to help scammers gain the upper hand. Understanding that you are your own best defense is essential if you want to keep your digital life private.

        </Text>
        <br />
        <Text>
        Attacks can be categorized into two groups – targeted and untargeted. Untargeted cyberattacks are usually seen more often because they are more effective when sent en masse. On the other hand, targeted cyberattacks are rarer but can be incredibly damaging.
        </Text>
        <br />
        <Text>
        Both targeted and untargeted cyberattacks can have multiple stages. Persistent enemy attackers will often stake out victims for months at a time. They are looking for gaps in your digital defenses, or information that they can then later use to trick and deceive you.
        </Text>
        <br />
        <Text>
        Criminals often seek out you personal or financial information. That’s why it is important to safeguard your online identity carefully; unless there’s an absolute need, don’t have any more information on the internet than you need to. With the amount of time we spend on our devices, it’s inevitable that you will run into those with bad intentions.
        </Text>
        To protect yourself online, adhere to these guidelines:
        <br/>
          -Use strong, unique passwords or passphrases
          <br/>
          -Consider using a trustworthy password manager
          <br/>
          -Always enable multi-factor authentication
          <br/>
          -Keep your device’s software up to date

      </TextContainer>
    </Container>
  );
}