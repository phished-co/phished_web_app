import React, { useState } from "react"
import { Button, Divider, Text, Title } from "@mantine/core";
import styled from "styled-components";



export const questions = [
  {
      num:1,
      questionsText: "Personal Contact 1",
      questionsTip: "Click this to check",
      sname: "Logan MacDougall",
      semail: "l.macdougall@gmail.com",
      answerOptions: [
        { answerText: "Phishing", isCorrect: true },
        { answerText: "Legitimate", isCorrect: false }
      ]
  },
  {
      num:2,
      questionsText: "Personal Contact 2",
      questionsTip: "Hover this to check",
      sname: "Trevor Tyler Lee",
      semail: "t.tylee@gmail.com",
      answerOptions: [
        { answerText: "Phishing", isCorrect: true },
        { answerText: "Legitimate", isCorrect: false }
      ]

  },

];



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


const Circle = styled.div`
  height: 4rem;
  width: 4rem;
  background: purple;
  border-radius: 8rem;
  display: block;
  margin-right: 2rem;
`


export default function EmailBody(){

const [currentQuestion, setCurrentQuestion] = useState(0);

const [showScore, setShowScore] = useState(false);

const [score, setScore] = useState(0);

const QuizTitle = ()=> {

  return<>
      <Text color='dimmed'>Question {currentQuestion + 1} / {questions.length}</Text>
      <Title>{questions[currentQuestion].questionsText}</Title>
      <Text>{questions[currentQuestion].questionsTip}</Text>
      <Divider mt={32} />
  </>
};

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
  <div>
    {showScore ? (
      <div className="score-section">You scored {score} out of {questions.length}
      <Button type='null' onClick={resetQuestion}>Try Again</Button></div>
    ) : (
      <>
      <QuizTitle />
      <AnswerSection>
          {questions[currentQuestion].answerOptions.map((answerOptions)=>
            <Button fullWidth type='null' onClick={()=>handleAnswerButtonClick(answerOptions.isCorrect)}>{answerOptions.answerText}</Button>)}
      </AnswerSection>
      
      <div className="question-section">
        <div className="question-count">
          <span>Question {currentQuestion + 1}</span>/{questions.length}
        </div>
        <div className="question-text">
          {questions[currentQuestion].questionsText}
        </div>
      </div>
      </>

    )}

  </div>
)
}
