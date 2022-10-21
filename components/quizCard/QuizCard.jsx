import { Title, Button } from "@mantine/core"
import styled from 'styled-components'

const Container = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  .cta {
    max-width: 8rem;
    margin: 0 auto;
  }
`

export function QuizCard() {
  return <Container>
    <Title align='center' order={2}>Get started by inviting your first fish</Title>
    <Button className='cta' type='null' variant='fill'>Let's go!</Button>
  </Container>
}

export default QuizCard