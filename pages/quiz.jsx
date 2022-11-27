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
  1,
  2,
  3,
  4,
  5,
  6
]

export default function Quiz() {

  const [showScore, setShowScore] = useState(false)


  // Fisher-Yates shuffle method
  function shuffle() {
    let currentQuestionBank = questionBank.slice(0)
    let currentIndex = currentQuestionBank.length, randomIndex

    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex--
      [currentQuestionBank[currentIndex], currentQuestionBank[randomIndex]] = [currentQuestionBank[randomIndex], currentQuestionBank[currentIndex]]
    }
    console.log(currentQuestionBank)
    setShowScore(false)
    return currentQuestionBank
  }

  return (
    <Container>
      {showScore
        ? <Button type='null' onClick={shuffle}>Reset quiz</Button>
        : <div className='btn-cont'>
          <Button type='null' onClick={() => { setShowScore(true) }}>Legitimate</Button>
          <Button type='null'>Fradulent</Button>
        </div>}
      <EmailQuestion />
    </Container>
  )
}