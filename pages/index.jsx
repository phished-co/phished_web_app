import ColorToggle from "../components/colorToggle/ColorToggle"

// mantine imports
import { HeroHeader } from "../components/mantine/heroHeader/HeroHeader"

export default function Home() {
  return (
    <>
      <main>
        <ColorToggle />
        <HeroHeader />
      </main>
    </>
  )
}
