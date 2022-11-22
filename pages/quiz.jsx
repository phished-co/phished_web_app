import styled from "styled-components"
// Our imports
import EmailBody from "../components/quiz/EmailData"

export const Container = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  margin-top: 8vh
`

export default function Quiz() {
  return <>
    <Container>
      <EmailBody />
    </Container>
  </>
}