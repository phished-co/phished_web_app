import ContactForm from "../components/mantine/contact/ContactForm";
import styled from "styled-components";

const Container = styled.div`
  padding: 4rem 2rem;
`

export default function Contact() {
  return (
    <Container>
      <ContactForm />
    </Container>
  )
}