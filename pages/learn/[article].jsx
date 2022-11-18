import { Text, Title } from "@mantine/core"
import { useRouter } from "next/router"
import { data } from '../../data/fake_data'
import styled from "styled-components"
import Image from "next/image"

const Container = styled.div`
  max-width: 1140px;
  margin: 0 auto;
`

// const ImageContainer = styled.div`
//   ${'' /* outline: 2px solid red; */}
//   overflow: hidden;
//   max-height: 480px;
//   margin-bottom: 2rem;

//   .image {
//     width: 100%;
//   }
// `

export const ImageContainer = styled.div`
  ${'' /* outline: 2px solid green; */}
  margin: 0 auto;
  margin-bottom: 1rem;

  img {
    margin: 0 auto;
    object-fit: cover;
    width: 100%;
    height: 30rem;
  }
`;

const ArticleContainer = styled.div`
display: flex;
flex-direction: column;
align-items: start;
  padding: 0 2rem;
  max-width: 64ch;
  margin: 0 auto;
  ${'' /* outline: red 2px solid; */}
`


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

  return <Container>
    <ImageContainer><img src={props.data[index].image} alt='' className='image' /></ImageContainer>
    <ArticleContainer>
      <Title>{props.data[index].title}</Title>
      <Text color='dimmed' transform='uppercase' size={14} mb={36}>{props.data[index].date}</Text>
      <Text>{props.data[index].content}</Text>
    </ArticleContainer>
  </Container>
}