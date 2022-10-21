import ColorToggle from "../components/colorToggle/ColorToggle"
import { links } from "../components/chart/fake_data"
import styled from "styled-components"

// mantine imports
import { HeroHeader } from "../components/mantine/heroHeader/HeroHeader"
import { HeaderResponsive } from "../components/mantine/header/Header.tsx"

const Container = styled.div`
  main {
    margin-top: -120px;
  }
`

export default function Home() {
  return (
    <Container>
      <HeaderResponsive links={links} />
      <main>
        <ColorToggle />
        <HeroHeader />
      </main>
    </Container>
  )
}
