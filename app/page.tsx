import { Hero } from '@/components/home/hero'
import { Pillars } from '@/components/home/pillars'
import { Explore } from '@/components/home/explore'
import { GamesCta } from '@/components/home/games-cta'

export default function Page() {
  return (
    <main>
      <Hero />
      <Pillars />
      <Explore />
      <GamesCta />
    </main>
  )
}
