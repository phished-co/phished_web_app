import { Button, Divider, Text, Title } from "@mantine/core"
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

  .btn {
    outline: 2px solid blue;
    max-width: 12rem;
    display: grid;
    margin-top: 1rem;
    margin-bottom: 1rem;
    padding: 0.5rem 1rem;
    justify-content: center;
    align-content: center;
  }

  .red-banner {
    background: red;
    color: white;
    padding: 0.5rem 1rem;
  }

  .other-btn {
    outline: 2px solid blue;
    max-width: 4rem;
    display: grid;
    justify-content: center;
    align-content: center;
    padding: 0.25rem 1rem;
    border-radius: 24px;
    margin-top: 2rem;
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
        {/* <p>{questionIds[questionNum].id}</p> */}
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
    } else if (questionIds[questionNum].id === 4) {
      return <><h1>We noticed a login to your account from a new device. Was this you?</h1>
        <Divider mt={8} mb={8} />
        <p><strong>If this was you</strong></p>
        <p>You can ignore this message. There's no need to take any action.</p>
        <p><strong>If this wasn't you</strong></p>
        <p>Complete these steps now to protect your account.</p>
        <ul>
          <li>Change your password. You'll be logged out of all your active Twitter sessions except the one you're using at this time.</li>
          <li><span className='link' onMouseEnter={handleHover} onMouseLeave={handleLeave}>Learn more</span> about revoking access to to any unfamiliar apps.</li>
        </ul>
      </>
    } else if (questionIds[questionNum].id === 5) {
      let today = new Date()
      let date = today.getDate() + '-' + parseInt(today.getMonth() + 1) + '-' + today.getFullYear()

      return <>
        <div className='red-banner'>
          <h1>Someone has your password</h1>
        </div>
        <p>Someone just used your password to try to sign in to your Google Account.</p>
        <p>Information:</p>
        <p>{date}</p>
        <p>Firefox browser</p>
        <p>Google stopped this sign-in attempt. You should change your password immediately.</p>
        <div className='btn'><span className="link" onMouseEnter={handleHover} onMouseLeave={handleLeave}>CHANGE PASSWORD</span></div>
        <p>Best, </p>
        <p>The Mail Team</p>
      </>
    } else if (questionIds[questionNum].id === 6) {
      return <>
        <div className='docs'>
          <h1>Abby M shared a document</h1>
          <p>Abby M (abbym@gmail.com) has invited you to <strong>edit </strong> the following document:</p>
          <div className="other-btn"><span className='link' onMouseEnter={handleHover} onMouseLeave={handleLeave}>Open</span></div>
        </div>
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