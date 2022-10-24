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

export function GetStarted() {
  return <Container>
    <Title align='center' order={2}>Know someone vulnerable? Get phishing immediately</Title>
    <Button className='cta' type='null' variant='fill'>Let's go!</Button>
  </Container>
}

export default GetStarted