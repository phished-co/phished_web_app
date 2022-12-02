import ArticleCards, {QuizCard} from "../../components/articleCards/ArticleCards";
import styled from 'styled-components'
import CardCarousel from "../../components/mantine/cardCarousel/CardCarousel";
import { Divider, Title, Text } from "@mantine/core";

const Container = styled.div`
  max-width: 1140px;
  margin: 0 auto;

  
`


export default function Learn() {
  return (
    <Container>

      <div className="quiz">

        <QuizCard />
      </div>

      <div className="article">

      <ArticleCards />
      </div>
        
    </Container>
  );
}
