import { Button } from "@mantine/core"
import styled from "styled-components"

const Wrapper = styled.div`
  outline: 2px solid red;
`

export default function EmailQuestion({ questionIds, questionNum }) {
  let questions = questionIds.map(question => {
    return (
      <>
        <h1 key={question.id}>{question.name}</h1>
        <p key={question.tip}>{question.tip}</p>
        <p key={question.from}>{question.from}</p>
        <p key={question.email}>{question.email}</p>
      </>
    )
  })

  if (questionNum === 0) {
    return <Wrapper>
      {questionNum}
      {questions[0]}
    </Wrapper>
  } else if (questionNum === 1) {
    return <Wrapper>
      {questionNum}
      {questions[1]}
    </Wrapper>
  } else if (questionNum === 2) {
    return <Wrapper>
      {questionNum}
      {questions[2]}
    </Wrapper>
  } else {
    return <Wrapper>
      End of test
    </Wrapper>
  }
}