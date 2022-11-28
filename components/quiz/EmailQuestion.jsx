import { Button, Text, Title } from "@mantine/core"
import styled from "styled-components"

const Wrapper = styled.div`
  ${'' /* outline: 2px solid red; */}
  padding: 0 1rem;

  img {
    max-width: 80px;
    margin-top: 1rem;
  }

  .title {
    ${'' /* outline: 2px solid blue; */}
    h1 {
      font-weight: 900;
    }
  }

  .email {
    margin-top: 2rem;
    padding: 2rem;
    background: #fafafa;
    color: black;
  }

  .email-body {
    padding: 0 2rem;
    background: #fafafa;
    color: black;
    padding-bottom: 2rem;
  }

  .header {
    display: flex;
  }

  .link {
    color: blue;
    cursor: pointer;
  }

  .link:hover {
    text-decoration: underline;
  }
`

const Circle = styled.div`
  height: 3.5rem;
  width: 3.5rem;
  background: blue;
  border-radius: 8rem;
  display: block;
  margin-right: 2rem;
`

export default function EmailQuestion({ questionIds, questionNum, handleHover, handleLeave }) {
  let questions = questionIds.map(question => {
    return (
      <>
        <div className='title'>
          <Title key={question.id}>{question.name}</Title>
          <Text key={question.tip}>{question.tip}</Text>
        </div>
        <div className='email'>
          <div className='header'>
            <Circle />
            <span className='address'>
              <Text key={question.from}>{question.from}</Text>
              <Text key={question.email}>{question.email}</Text>
            </span>
          </div>
        </div>
      </>
    )
  })

  let emailBody = () => {

    if (questionIds[questionNum].id === 1) {
      return <>
        <p>{questionIds[questionNum].id}</p>
        <p>Here are the photos from <span className='link' onMouseEnter={handleHover} onMouseLeave={handleLeave}>last vacation!</span></p>
      </>
    } else if (questionIds[questionNum].id === 2) {
      return <>
        <p>{questionIds[questionNum].id}</p>
        <p>Please double check the attachment to confirm your order!</p>
        <img src="/pdfimg.png" alt="icon for a pdf" />
      </>
    } else if (questionIds[questionNum].id === 3) {
      let today = new Date()
      let date = today.getDate() + '-' + parseInt(today.getMonth() + 1) + '-' + today.getFullYear()

      return <>
        <p>Your Google account password was changed on {date}.</p>
        <p><strong>If you did this, </strong>you can safely disregard this email.</p>
        <p><strong>If you didn't do this, </strong>please <span className="link" onMouseEnter={handleHover} onMouseLeave={handleLeave}>secure your account</span>.</p>
        <p>Thanks, </p>
        <p>The Google Security Team</p>
      </>
    }
  }

  return <Wrapper>
    {/* {questionNum} */}
    {questions[questionNum]}
    <div className='email-body'>
      {emailBody()}
    </div>
  </Wrapper>
}