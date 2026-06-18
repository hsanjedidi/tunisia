"use client"

import { useState, useEffect, useCallback } from "react"
import { RotateCcw, Shuffle, PartyPopper, Eye, EyeOff } from "lucide-react"
import { cn } from "@/lib/utils"

const SIZE = 3
const TILE_COUNT = SIZE * SIZE
const FLAG_SRC = "/images/games/flag.png"

// solved state: [0,1,2,3,4,5,6,7,8] where 8 is the empty slot
const SOLVED = Array.from({ length: TILE_COUNT }, (_, i) => i)
const EMPTY = TILE_COUNT - 1

function isSolved(tiles: number[]) {
  return tiles.every((t, i) => t === SOLVED[i])
}

function shuffle(): number[] {
  const tiles = [...SOLVED]
  // perform many random valid moves from the solved state to guarantee solvability
  let empty = EMPTY
  for (let i = 0; i < 200; i++) {
    const neighbors = neighborsOf(empty)
    const pick = neighbors[Math.floor(Math.random() * neighbors.length)]
    ;[tiles[empty], tiles[pick]] = [tiles[pick], tiles[empty]]
    empty = pick
  }
  return tiles
}

function neighborsOf(index: number): number[] {
  const row = Math.floor(index / SIZE)
  const col = index % SIZE
  const result: number[] = []
  if (row > 0) result.push(index - SIZE)
  if (row < SIZE - 1) result.push(index + SIZE)
  if (col > 0) result.push(index - 1)
  if (col < SIZE - 1) result.push(index + 1)
  return result
}

export function FlagPuzzle() {
  const [tiles, setTiles] = useState<number[]>(SOLVED)
  const [moves, setMoves] = useState(0)
  const [started, setStarted] = useState(false)
  const [showGuide, setShowGuide] = useState(true)

  const solved = started && isSolved(tiles)

  const newGame = useCallback(() => {
    setTiles(shuffle())
    setMoves(0)
    setStarted(true)
  }, [])

  useEffect(() => {
    newGame()
  }, [newGame])

  const moveTile = (index: number) => {
    if (solved) return
    const emptyIndex = tiles.indexOf(EMPTY)
    if (neighborsOf(emptyIndex).includes(index)) {
      const next = [...tiles]
      ;[next[emptyIndex], next[index]] = [next[index], next[emptyIndex]]
      setTiles(next)
      setMoves((m) => m + 1)
    }
  }

  return (
    <div className="space-y-6">
      <p className="rounded-2xl border border-border bg-card p-4 text-center text-muted-foreground">
        انقر على قطعة مجاورة للفراغ لتحريكها، وأعد ترتيب القطع لتكوين العلم التونسي كاملًا.
      </p>

      <div className="grid gap-8 lg:grid-cols-[1fr_280px]">
        {/* Board */}
        <div className="mx-auto w-full max-w-md">
          <div
            className="relative grid aspect-square w-full overflow-hidden rounded-3xl border-4 border-gold/50 bg-secondary/10 shadow-lg"
            style={{
              gridTemplateColumns: `repeat(${SIZE}, 1fr)`,
              gridTemplateRows: `repeat(${SIZE}, 1fr)`,
            }}
          >
            {tiles.map((tile, index) => {
              const isEmpty = tile === EMPTY
              const tileRow = Math.floor(tile / SIZE)
              const tileCol = tile % SIZE
              return (
                <button
                  key={index}
                  onClick={() => moveTile(index)}
                  disabled={isEmpty || solved}
                  aria-label={isEmpty ? "فراغ" : `قطعة ${tile + 1}`}
                  className={cn(
                    "relative transition-opacity",
                    isEmpty && !solved && "opacity-0",
                    !isEmpty && !solved && "cursor-pointer ring-1 ring-background/40 hover:brightness-110",
                  )}
                  style={
                    isEmpty && !solved
                      ? undefined
                      : {
                          backgroundImage: `url(${FLAG_SRC})`,
                          backgroundSize: `${SIZE * 100}% ${SIZE * 100}%`,
                          backgroundPosition: `${(tileCol / (SIZE - 1)) * 100}% ${(tileRow / (SIZE - 1)) * 100}%`,
                        }
                  }
                />
              )
            })}
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-4">
          <div className="rounded-2xl border border-border bg-card p-5 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-terracotta">عدد الحركات</span>
            <p className="mt-1 font-[family-name:var(--font-heading)] text-4xl font-bold text-foreground">{moves}</p>
          </div>

          {showGuide && (
            <div className="overflow-hidden rounded-2xl border border-border bg-card p-3">
              <span className="text-xs font-bold text-muted-foreground">الصورة الكاملة</span>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={FLAG_SRC} alt="العلم التونسي كاملًا كمرجع" className="mt-2 w-full rounded-xl" />
            </div>
          )}

          <div className="flex flex-col gap-2">
            <button
              onClick={() => setShowGuide((s) => !s)}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-4 py-2.5 text-sm font-bold text-foreground transition hover:bg-muted"
            >
              {showGuide ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              {showGuide ? "إخفاء الصورة" : "إظهار الصورة"}
            </button>
            <button
              onClick={newGame}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-bold text-primary-foreground transition hover:opacity-90"
            >
              <Shuffle className="h-4 w-4" />
              خلط جديد
            </button>
          </div>
        </div>
      </div>

      {solved && (
        <div className="flex flex-col items-center gap-3 rounded-3xl border-2 border-primary bg-primary/10 p-8 text-center">
          <PartyPopper className="h-10 w-10 text-primary" />
          <h3 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-foreground">
            مبروك! أكملتَ العلم التونسي
          </h3>
          <p className="text-muted-foreground">أنجزتَ الأحجية في {moves} حركة. هل تستطيع أن تفعلها بحركات أقل؟</p>
          <button
            onClick={newGame}
            className="mt-2 inline-flex items-center gap-2 rounded-full bg-terracotta px-5 py-2.5 text-sm font-bold text-terracotta-foreground transition hover:opacity-90"
          >
            <RotateCcw className="h-4 w-4" />
            العب مرة أخرى
          </button>
        </div>
      )}
    </div>
  )
}
