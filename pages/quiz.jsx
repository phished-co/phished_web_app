import { Button } from "@mantine/core"
import styled from "styled-components"
import { useState } from "react"
import EmailQuestion from "../components/quiz/EmailQuestion"

export const Container = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  margin-top: 8vh
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
  }

  return (
    <Container>
      {showScore
        ? <Button type='null' onClick={shuffle}>Reset quiz</Button>
        : <div className='btn-cont'>
          <Button type='null' onClick={() => { setShowScore(true) }}>Legitimate</Button>
          <Button type='null'>Fradulent</Button>
        </div>}
      <EmailQuestion questionIds={shuffledQuestions} />
    </Container>
  )
}