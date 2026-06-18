'use client'

import { useMemo, useState } from 'react'
import { Check, X, Trophy, RotateCcw, ArrowLeft } from 'lucide-react'
import { cn } from '@/lib/utils'

type Level = 'سهل' | 'متوسط' | 'صعب'

type Question = {
  q: string
  options: string[]
  correct: number
  category: string
  level: Level
}

const QUESTIONS: Question[] = [
  // سهل
  { q: 'ما هي عاصمة تونس؟', options: ['صفاقس', 'تونس العاصمة', 'سوسة', 'بنزرت'], correct: 1, category: 'جغرافيا', level: 'سهل' },
  { q: 'ما اللون الأساسي في العلم التونسي؟', options: ['الأخضر', 'الأزرق', 'الأحمر', 'الأصفر'], correct: 2, category: 'العلم', level: 'سهل' },
  { q: 'ما الرمز الموجود في وسط العلم التونسي؟', options: ['نجمة وهلال', 'نخلة', 'أسد', 'نسر'], correct: 0, category: 'العلم', level: 'سهل' },
  { q: 'ما هو الطبق الوطني التونسي الأشهر؟', options: ['الكسكسي', 'البيتزا', 'السوشي', 'البرغر'], correct: 0, category: 'مطبخ', level: 'سهل' },
  { q: 'ما اسم القرية الزرقاء والبيضاء الشهيرة قرب تونس؟', options: ['قابس', 'سيدي بوسعيد', 'نابل', 'جربة'], correct: 1, category: 'معالم', level: 'سهل' },
  // متوسط
  { q: 'أيّ مدينة تونسية تضمّ مدرّجاً رومانياً ضخماً؟', options: ['الجمّ', 'مدنين', 'الكاف', 'باجة'], correct: 0, category: 'معالم', level: 'متوسط' },
  { q: 'ما اسم القبّعة الحمراء التقليدية التونسية؟', options: ['العمامة', 'الشاشية', 'البرنوس', 'الكوفية'], correct: 1, category: 'تقاليد', level: 'متوسط' },
  { q: 'في أيّ جهة تقع جزيرة جربة؟', options: ['الشمال', 'الوسط', 'الجنوب الشرقي', 'الغرب'], correct: 2, category: 'جغرافيا', level: 'متوسط' },
  { q: 'ما اسم الزهرة البيضاء العطرة رمز تونس؟', options: ['الورد', 'الياسمين', 'زهرة اللوتس', 'الأقحوان'], correct: 1, category: 'تقاليد', level: 'متوسط' },
  { q: 'كم عدد ولايات الجمهورية التونسية؟', options: ['18', '24', '30', '12'], correct: 1, category: 'جغرافيا', level: 'متوسط' },
  // صعب
  { q: 'من أسّس مدينة قرطاج؟', options: ['الرومان', 'الفينيقيون', 'العرب', 'الوندال'], correct: 1, category: 'تاريخ', level: 'صعب' },
  { q: 'ما اسم أوّل مسجد بُني في القيروان؟', options: ['جامع الزيتونة', 'جامع عقبة بن نافع', 'الجامع الأموي', 'جامع حمودة باشا'], correct: 1, category: 'معالم', level: 'صعب' },
  { q: 'أيّ متحف يضمّ أكبر مجموعة فسيفساء في العالم؟', options: ['متحف باردو', 'متحف اللوفر', 'المتحف البريطاني', 'متحف قرطاج'], correct: 0, category: 'تراث', level: 'صعب' },
  { q: 'ما اسم الثوب التقليدي الفاخر للرجل التونسي؟', options: ['الجبّة', 'القفطان', 'الدشداشة', 'الكندورة'], correct: 0, category: 'تقاليد', level: 'صعب' },
  { q: 'أيّ حضارة عُرفت بـ"القفصية" نسبة إلى مدينة قفصة؟', options: ['حضارة ما قبل التاريخ', 'الحضارة الرومانية', 'الحضارة العثمانية', 'الحضارة الحفصية'], correct: 0, category: 'تاريخ', level: 'صعب' },
]

const LEVELS: { level: Level; desc: string; color: string }[] = [
  { level: 'سهل', desc: 'للمبتدئين الصغار', color: 'bg-chart-5 text-primary-foreground' },
  { level: 'متوسط', desc: 'لمن يعرف تونس جيّداً', color: 'bg-terracotta text-terracotta-foreground' },
  { level: 'صعب', desc: 'لخبراء التاريخ والتراث', color: 'bg-primary text-primary-foreground' },
]

function badgeFor(score: number, total: number) {
  const ratio = total === 0 ? 0 : score / total
  if (ratio === 1) return { name: 'وسام الأسد الذهبي', desc: 'علامة كاملة! أنت بطل تونس.' }
  if (ratio >= 0.6) return { name: 'وسام الياسمين الفضّي', desc: 'أداء رائع، واصل التعلّم!' }
  return { name: 'وسام النخلة البرونزي', desc: 'بداية جيّدة، أعد المحاولة لتتقدّم!' }
}

