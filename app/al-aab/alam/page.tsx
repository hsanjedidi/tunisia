import type { Metadata } from 'next'
import { GameShell } from '@/components/games/game-shell'
import { FlagPuzzle } from '@/components/games/flag-puzzle'

export const metadata: Metadata = {
  title: 'أحجية العلم التونسي | إفريقية',
  description: 'لعبة تركيب أحجية العلم التونسي: أعد ترتيب القطع لتكوين العلم كاملًا.',
}

export default function Page() {
  return (
    <GameShell
      title="أحجية العلم التونسي"
      subtitle="أعد ترتيب القطع لتكوين العلم التونسي بأقل عدد من الحركات."
    >
      <FlagPuzzle />
    </GameShell>
  )
}
