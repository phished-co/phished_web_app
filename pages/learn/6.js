import styled from 'styled-components';
import { Text } from '@mantine/core';
import { TextContainer, ImgContainer, Header, AuthorDate } from './2';
import { Container } from '../quiz'

export const SubHeading = styled(Text)`
  font-size: 1.75em;
  font-weight: 500;
`

export default function Article() {
  return (
    <div>
      <ImgContainer>
        <img src="../../ArticleSplash/laptop.png" />
      </ImgContainer>
      <TextContainer>
        <Header>How anyone can become a confident online shopper</Header>
        <AuthorDate>
          September 7 2022, 10:32 am
        </AuthorDate>
        <Text>
          Online shopping is handy since you can buy things using a mobile device and have them delivered the next day at your front door. You should be aware of the risks related to online shopping, though. These dangers provide numerous risks to your assets as well as your personal information (e.g. email address, shipping address, phone number, credit card). Protective online shopping habits will help you and your business keep sensitive data and assets secure, whether you're shopping for personal use or utilising company accounts to make business purchases.

        </Text>
        <br />
        <Text>
          <SubHeading>Possible threats and scams</SubHeading>
          <br />
          You run the danger of identity theft, hacking, and financial loss when you shop online. The following are some instances of how criminals can take sensitive information and compromise accounts:
          <br /><br />
          - sites that pretend to be e-commerce but actually capture your data after you make a purchase
          <br />
          - sites that process payments fraudulently (i.e., third-party financial arrangements) and take your money for fictitious transactions
          <br />
          - websites that do not use encryption, exposing your data to everyone
          <br />
          - websites with poor security and questionable vendors (e.g. individual sellers or private citizens)

        </Text>
        <br />
        <Text>
          <SubHeading>Common Warning Signs</SubHeading>
          <br />
          - The following red flags are excellent indicators to determine whether a website is reliable:
          <br />
          - The website appears shoddy and unprofessional.
          <br />
          - The back button and the links are inoperable or disabled.
          <br />
          - The website does not include a contact page (e.g. phone number, email, address)
          <br />
          - The privacy or return policies are either not specified or are not clear.
          <br />
          - requesting your credit card information for purposes unrelated to your purchase.
          <br />
          - The item costs are absurdly cheap (i.e. too good to be true)
          <br />
          - The shipping, tariffs, and other fees seem out of the ordinary.
        </Text>
        <br />
        <Text>
          <SubHeading>Remain vigilant</SubHeading>
          Implementing these practices can help protect you when shopping online.
          While they may reduce your risks, they do not erase them completely.

        </Text>
      </TextContainer>
    </div>
  );
}