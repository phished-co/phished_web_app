import { Button, Text, Title } from "@mantine/core"
import styled from "styled-components"
import { useState } from "react"
import EmailQuestion from "../components/quiz/EmailQuestion"

export const Container = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  margin-top: 8vh;
  ${'' /* outline: 2px solid green; */}

  .btn-cont {
    display: flex;
    gap: 2rem;
    ${'' /* outline: 2px solid orange; */}
    max-width: 640px;
    margin: 0 auto;
    margin-top: 4rem;
  }

  .url {
    position: absolute;
    bottom: 0;
    background: #444;
    color: white;
    padding-left: 1rem;
    padding-right: 2rem;
    opacity: 1;
    left: 0;
  }

  .no-url {
    position: absolute;
    bottom: 0;
    opacity: 0;
  }

  .score-screen {
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
    url: 'www.google-photo.com'
  },
  {
    id: 2,
    name: 'Email with attachment',
    tip: "This example contains an attachment. Do you want to check the file?",
    answer: 1,
    from: 'Natasha Gisman',
    email: 'gis.nas.man@gmail.com',
    answer: 1,
  },
  {
    id: 3,
    name: 'Security Alert',
    tip: "It looks like you've received a security alert.",
    answer: 1,
    from: 'Google Security Team',
    email: 'security@googlesecurity.com',
    url: 'www.gmail-verification.com'
  },
  {
    id: 4,
    name: 'Security Alert',
    tip: "A message's urgency can be an indicator of an email scam.",
    answer: 0,
    from: 'Twitter',
    email: 'verify@twitter.com',
    url: 'https://help.twitter.com/en'
  },
  {
    id: 5,
    name: 'Security Alert',
    tip: 'Look carefully before changing your password.',
    answer: 1,
    from: 'Google',
    email: 'no-reply@google.support',
    url: 'http://myaccount.google.com-security/settings/signonoptions'
  },
  {
    id: 6,
    name: 'Google Docs Invite',
    tip: 'When it comes to cyber security, trust your gut.',
    answer: 0,
    from: 'Abby M (via Google Docs)',
    email: 'drive-share-dm-noreply@google.com',
    url: 'https://docs.google.com/document/d../edit/'
  },

]

export default function Quiz() {

  let questions = questionBank.slice(0)
  const [showScore, setShowScore] = useState(false)
  const [shuffledQuestions, setShuffledQuestions] = useState(questions)
  const [questionNum, setQuestionNum] = useState(0)
  const [score, setScore] = useState(0)
  const [showUrl, setShowUrl] = useState(false)

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

    if (shuffledQuestions[questionNum].answer === 0) {
      setScore(score => score + 1)
      console.log('Correct! Legit is the answer')
    }

    if (questionNum > 1) {
      setShowScore(true)
    } else {
      setQuestionNum(questionNum => questionNum + 1)
    }
  }

  function handleFraudClick() {

    if (shuffledQuestions[questionNum].answer === 1) {
      setScore(score => score + 1)
      console.log('Correct! Fraud is the answer')
    }

    if (questionNum > 1) {
      setShowScore(true)
    } else {
      setQuestionNum(questionNum => questionNum + 1)
    }
  }

  function handleHover() {
    setShowUrl(true)
  }

  function handleLeave() {
    setShowUrl(false)
  }

  return (
    <Container>
      {showScore
        ? <div className='score-screen'>
          <Title align='center' variant="gradient" gradient={{ from: 'indigo', to: 'cyan', deg: 45 }}>
            You answered {score}/3 questions correctly
          </Title>
          {score <= 1 ? <Text align='center'>Good try!</Text> : <Text align='center'>Nice job!</Text>}
          <Button mt={32} type='null' fullWidth onClick={shuffle}>Try again</Button>
        </div>
        : <>
          <EmailQuestion questionIds={shuffledQuestions.slice(0, 3)} questionNum={questionNum} handleHover={handleHover} handleLeave={handleLeave} />
          <div className='btn-cont'>
            <Button type='null' fullWidth onClick={handleLegitClick}>Legitimate</Button>
            <Button type='null' fullWidth onClick={handleFraudClick}>Fradulent</Button>
          </div>
        </>}

      {showUrl
        ? <div className='url'>
          <Text>{(shuffledQuestions.slice(0, 3)[questionNum].url)}</Text>
        </div>
        : <div className='no-url' aria-hidden='true'><Text>url here</Text></div>}
    </Container>
  )
}