import { Text, Title, Divider, List } from "@mantine/core"
import styled from "styled-components"

const Container = styled.div`
  max-width: 68ch;
  margin: 0 auto;
  margin-top: 4rem;
  padding: 0 1rem;
  list-style: disc;
`

export default function Privacy() {
  return (
    <Container>
      <Title>Privacy Policy</Title>
      <Text color='dimmed'>Last updated: November 12, 2022</Text>
      <Divider mt='xl'/>
      <Text mt='xl'>This privacy policy describes our policies and procedures on the collection, use, and disclosure of your information when you use Phished and tells you about your privacy rights and how the law protects you. We use your personal data to improve Phished. By using Phished, you agree to the collection and use of information in accordance with this privacy policy.</Text>
      <Title order={2} mt='md'>Collecting and Using Your Personal Data</Title>
      <Text>While using our services, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you. Personally identifiable information may include, but is not limited to</Text>
        <List withPadding>
          <List.Item>- Email addresses</List.Item>
          <List.Item>- First and last names</List.Item>
          <List.Item>- Usage data</List.Item>
        </List>
      <Title order={2} mt='md'>Usage Data</Title>
      <Text>Usage data may include information such as your internet protocol address (e.g. IP address), browser type, browser version, the pages of our service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers and other diagnostic data. When you access Phished by or through a mobile device, We may collect certain information automatically, including, but not limited to, the type of mobile device you use, your mobile device unique ID, the IP address of your mobile device, your mobile operating system, the type of mobile Internet browser you use, unique device identifiers and other diagnostic data.</Text>
      <Text>We may also collect information that your browser sends whenever you visit our service or when you access the service b y or through a mobile device.</Text>
      <Text>Phished may use personal data for the following purposes:</Text>
      <List withPadding>
        <List.Item mt='xs'>-To provide and maintain Phished, including to monitor the usage of Phished.</List.Item>
        <List.Item mt='xs'>-To manage your account and registration as a user of our services. The personal data you provide can give you access to different functionalities of the service that are available to you as a registered user.</List.Item>
        <List.Item mt='xs'>-To contact you with news, special offers, and general information about other goods, services, and events which we offer that are similar to those that you have already purchased or inquired about.</List.Item>
        <List.Item mt='xs'>-To attend to and manage your requests to us.</List.Item>
      </List>
      <Text mt='xs'>We may use your information for other purposes, such as data analysis, identifying usage trends, determining the effectiveness of our promotional campaigns and to evaluate and improve our website, products, services, marketing, and your experience.</Text>
      <Text>The security of your personal data is important to us, but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal data, we cannot guarantee its absolute security.</Text>
      <Title order={2} mt='md'>Changes to this Privacy Policy</Title>
      <Text>We may update our privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page.</Text>
      <Text>You are advised to review this privacy policy periodically for any changes. Changes to this privacy policy are effective when they are posted on this page.</Text>
      <Title order={2} mt='md'>Contact Us</Title>
      <Text>If you have any questions about this privacy policy, you can contact us by visiting 
      <a href='https://phished.up.railway.app/contact' rel='external nofollow noopener' target='_blank'> phished.up.railway.app/contact</a>.</Text>
    </Container>
  )
}