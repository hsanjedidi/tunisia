'use client'

import { useEffect, useState, useCallback } from 'react'
import Image from 'next/image'
import { RotateCcw, Trophy, Sparkles } from 'lucide-react'
import { cn } from '@/lib/utils'

const SYMBOLS = [
  { id: 'flag', label: 'العلم', img: '/images/games/flag.png' },
  { id: 'jasmine', label: 'الياسمين', img: '/images/games/jasmine.png' },
  { id: 'camel', label: 'الجمل', img: '/images/games/camel.png' },
  { id: 'couscous', label: 'الكسكسي', img: '/images/games/couscous.png' },
  { id: 'carthage', label: 'قرطاج', img: '/images/games/carthage-icon.png' },
  { id: 'sidi', label: 'سيدي بوسعيد', img: '/images/games/sidi-bou-said.png' },
]

type Card = { uid: number; id: string; label: string; img: string }

function buildDeck(): Card[] {
  const deck = [...SYMBOLS, ...SYMBOLS].map((s, i) => ({ uid: i, ...s }))
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[deck[i], deck[j]] = [deck[j], deck[i]]
  }
  return deck
}

export function MemoryGame() {
  const [deck, setDeck] = useState<Card[]>([])
  const [flipped, setFlipped] = useState<number[]>([])
  const [matched, setMatched] = useState<string[]>([])
  const [moves, setMoves] = useState(0)
  const [seconds, setSeconds] = useState(0)
  const [running, setRunning] = useState(false)

  const reset = useCallback(() => {
    setDeck(buildDeck())
    setFlipped([])
    setMatched([])
    setMoves(0)
    setSeconds(0)
    setRunning(false)
  }, [])

  useEffect(() => {
    reset()
  }, [reset])

  const won = matched.length === SYMBOLS.length && deck.length > 0

  useEffect(() => {
    if (!running || won) return
    const t = setInterval(() => setSeconds((s) => s + 1), 1000)
    return () => clearInterval(t)
  }, [running, won])

  function flip(uid: number) {
    if (!running) setRunning(true)
    if (flipped.length === 2 || flipped.includes(uid)) return
    const card = deck.find((c) => c.uid === uid)
    if (!card || matched.includes(card.id)) return

    const next = [...flipped, uid]
    setFlipped(next)

    if (next.length === 2) {
      setMoves((m) => m + 1)
      const [a, b] = next.map((u) => deck.find((c) => c.uid === u)!)
      if (a.id === b.id) {
        setMatched((m) => [...m, a.id])
        setFlipped([])
      } else {
        setTimeout(() => setFlipped([]), 850)
      }
    }
  }

  const mm = String(Math.floor(seconds / 60)).padStart(2, '0')
  const ss = String(seconds % 60).padStart(2, '0')

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex gap-3">
          <span className="rounded-xl bg-secondary px-5 py-2.5 text-center">
            <span className="block text-xs text-muted-foreground">الحركات</span>
            <span className="text-xl font-bold text-foreground">{moves}</span>
          </span>
          <span className="rounded-xl bg-secondary px-5 py-2.5 text-center">
            <span className="block text-xs text-muted-foreground">الوقت</span>
            <span className="text-xl font-bold text-foreground">
              {mm}:{ss}
            </span>
          </span>
          <span className="rounded-xl bg-secondary px-5 py-2.5 text-center">
            <span className="block text-xs text-muted-foreground">الأزواج</span>
            <span className="text-xl font-bold text-foreground">
              {matched.length}/{SYMBOLS.length}
            </span>
          </span>
        </div>
        <button
          onClick={reset}
          className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 font-bold text-foreground transition-colors hover:bg-secondary"
        >
          <RotateCcw className="h-4 w-4" />
          لعبة جديدة
        </button>
      </div>

      {won && (
        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 rounded-2xl bg-gold p-6 text-gold-foreground">
          <div className="flex items-center gap-3">
            <Trophy className="h-8 w-8" />
            <div>
              <p className="font-[family-name:var(--font-heading)] text-2xl font-bold">
                أحسنت! وجدت كل الأزواج
              </p>
              <p className="text-sm">
                أنهيت اللعبة في {moves} حركة و {mm}:{ss} دقيقة.
              </p>
            </div>
          </div>
          <Sparkles className="h-7 w-7" />
        </div>
      )}

      <div className="mt-6 grid grid-cols-3 gap-3 sm:grid-cols-4 sm:gap-4">
        {deck.map((card) => {
          const isUp =
            flipped.includes(card.uid) || matched.includes(card.id)
          return (
            <button
              key={card.uid}
              onClick={() => flip(card.uid)}
              aria-label={isUp ? card.label : 'بطاقة مقلوبة'}
              className={cn(
                'group relative aspect-square rounded-2xl border-2 transition-all duration-200',
                isUp
                  ? 'border-gold bg-card'
                  : 'border-primary bg-primary hover:scale-[1.03]',
              )}
            >
              {isUp ? (
                <span className="flex h-full w-full flex-col items-center justify-center gap-1 p-2">
                  <span className="relative h-3/4 w-3/4">
                    <Image
                      src={card.img || '/placeholder.svg'}
                      alt={card.label}
                      fill
                      className="object-contain"
                    />
                  </span>
                  <span className="text-xs font-bold text-foreground">
                    {card.label}
                  </span>
                </span>
              ) : (
                <span className="flex h-full w-full items-center justify-center font-[family-name:var(--font-heading)] text-3xl font-bold text-primary-foreground/90">
                  إ
                </span>
              )}
            </button>
          )
        })}
      </div>
    </div>
  )
}
