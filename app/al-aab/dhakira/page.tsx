import { GameShell } from "@/components/games/game-shell"
import { MemoryGame } from "@/components/games/memory-game"

export const metadata = {
  title: "لعبة الذاكرة | إفريقية",
  description: "اقلب البطاقات وطابق رموز التراث التونسي في لعبة الذاكرة.",
}

export default function MemoryPage() {
  return (
    <GameShell
      title="لعبة الذاكرة"
      subtitle="اقلب البطاقتين وابحث عن الأزواج المتطابقة من رموز تونس. كم حركة تحتاج؟"
      badge="تحدٍّ للذاكرة"
    >
      <MemoryGame />
    </GameShell>
  )
}
