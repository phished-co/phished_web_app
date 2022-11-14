import { Divider, Text, Title } from "@mantine/core";


export const titleData = [
  {
      num:1,
      q: "Persoanl Contact",
      tip: "Check link URLs by hovering over them! Don't worry about clicking anything malicious – the links are non-functional and for demonstrative purposes only.",
  },
  {
    num:2,
    q: "Persoanl Contact 2",
    tip: "Check link URLs by hovering over them! Don't worry about clicking anything malicious – the links are non-functional and for demonstrative purposes only.",
  }
]


export default function QuizTitle({

}) {
  
  return (
    <>
      <Text color='dimmed'>Question {currentQuestion + 1} / {questions.length}</Text>
      <Title>{questions[currentQuestion].questionsText}</Title>
      <Text>{questions[currentQuestion].questionsTip}</Text>
      <Divider mt={32} />
    </>
  )
}