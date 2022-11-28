import { Button } from "@mantine/core"
import styled from "styled-components"
import { useState } from "react"
import EmailQuestion from "../components/quiz/EmailQuestion"

export const Container = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  margin-top: 8vh;
  outline: 2px solid green;

  .btn-cont {
    display: flex;
    gap: 2rem;
    outline: 2px solid orange;
    max-width: 640px;
    margin: 0 auto;
  }
`
const questionBank = [
  {
    id: 1,
    name: 'Personal contact with an external link',
    tip: "Check link URLs by hovering over them! Don't worry about clicking anything malicious – the links are non- functional and for demonstrative purposes only.",
    from: 'Logan MacDougall',
    email: 'l.macdougall@gmail.com',
    answer: 1,
  },
  {
    id: 2,
    name: 'Email with attachment',
    tip: "This example contains an attachment. Do you want to check the file?",
    answer: 1,
  },
  {
    id: 3,
    name: 'Security Alert',
    tip: "It looks like you've received a security alert.",
    answer: 1,
  },
  {
    id: 4,
    name: 'Personal contact with external link',
    tip: "This example contains a link. Is it safe to open?",
    answer: 1,
  },
  {
    id: 5,
    name: 'Billing Invoice'
  },
  {
    id: 6,
    name: 'Google Docs Invite'
  },

]

export default function Quiz() {

  let questions = questionBank.slice(0)
  const [showScore, setShowScore] = useState(false)
  const [shuffledQuestions, setShuffledQuestions] = useState(questions)
  const [questionNum, setQuestionNum] = useState(0)
  const [score, setScore] = useState(0)

  // Fisher-Yates shuffle method
  function shuffle() {
    let currentIndex = questions.length, randomIndex

    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex--
      [questions[currentIndex], questions[randomIndex]] = [questions[randomIndex], questions[currentIndex]]
    }
    console.log(questions)
    setShowScore(false)
    setShuffledQuestions(questions)
    setQuestionNum(0)
    setScore(0)
  }

  function handleLegitClick() {
    if (questionBank[questionNum].answer === 0) {
      setScore(score => score + 1)
      console.log('Correct!')
    }

    if (questionNum > 1) {
      setShowScore(true)
    } else {
      setQuestionNum(questionNum => questionNum + 1)
    }
  }

  function handleFraudClick() {
    if (questionBank[questionNum].answer === 1) {
      setScore(score => score + 1)
      console.log('Correct!')
    }

    if (questionNum > 1) {
      setShowScore(true)
    } else {
      setQuestionNum(questionNum => questionNum + 1)
    }
  }

  return (
    <Container>
      <EmailQuestion questionIds={shuffledQuestions.slice(0, 3)} questionNum={questionNum} />
      {showScore
        ? <div>
          <p>{score}/3</p>
          <Button type='null' onClick={shuffle}>Reset quiz</Button>
        </div>
        : <div className='btn-cont'>
          <Button type='null' fullWidth onClick={handleLegitClick}>Legitimate</Button>
          <Button type='null' fullWidth onClick={handleFraudClick}>Fradulent</Button>
        </div>}
    </Container>
  )
}