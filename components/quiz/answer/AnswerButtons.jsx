import { Button } from "@mantine/core"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
`

export default function AnswerButton() {
  return (
    <Container>
      <Button fullWidth type='null'>Phishing</Button>
      <Button fullWidth grow type='null'>Legitimate</Button>
    </Container>
  )
}