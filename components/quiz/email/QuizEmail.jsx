import { Text } from "@mantine/core"
import styled from "styled-components"

const Container = styled.div`
  margin-top: 3rem;
  outline: 2px solid red;
  padding: 1rem 4vw;
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;

  .sender {
    display: inline-block;
    align-items: center;
  }

  .header {
    display: flex;
    align-items: center;
    
    p {
      margin: 0;
    }
  }
`

const SurroundingBox = styled.div`
  width: 100%;
  min-height: 4rem;
  background: lightgray;
  padding: 2rem;
`

const EmailContainer = styled.div`
  width: 100%;
  min-height: 8rem;
  background: white;
`

const Circle = styled.div`
  height: 4rem;
  width: 4rem;
  background: purple;
  border-radius: 8rem;
  display: block;
  margin-right: 2rem;
`

export default function QuizEmail() {
  return (
    <Container>
      <Header>
        <div className='header'>
          <Circle />
          <div className='sender'>
            <Text weight={700}>Logan MacDougall</Text>
            <Text color='dimmed' weight={400}>l.macdougall@gmail.com</Text>
          </div>
        </div>
      </Header>
      <SurroundingBox>
        <EmailContainer>

        </EmailContainer>
      </SurroundingBox>
    </Container>
  )
}