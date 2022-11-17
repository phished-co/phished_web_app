import { Text, Button } from "@mantine/core";
import styled from "styled-components";
import EmailBody, {questions} from "./EmailData";
import React, { useState } from "react";

// I don't think this page is needed anymore
// I'll delete this once the quiz page is done
// -SUE


const Container = styled.div`
  margin-top: 3rem;
  ${'' /* outline: 2px solid red; */}
  padding: 1rem 4vw;
`

// const BtnContainer = styled.div`
//   display: flex;
//   gap: 1rem;
//   margin-top: 2rem;
// `

// const BodyCont = styled.div`
// margin-top: 3rem;
// ${'' /* outline: 2px solid red; */}
// padding: 1rem 4vw;`

// const Header = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   margin-bottom: 1rem;

//   .sender {
//     display: inline-block;
//     align-items: center;
//   }

//   .header {
//     display: flex;
//     align-items: center;
    
//     p {
//       margin: 0;
//     }
//   }
// `


// const Circle = styled.div`
//   height: 4rem;
//   width: 4rem;
//   background: purple;
//   border-radius: 8rem;
//   display: block;
//   margin-right: 2rem;
// `


// const SurroundingBox = styled.div`
//   width: 100%;
//   min-height: 4rem;
//   background: lightgray;
//   padding: 2rem;
//   }
// `

// const HoverLink = styled.span`
//     color: blue;
//     cursor: pointer;

//     :hover {
//       text-decoration: underline;
//     }
// `

// const URLContainer = styled.div`
//   background: gray;
//   color: white;
//   max-width: 32rem;
//   margin-top: 8rem;
//   padding-left: 0.5rem;
//   opacity: 0;

//   ${Container}:hover & {
//     opacity: 1;
//   }
// `

export default function QuizEmail() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const nextQuestion = currentQuestion + 1;
  if(nextQuestion < questions.length){
    setCurrentQuestion(nextQuestion)
  }
  return (<>

    <Container>
      <EmailBody />
    </Container>
  </>)
}