import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

const CARDS = [
  {
    href: '/turath',
    img: '/images/carthage.png',
    alt: 'أطلال قرطاج الأثرية المطلة على البحر المتوسط',
    tag: 'التراث',
    title: 'كنوز الأرض التونسية',
    text: 'مواقع أثرية، مدن عتيقة، وفنون عريقة تروي قصّة شعب.',
  },
  {
    href: '/hadarat',
    img: '/images/mosaic.png',
    alt: 'فسيفساء رومانية تونسية بألوان زاهية',
    tag: 'الحضارات',
    title: 'طبقات من التاريخ',
    text: 'رحلة عبر الحضارات التي مرّت على تونس وتركت بصمتها.',
  },
  {
    href: '/hiwar',
    img: '/images/dialogue.png',
    alt: 'جامع القيروان الكبير عند الغروب',
    tag: 'حوار الحضارات',
    title: 'جسر بين الثقافات',
    text: 'تونس فضاء للتسامح والتلاقي بين ضفّتي المتوسط.',
  },
]

export function Explore() {
  return (
    <section className="bg-secondary/50">
      <div className="mx-auto max-w-7xl px-4 py-20 md:px-8">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="text-sm font-bold uppercase tracking-widest text-terracotta">
              استكشف المنصّة
            </span>
            <h2 className="mt-3 font-[family-name:var(--font-heading)] text-4xl font-bold text-foreground text-balance md:text-5xl">
              ابدأ رحلتك في عمق الهوية
            </h2>
          </div>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {CARDS.map((c) => (
            <Link
              key={c.href}
              href={c.href}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={c.img || '/placeholder.svg'}
                  alt={c.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute right-4 top-4 rounded-full bg-background/90 px-3 py-1 text-xs font-bold text-primary backdrop-blur-sm">
                  {c.tag}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-foreground">
                  {c.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {c.text}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-primary transition-colors group-hover:text-terracotta">
                  اقرأ المزيد
                  <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
