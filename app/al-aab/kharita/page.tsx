import { GameShell } from "@/components/games/game-shell"
import { MapPuzzle } from "@/components/games/map-puzzle"

export const metadata = {
  title: "خريطة تونس | إفريقية",
  description: "ضع المدن والمعالم في مواقعها الصحيحة على خريطة تونس.",
}

export default function MapPage() {
  return (
    <GameShell
      title="خريطة تونس"
      subtitle="هل تعرف أين تقع مدن تونس ومعالمها؟ ضع كل اسم في موقعه الصحيح على الخريطة."
      badge="جغرافيا ممتعة"
    >
      <MapPuzzle />
    </GameShell>
  )
}
