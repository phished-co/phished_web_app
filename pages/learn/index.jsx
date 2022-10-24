import ArticleCards from "../../components/articleCards/ArticleCards";
import styled from 'styled-components'

const Container = styled.div`
  max-width: 1140px;
  margin: 0 auto;
`

export default function Learn() {
  return (
    <Container>
      <section>
        <ArticleCards />
      </section>
    </Container>
  );
}
