import { Divider, Text, Title } from "@mantine/core";
import { quizQuestions } from "../data";

export default function QuizTitle({ number, i, tip }) {
  return (
    <>
      <Text color='dimmed'>{number} of 8</Text>
      <Title>{quizQuestions[0].q}</Title>
      <Text>{tip}</Text>
      <Divider mt={32} />
    </>
  )
}