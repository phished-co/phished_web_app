import { Text, Title } from "@mantine/core"

export default function QuizTitle({ number, title, tip }) {
  return (
    <>
      <Text>{number} of 8</Text>
      <Title order={1}>{title}</Title>
      <Text dimmed>{tip}</Text>
    </>
  )
}