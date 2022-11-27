import { Button } from "@mantine/core"
import styled from "styled-components"

const Wrapper = styled.div`
  outline: 2px solid red;
`

export default function EmailQuestion({ questionIds, questionNum }) {
  let list = questionIds.map(question => {
    return <h1 key={question.id}>{question.name}</h1>
  })

  return (
    <Wrapper>
      {questionNum}
      {list}
    </Wrapper>
  )
}