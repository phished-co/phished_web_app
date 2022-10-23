import styled from "styled-components"
import QuizTitle from "../components/quiz/title/Title"

const Container = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  margin-top: 8vh
`

export default function Quiz() {
  return <Container>
    <QuizTitle
      number="1"
      tip="Check link URLS by hovering over them! Don't worry about clicking anything malicious – the links are non-functional and for demonstrative purposes only."
      title="Personal Contact"
    />
  </Container>
}