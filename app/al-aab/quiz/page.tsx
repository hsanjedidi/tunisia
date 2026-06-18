import type { Metadata } from 'next'
import { GameShell } from '@/components/games/game-shell'
import { Quiz } from '@/components/games/quiz'

export const metadata: Metadata = {
  title: 'مسابقة تونس | إفريقية',
  description: 'مسابقة تفاعلية عن تونس بمستويات صعوبة وأوسمة.',
}

export default function Page() {
  return (
    <GameShell
      title="مسابقة تونس"
      subtitle="أجب عن الأسئلة، اجمع النقاط، واربح الأوسمة!"
    >
      <Quiz />
    </GameShell>
  )
}
