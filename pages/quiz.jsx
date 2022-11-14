import styled from "styled-components"

// Our imports
import QuizTitle from "../components/quiz/title/Title"
import QuizEmail from "../components/quiz/email/QuizEmail"
import EmailBody from "../components/quiz/email/EmailData"

const Container = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  margin-top: 8vh
`

export default function Quiz() {
  return <>
  <Container>
    <QuizEmail />
  </Container>
  </>
}