export function Quiz() {
  const [level, setLevel] = useState<Level | null>(null)
  const [index, setIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [finished, setFinished] = useState(false)

  const questions = useMemo(
    () => (level ? QUESTIONS.filter((q) => q.level === level) : []),
    [level],
  )

  function start(l: Level) {
    setLevel(l)
    setIndex(0)
    setScore(0)
    setSelected(null)
    setFinished(false)
  }

  function choose(i: number) {
    if (selected !== null) return
    setSelected(i)
    if (i === questions[index].correct) setScore((s) => s + 1)
  }

  function next() {
    if (index + 1 >= questions.length) {
      setFinished(true)
    } else {
      setIndex((v) => v + 1)
      setSelected(null)
    }
  }

  function reset() {
    setLevel(null)
    setFinished(false)
  }

  if (!level) {
    return (
      <div>
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-foreground">
          اختر مستوى الصعوبة
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {LEVELS.map((l) => (
            <button
              key={l.level}
              onClick={() => start(l.level)}
              className="group rounded-2xl border border-border bg-card p-7 text-right transition-all hover:-translate-y-1 hover:border-gold hover:shadow-lg"
            >
              <span
                className={cn(
                  'inline-flex rounded-full px-4 py-1.5 text-sm font-bold',
                  l.color,
                )}
              >
                {l.level}
              </span>
              <p className="mt-4 text-sm text-muted-foreground">{l.desc}</p>
              <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-primary group-hover:text-terracotta">
                ابدأ
                <ArrowLeft className="h-4 w-4" />
              </span>
            </button>
          ))}
        </div>
      </div>
    )
  }

  if (finished) {
    const badge = badgeFor(score, questions.length)
    return (
      <div className="rounded-3xl border border-border bg-card p-8 text-center md:p-12">
        <span className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gold text-gold-foreground">
          <Trophy className="h-10 w-10" />
        </span>
        <h2 className="mt-6 font-[family-name:var(--font-heading)] text-3xl font-bold text-foreground">
          {badge.name}
        </h2>
        <p className="mt-2 text-muted-foreground">{badge.desc}</p>
        <p className="mt-6 text-5xl font-bold text-primary">
          {score}
          <span className="text-2xl text-muted-foreground"> / {questions.length}</span>
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={() => start(level)}
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-bold text-primary-foreground transition-transform hover:scale-[1.03]"
          >
            <RotateCcw className="h-5 w-5" />
            أعد نفس المستوى
          </button>
          <button
            onClick={reset}
            className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 font-bold text-foreground transition-colors hover:bg-secondary"
          >
            غيّر المستوى
          </button>
        </div>
      </div>
    )
  }

  const current = questions[index]

  return (
    <div>
      <div className="flex items-center justify-between gap-4">
        <span className="rounded-full bg-secondary px-4 py-1.5 text-sm font-bold text-secondary-foreground">
          {current.category}
        </span>
        <span className="text-sm font-bold text-muted-foreground">
          سؤال {index + 1} من {questions.length}
        </span>
      </div>

      <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-secondary">
        <div
          className="h-full rounded-full bg-gold transition-all duration-300"
          style={{ width: `${((index + (selected !== null ? 1 : 0)) / questions.length) * 100}%` }}
        />
      </div>

      <div className="mt-8 rounded-3xl border border-border bg-card p-7 md:p-9">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-foreground md:text-3xl">
          {current.q}
        </h2>

        <div className="mt-7 grid gap-3 sm:grid-cols-2">
          {current.options.map((opt, i) => {
            const isCorrect = i === current.correct
            const isChosen = i === selected
            const reveal = selected !== null
            return (
              <button
                key={i}
                onClick={() => choose(i)}
                disabled={reveal}
                className={cn(
                  'flex items-center justify-between gap-3 rounded-2xl border-2 px-5 py-4 text-right text-lg font-medium transition-all',
                  !reveal &&
                    'border-border bg-background hover:border-primary hover:bg-secondary',
                  reveal && isCorrect && 'border-chart-5 bg-chart-5/15 text-foreground',
                  reveal &&
                    isChosen &&
                    !isCorrect &&
                    'border-destructive bg-destructive/10 text-foreground',
                  reveal && !isCorrect && !isChosen && 'border-border opacity-60',
                )}
              >
                <span>{opt}</span>
                {reveal && isCorrect && <Check className="h-5 w-5 text-chart-5" />}
                {reveal && isChosen && !isCorrect && (
                  <X className="h-5 w-5 text-destructive" />
                )}
              </button>
            )
          })}
        </div>

        {selected !== null && (
          <div className="mt-7 flex items-center justify-between gap-4">
            <p className="font-bold text-foreground">
              {selected === current.correct ? 'إجابة صحيحة! أحسنت.' : 'إجابة غير صحيحة.'}
            </p>
            <button
              onClick={next}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-bold text-primary-foreground transition-transform hover:scale-[1.03]"
            >
              {index + 1 >= questions.length ? 'النتيجة' : 'السؤال التالي'}
              <ArrowLeft className="h-5 w-5" />
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
