import { Title, Button } from "@mantine/core"
import styled from 'styled-components'
import { useSession } from "next-auth/react"
import { useRouter } from "next/router"

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
  const { data: session } = useSession();
  const r = useRouter()

  return <Container>
    <Title align='center' order={2}>Know someone vulnerable? Get phishing immediately</Title>
    {session ?
      <Button className='cta' type='null' variant='fill' onClick={() => { r.push({ pathname: '/dashboard' }) }}>Let's go!</Button> :
      <Button className='cta' type='null' variant='fill' onClick={() => { r.push({ pathname: '/onboarding' }) }}>Let's go!</Button>
    }
  </Container>
}

export default GetStarted