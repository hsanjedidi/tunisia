import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Brain, Map, Shirt, Layers } from 'lucide-react'

const MINI = [
  { icon: Brain, label: 'مسابقة تونس' },
  { icon: Map, label: 'أحجية الولايات' },
  { icon: Shirt, label: 'ألبس الشخصية' },
  { icon: Layers, label: 'لعبة الذاكرة' },
]

export function GamesCta() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 md:px-8">
      <div className="overflow-hidden rounded-[2rem] bg-primary text-primary-foreground">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div className="p-8 md:p-12">
            <span className="text-sm font-bold uppercase tracking-widest text-gold">
              فضاء الأطفال
            </span>
            <h2 className="mt-3 font-[family-name:var(--font-heading)] text-4xl font-bold text-balance md:text-5xl">
              تعلّموا تونس باللعب والمرح
            </h2>
            <p className="mt-4 max-w-md leading-relaxed text-primary-foreground/85">
              ألعاب تفاعلية تعليمية تأخذ أطفالكم في رحلة ممتعة عبر الجغرافيا
              والتاريخ والتقاليد والمطبخ التونسي.
            </p>

            <div className="mt-7 grid grid-cols-2 gap-3">
              {MINI.map((m) => (
                <div
                  key={m.label}
                  className="flex items-center gap-3 rounded-xl bg-primary-foreground/10 px-4 py-3"
                >
                  <m.icon className="h-5 w-5 text-gold" />
                  <span className="text-sm font-medium">{m.label}</span>
                </div>
              ))}
            </div>

            <Link
              href="/al-aab"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-base font-bold text-gold-foreground transition-transform hover:scale-[1.03]"
            >
              ادخل فضاء الألعاب
              <ArrowLeft className="h-5 w-5" />
            </Link>
          </div>

          <div className="relative h-64 md:h-full md:min-h-[26rem]">
            <Image
              src="/images/games-hero.png"
              alt="رسم توضيحي مرح لمعالم تونسية للأطفال"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
