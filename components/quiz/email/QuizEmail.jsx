import { Text, Button } from "@mantine/core";
import styled from "styled-components";
import EmailBody, {questions} from "./EmailData";
import React, { useState } from "react";

const Container = styled.div`
  margin-top: 3rem;
  ${'' /* outline: 2px solid red; */}
  padding: 1rem 4vw;
`

const BtnContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
`

const BodyCont = styled.div`
margin-top: 3rem;
${'' /* outline: 2px solid red; */}
padding: 1rem 4vw;`

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


const Circle = styled.div`
  height: 4rem;
  width: 4rem;
  background: purple;
  border-radius: 8rem;
  display: block;
  margin-right: 2rem;
`


const SurroundingBox = styled.div`
  width: 100%;
  min-height: 4rem;
  background: lightgray;
  padding: 2rem;
  }
`

const HoverLink = styled.span`
    color: blue;
    cursor: pointer;

    :hover {
      text-decoration: underline;
    }
`

const URLContainer = styled.div`
  background: gray;
  color: white;
  max-width: 32rem;
  margin-top: 8rem;
  padding-left: 0.5rem;
  opacity: 0;

  ${Container}:hover & {
    opacity: 1;
  }
`

const EmailContainer = styled.div`
  width: 100%;
  min-height: 8rem;
  background: white;
  padding: 1rem;
  color: black;
`




export function EmailContent(){
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const nextQuestion = currentQuestion + 1;

  if (currentQuestion === 0){
  return<>
    <BodyCont>
      <Header>
        <div className='header'>
          <Circle />
          <div className='sender'>
            <Text weight={700}>{questions[currentQuestion].sname}</Text>
            <Text color='dimmed' weight={400}>{questions[currentQuestion].semail}</Text>
          </div>
        </div>
      </Header>
          
      <SurroundingBox>
        <EmailContainer>
          <p>Here are the photos from <HoverLink>last vacation!</HoverLink></p>
        </EmailContainer>
      </SurroundingBox>

      <URLContainer>
        https://googlephotos.com
      </URLContainer>
    </BodyCont>
  </>
  }
  if (currentQuestion === 1){
    return<>
      <BodyCont>
        <Header>
          <div className='header'>
            <Circle />
            <div className='sender'>
              <Text weight={700}>{questions[currentQuestion].sname}</Text>
              <Text color='dimmed' weight={400}>{questions[currentQuestion].semail}</Text>
            </div>
          </div>
        </Header>
            
        <SurroundingBox>
          <EmailContainer>
            <p>Here are the photos from <HoverLink>last vacation!</HoverLink></p>
          </EmailContainer>
        </SurroundingBox>
  
        <URLContainer>
          https://googlephotos.com
        </URLContainer>
      </BodyCont>
    </>
    }
  
  }




//   return<>
//       <SurroundingBox>
//           <EmailContainer>
//           <p>Check this out! <HoverLink>photo</HoverLink></p>
//           </EmailContainer>
//       </SurroundingBox>
//       <URLContainer>
//               https://googlephotos.com
//       </URLContainer>
//   </>
// }


export default function QuizEmail() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const nextQuestion = currentQuestion + 1;
  if(nextQuestion < questions.length){
    setCurrentQuestion(nextQuestion)
  }
  return (<>

    <Container>
      <EmailBody />
      <EmailContent />
    </Container>
  </>)
}