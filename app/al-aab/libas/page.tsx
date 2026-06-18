import { GameShell } from "@/components/games/game-shell"
import { DressUp } from "@/components/games/dress-up"

export const metadata = {
  title: "اللباس التقليدي | إفريقية",
  description: "ألبس الشخصية اللباس التونسي التقليدي وتعرّف على قطعه.",
}

export default function DressUpPage() {
  return (
    <GameShell
      title="اللباس التقليدي"
      subtitle="اختر القطع التراثية وألبسها للشخصية، وتعرّف على كل قطعة من لباس تونس الأصيل."
      badge="تلبيس وتعلّم"
    >
      <DressUp />
    </GameShell>
  )
}
