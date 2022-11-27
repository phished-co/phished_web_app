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
    name: 'turtle'
  },
  {
    id: 2,
    name: 'swan'
  },
  {
    id: 3,
    name: 'chicken'
  },
  {
    id: 4,
    name: 'horse'
  },
  {
    id: 5,
    name: 'crab'
  },
  {
    id: 6,
    name: 'snake'
  },

]

export default function Quiz() {

  let questions = questionBank.slice(0)
  const [showScore, setShowScore] = useState(false)
  const [shuffledQuestions, setShuffledQuestions] = useState(questions)
  const [questionNum, setQuestionNum] = useState(0)


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
  }

  function handleClick() {
    setQuestionNum(questionNum => questionNum + 1)

    if (questionNum > 1) {
      setShowScore(true)
    }
  }

  return (
    <Container>
      <EmailQuestion questionIds={shuffledQuestions.slice(0, 3)} questionNum={questionNum} />
      {showScore
        ? <Button type='null' onClick={shuffle}>Reset quiz</Button>
        : <div className='btn-cont'>
          <Button type='null' fullWidth onClick={handleClick}>Legitimate</Button>
          <Button type='null' fullWidth onClick={handleClick}>Fradulent</Button>
        </div>}
    </Container>
  )
}