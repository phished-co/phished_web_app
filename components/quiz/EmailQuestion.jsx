import { Button } from "@mantine/core"

export default function EmailQuestion({ questionIds }) {
  let list = questionIds.map(question => {
    return <h1 key={question.id}>{question.name}</h1>
  })

  return (
    <>
      <Button type='null' onClick={() => { console.log(questionIds) }}>Test</Button>
      {list}
    </>
  )
}