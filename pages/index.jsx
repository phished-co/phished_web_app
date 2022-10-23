import { HeroHeader } from "../components/mantine/heroHeader/HeroHeader"
import { FeaturesCards } from "../components/mantine/cardFeature/CardFeatures"
import { StatsGroup } from "../components/mantine/statsGroup/StatsGroup"
import { QuizCard } from "../components/quizCard/QuizCard"
import { CardCarousel } from "../components/mantine/cardCarousel/CardCarousel"
import { Divider } from "@mantine/core"
import styled from "styled-components"

const Container = styled.div`
  .section {
    max-width: 1140px;
    margin: 0 auto;
    margin-top: 1.5rem;
    margin-bottom: 2rem;
  }
`

export default function Home() {
  return (
    <Container>
      <main>
        <HeroHeader />
        <FeaturesCards />
        <Divider />
        <div className='section'>
          <CardCarousel />
        </div>
        <div className='section'>
          <StatsGroup />
        </div>
        <QuizCard />
      </main>
    </Container>
  )
}
