import React, { useState } from "react"
import { Button, Divider, Text, Title } from "@mantine/core";
import styled from "styled-components";


// Quiz data
export const questions = [
  {
      questionsText: "Personal Contact",
      questionsTip: "Check link URLs by hovering over them! Don't worry about clicking anything malicious – the links are non-functional and for demonstrative purposes only.",
      sname: "Logan MacDougall",
      semail: "l.macdougall@gmail.com",
      answerOptions: [
        { answerText: "Phishing", isCorrect: true },
        { answerText: "Legitimate", isCorrect: false }
      ],
      content: `Here are the photos from `,
      content2: `last vacation!`,
      content3: ``,
      urldesc: "https://googlephotos.com",
      src: "",
      alt: "",
  },
  {
      questionsText: "Personal Contact 2",
      questionsTip: "This question is similiar to the previous question. Try to see if the URL link is credible. ",
      sname: "Trevor Tyler Lee",
      semail: "t.tylee@gmail.com",
      answerOptions: [
        { answerText: "Phishing", isCorrect: true },
        { answerText: "Legitimate", isCorrect: false }
      ],
      content: `Hey, do you wanna see what I've changed? `,
      content2: `click here`,
      content3: ` to see what I've been working on!`,
      urldesc: "shorturl.at/aqBCD",
      src: "",
      alt: "",
  },
  {
    questionsText: "Personal Contact 2",
    questionsTip: "Hover this to check",
    sname: "Trevor Tyler Lee",
    semail: "t.tylee@gmail.com",
    answerOptions: [
      { answerText: "Phishing", isCorrect: true },
      { answerText: "Legitimate", isCorrect: false }
    ],
    content: `Check this out! `,
    content2: `photo`,
    content3: ``,
    urldesc: "https://googlephotos.com",
    src: "",
    alt: "",
  },
  {
    questionsText: "Personal Contact 2",
    questionsTip: "Hover this to check",
    sname: "Trevor Tyler Lee",
    semail: "t.tylee@gmail.com",
    answerOptions: [
      { answerText: "Phishing", isCorrect: true },
      { answerText: "Legitimate", isCorrect: false }
    ],
    content: `Check this out! `,
    content2: `photo`,
    content3: ``,
    urldesc: "https://googlephotos.com",
    src: "",
    alt: "",
  },
  {
    questionsText: "Personal Contact 2",
    questionsTip: "Hover this to check",
    sname: "Trevor Tyler Lee",
    semail: "t.tylee@gmail.com",
    answerOptions: [
      { answerText: "Phishing", isCorrect: true },
      { answerText: "Legitimate", isCorrect: false }
    ],
    content: `Check this out! `,
    content2: `photo`,
    content3: ``,
    urldesc: "https://googlephotos.com",
    src: "",
    alt: "",
  },

];


// Styled-comp
const AnswerSection = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
gap: 1rem;
margin-top: 20px;
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
  }
`

const HoverLink = styled.span`
    color: blue;
    cursor: pointer;

    :hover {
      text-decoration: underline;
    }
`
const Container = styled.div`
  margin-top: 3rem;
  ${'' /* outline: 2px solid red; */}
  padding: 1rem 4vw;
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

const Circle = styled.div`
  height: 4rem;
  width: 4rem;
  background: purple;
  border-radius: 8rem;
  display: block;
  margin-right: 2rem;
`

const BodyCont = styled.div`
margin-top: 3rem;
${'' /* outline: 2px solid red; */}
padding: 1rem 4vw;`



// Actual Body
export default function EmailBody(){

const [currentQuestion, setCurrentQuestion] = useState(0);

const [showScore, setShowScore] = useState(false);

const [score, setScore] = useState(0);


// QUIZ HEADER
const QuizTitle = ()=> {
  return<>
      <Text color='dimmed'>Question {currentQuestion + 1} / {questions.length}</Text>
      <Title>{questions[currentQuestion].questionsText}</Title>
      <Text>{questions[currentQuestion].questionsTip}</Text>
      <Divider mt={32} />
  </>
};

// EMAIL SENDER
const SenderEmail = ()=> {
  return<>
      <div className='sender'>
          <Text weight={700}>{questions[currentQuestion].sname}</Text>
          <Text color='dimmed' weight={400}>{questions[currentQuestion].semail}</Text>
      </div>
  </>
};


const handleAnswerButtonClick = (isCorrect) => {
  if(isCorrect === true){
    setScore(score + 1);
  }

  const nextQuestion = currentQuestion + 1;
  if(nextQuestion < questions.length){
    setCurrentQuestion(nextQuestion)
  } else {
    setShowScore(true)
  }
}

const resetQuestion = () => {
  setCurrentQuestion(0);
  setShowScore(false);
  setScore(0);
}




return (
  <>
    {showScore ? (
      <div className="score-section">You scored {score} out of {questions.length}
        <Button type='null' onClick={resetQuestion}>Try Again</Button>
      </div>
  
    ) : (
    <>
      <Container>

        {/* Header */}
          <QuizTitle />
          <AnswerSection>
              {questions[currentQuestion].answerOptions.map((answerOptions)=>
                <Button fullWidth type='null' onClick={()=>handleAnswerButtonClick(answerOptions.isCorrect)}>{answerOptions.answerText}</Button>)}
          </AnswerSection>

        {/* Body */}
          <BodyCont>
            <Header>
              <div className='header'>
                <Circle />
                <SenderEmail />
              </div>
            </Header>
                
            <SurroundingBox>
              <EmailContainer>
              <p>{questions[currentQuestion].content}<HoverLink>{questions[currentQuestion].content2}</HoverLink>{questions[currentQuestion].content3}</p>
              <img src={questions[currentQuestion].src} alt={questions[currentQuestion].alt} />
              </EmailContainer>
            </SurroundingBox>
      
            <URLContainer>
              {questions[currentQuestion].urldesc}
            </URLContainer>
          </BodyCont>
      </Container>
    </>
    )}
  
  
  </> 
)
};