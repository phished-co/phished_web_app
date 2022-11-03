import ContactForm from "../components/mantine/contact/ContactForm";
import styled from "styled-components";

const Container = styled.div`
  max-width: 768px;
  margin: 0 auto;
  padding: 4rem 2rem;
`

export default function Contact() {
  return (
    <Container>
      <ContactForm />
    </Container>
  )
}