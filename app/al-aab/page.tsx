import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { ArrowLeft, Brain, Map, Shirt, Layers, Flag, Sparkles } from 'lucide-react'

export const metadata: Metadata = {
  title: 'فضاء الألعاب | إفريقية',
  description: 'ألعاب تعليمية تفاعلية للأطفال حول تونس: مسابقات، أحاجي، ذاكرة وأزياء تقليدية.',
}

const GAMES = [
  {
    href: '/al-aab/quiz',
    icon: Brain,
    title: 'مسابقة تونس',
    text: 'أسئلة ممتعة عن العلم والولايات والمعالم والتقاليد والمطبخ التونسي.',
    color: 'bg-primary text-primary-foreground',
    tag: 'مستويات وأوسمة',
  },
  {
    href: '/al-aab/kharita',
    icon: Map,
    title: 'أحجية الخريطة',
    text: 'ضع كل ولاية في مكانها الصحيح على خريطة تونس قبل انتهاء الوقت.',
    color: 'bg-terracotta text-terracotta-foreground',
    tag: 'سحب وإفلات',
  },
  {
    href: '/al-aab/libas',
    icon: Shirt,
    title: 'ألبس الشخصية التونسية',
    text: 'اختر الشاشية والجبّة والسفساري والبلغة لتجهيز شخصية بالزيّ التقليدي.',
    color: 'bg-gold text-gold-foreground',
    tag: 'تلبيس وتنسيق',
  },
  {
    href: '/al-aab/dhakira',
    icon: Layers,
    title: 'لعبة الذاكرة',
    text: 'اقلب البطاقات وابحث عن الأزواج المتطابقة لرموز تونسية محبّبة.',
    color: 'bg-primary text-primary-foreground',
    tag: 'تركيز وذاكرة',
  },
  {
    href: '/al-aab/alam',
    icon: Flag,
    title: 'أحجية العلم التونسي',
    text: 'حرّك القطع وأعد ترتيبها لتكوين العلم التونسي كاملًا بأقل عدد من الحركات.',
    color: 'bg-terracotta text-terracotta-foreground',
    tag: 'تركيب وتفكير',
  },
]

export default function Page() {
  return (
    <main>
      <section className="relative overflow-hidden bg-primary">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-16 md:grid-cols-2 md:px-8">
          <div className="text-primary-foreground">
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/50 bg-background/10 px-4 py-1.5 text-sm font-bold text-gold">
              <Sparkles className="h-4 w-4" />
              فضاء الأطفال
            </span>
            <h1 className="mt-5 font-[family-name:var(--font-heading)] text-4xl font-bold leading-tight text-balance md:text-6xl">
              العب، تعلّم، واكتشف تونس
            </h1>
            <p className="mt-4 max-w-md text-lg leading-relaxed text-primary-foreground/85">
              مجموعة من الألعاب التعليمية الممتعة والآمنة تأخذ أطفالكم في رحلة
              عبر جغرافيا تونس وتاريخها وتقاليدها.
            </p>
          </div>
          <div className="relative h-56 overflow-hidden rounded-3xl md:h-80">
            <Image
              src="/images/games-hero.png"
              alt="رسم توضيحي مرح لمعالم تونسية للأطفال"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          {GAMES.map((g) => (
            <Link
              key={g.href}
              href={g.href}
              className="group flex items-center gap-6 rounded-3xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-gold hover:shadow-xl md:p-8"
            >
              <span
                className={`flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl ${g.color}`}
              >
                <g.icon className="h-10 w-10" />
              </span>
              <div className="flex-1">
                <span className="text-xs font-bold uppercase tracking-widest text-terracotta">
                  {g.tag}
                </span>
                <h2 className="mt-1 font-[family-name:var(--font-heading)] text-2xl font-bold text-foreground">
                  {g.title}
                </h2>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {g.text}
                </p>
                <span className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-primary transition-colors group-hover:text-terracotta">
                  العب الآن
                  <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
