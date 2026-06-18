"use client"

import { useState } from "react"
import { MapPin, Check, RotateCcw, PartyPopper } from "lucide-react"
import { cn } from "@/lib/utils"

type Spot = {
  id: string
  name: string
  hint: string
  // position on the stylized map (percentages)
  top: string
  left: string
}

const SPOTS: Spot[] = [
  { id: "tunis", name: "تونس العاصمة", hint: "العاصمة في الشمال الشرقي", top: "16%", left: "62%" },
  { id: "carthage", name: "قرطاج", hint: "مدينة أثرية قرب العاصمة", top: "9%", left: "70%" },
  { id: "kairouan", name: "القيروان", hint: "مدينة الجامع الكبير في الوسط", top: "44%", left: "52%" },
  { id: "sfax", name: "صفاقس", hint: "ميناء على الساحل الشرقي", top: "56%", left: "70%" },
  { id: "djerba", name: "جربة", hint: "جزيرة في الجنوب الشرقي", top: "74%", left: "74%" },
  { id: "tozeur", name: "توزر", hint: "واحة النخيل في الجنوب الغربي", top: "70%", left: "30%" },
]

export function MapPuzzle() {
  const [placed, setPlaced] = useState<Record<string, boolean>>({})
  const [selected, setSelected] = useState<string | null>(null)
  const [wrongSpot, setWrongSpot] = useState<string | null>(null)

  const remaining = SPOTS.filter((s) => !placed[s.id])
  const done = remaining.length === 0

  const handleSpotClick = (spotId: string) => {
    if (!selected || placed[spotId]) return
    if (selected === spotId) {
      setPlaced((p) => ({ ...p, [spotId]: true }))
      setSelected(null)
    } else {
      setWrongSpot(spotId)
      setTimeout(() => setWrongSpot(null), 600)
    }
  }

  const reset = () => {
    setPlaced({})
    setSelected(null)
    setWrongSpot(null)
  }

  return (
    <div className="space-y-6">
      <p className="rounded-2xl border border-border bg-card p-4 text-center text-muted-foreground">
        اختر اسم المدينة من الأسفل، ثم انقر على موقعها الصحيح على الخريطة.
      </p>

      <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr]">
        {/* Map */}
        <div className="relative aspect-[3/4] w-full overflow-hidden rounded-3xl border-4 border-secondary/40 bg-gradient-to-b from-secondary/10 to-primary/10 shadow-lg">
          {/* simple stylized country shape */}
          <div className="absolute inset-x-[24%] inset-y-[6%] rounded-[45%_55%_50%_50%/40%_40%_60%_60%] bg-card/70 shadow-inner" />
          {SPOTS.map((spot) => {
            const isPlaced = placed[spot.id]
            const isWrong = wrongSpot === spot.id
            return (
              <button
                key={spot.id}
                onClick={() => handleSpotClick(spot.id)}
                style={{ top: spot.top, left: spot.left }}
                className={cn(
                  "absolute -translate-x-1/2 -translate-y-1/2 transition",
                  isWrong && "animate-pulse",
                )}
                aria-label={isPlaced ? spot.name : "موقع على الخريطة"}
              >
                <span
                  className={cn(
                    "flex items-center gap-1 rounded-full px-2 py-1 text-xs font-bold shadow-md transition",
                    isPlaced
                      ? "bg-primary text-primary-foreground"
                      : isWrong
                        ? "bg-destructive text-destructive-foreground"
                        : "bg-card text-foreground ring-2 ring-secondary/50 hover:ring-primary",
                  )}
                >
                  {isPlaced ? <Check className="size-3.5" /> : <MapPin className="size-3.5" />}
                  {isPlaced && spot.name}
                </span>
              </button>
            )
          })}
        </div>

        {/* Labels */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="font-serif text-2xl font-bold text-foreground">المدن والمعالم</h2>
            <button
              onClick={reset}
              className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5 text-sm font-semibold text-foreground transition hover:bg-muted"
            >
              <RotateCcw className="size-4" />
              إعادة
            </button>
          </div>

          {done ? (
            <div className="flex flex-col items-center gap-3 rounded-2xl border-2 border-primary bg-primary/10 p-8 text-center">
              <PartyPopper className="size-10 text-primary" />
              <h3 className="font-serif text-xl font-bold text-foreground">أحسنت! عرفتَ كل المواقع</h3>
              <p className="text-muted-foreground">لقد أصبحتَ خبيرًا في جغرافيا تونس.</p>
            </div>
          ) : (
            <ul className="space-y-3">
              {remaining.map((spot) => (
                <li key={spot.id}>
                  <button
                    onClick={() => setSelected(spot.id)}
                    className={cn(
                      "flex w-full flex-col items-start gap-0.5 rounded-2xl border-2 p-4 text-start transition",
                      selected === spot.id
                        ? "border-primary bg-primary/10"
                        : "border-border bg-card hover:border-secondary/50 hover:bg-muted",
                    )}
                    aria-pressed={selected === spot.id}
                  >
                    <span className="font-serif text-lg font-bold text-foreground">{spot.name}</span>
                    <span className="text-sm text-muted-foreground">{spot.hint}</span>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}
