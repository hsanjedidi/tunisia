import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { Handshake, Languages, Anchor, Sun } from 'lucide-react'

export const metadata: Metadata = {
  title: 'حوار الحضارات | إفريقية',
  description: 'تونس جسر بين الثقافات وفضاء للتسامح وتلاقي الأمم.',
}

const VALUES = [
  {
    icon: Handshake,
    title: 'التسامح',
    text: 'أرض تعايشت فيها الأديان والثقافات قروناً في احترام متبادل.',
  },
  {
    icon: Languages,
    title: 'تعدّد الألسن',
    text: 'تلاقت العربية والأمازيغية ولغات المتوسط لتثري التعبير والفكر.',
  },
  {
    icon: Anchor,
    title: 'بوّابة المتوسط',
    text: 'موقع استراتيجي جعل تونس ملتقى للتجارة والأفكار بين الضفّتين.',
  },
  {
    icon: Sun,
    title: 'روح المتوسط',
    text: 'انفتاح وكرم ضيافة وحبّ للحياة يميّز الشخصية التونسية.',
  },
]

export default function Page() {
  return (
    <main>
      <PageHero
        tag="حوار الحضارات"
        title="تونس، جسرٌ بين ضفّتين"
        subtitle="حيث يلتقي الشرق بالغرب، والتاريخ بالحاضر، في فضاء للتسامح والتلاقي."
        img="/images/dialogue.png"
        alt="جامع القيروان الكبير عند الغروب"
      />

      <section className="mx-auto max-w-4xl px-4 py-20 text-center md:px-8">
        <p className="font-[family-name:var(--font-heading)] text-2xl leading-relaxed text-foreground text-balance md:text-3xl">
          "على هذه الأرض التي عبرها الفينيقيون والرومان والعرب والأندلسيون
          والأتراك، نشأ حوارٌ دائمٌ بين الحضارات جعل من تونس نموذجاً للتعايش
          والانفتاح."
        </p>
      </section>

      <section className="bg-secondary/50">
        <div className="mx-auto max-w-7xl px-4 py-20 md:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-terracotta">
              قيمٌ نتقاسمها
            </span>
            <h2 className="mt-3 font-[family-name:var(--font-heading)] text-4xl font-bold text-foreground text-balance">
              رسالة إنسانية متجدّدة
            </h2>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v) => (
              <div
                key={v.title}
                className="rounded-2xl bg-card p-7 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gold/20 text-terracotta">
                  <v.icon className="h-7 w-7" />
                </span>
                <h3 className="mt-5 font-[family-name:var(--font-heading)] text-xl font-bold text-foreground">
                  {v.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {v.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
