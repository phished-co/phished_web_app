// mantine imports
import { HeroHeader } from "../components/mantine/heroHeader/HeroHeader"
import { FeaturesCards } from "../components/mantine/cardFeature/CardFeatures"
import { StatsGroup } from "../components/mantine/statsGroup/StatsGroup"

export default function Home() {
  return (
    <>
      <main>
        <HeroHeader />
        <FeaturesCards />
        <StatsGroup />
      </main>
    </>
  )
}
