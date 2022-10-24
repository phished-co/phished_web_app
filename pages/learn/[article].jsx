import { Text, Title } from "@mantine/core"
import { useRouter } from "next/router"
import { data } from '../../data/fake_data'


export const getStaticPaths = () => {
  return {
    paths: [
      { params: { article: '1' } },
      { params: { article: '2' } },
      { params: { article: '3' } },
      { params: { article: '4' } },
      { params: { article: '5' } },
      { params: { article: '6' } },
    ],
    fallback: false
  }
}

export const getStaticProps = (context) => {
  return {
    props: { data }
  }
}

export default function Article(props) {

  const r = useRouter()

  let index = undefined

  if (r.asPath === '/learn/1') {
    index = 0
  } else if (r.asPath === '/learn/2') {
    index = 1
  } else if (r.asPath === '/learn/3') {
    index = 2
  } else if (r.asPath === '/learn/4') {
    index = 3
  } else if (r.asPath === '/learn/5') {
    index = 4
  } else {
    index = 5
  }

  return <>
    <Title>{props.data[index].title}</Title>
    <Text>{props.data[index].content}</Text>
  </>
}