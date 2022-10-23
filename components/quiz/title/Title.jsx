import { Divider, Text, Title } from "@mantine/core"

export default function QuizTitle({ number, title, tip }) {
  return (
    <>
      <Text color='dimmed'>{number} of 8</Text>
      <Title order={1}>{title}</Title>
      <Text>{tip}</Text>
      <Divider mt={32} />
    </>
  )
}