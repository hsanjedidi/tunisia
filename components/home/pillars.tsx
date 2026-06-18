import { Landmark, BookOpen, Globe2, Gamepad2 } from 'lucide-react'

const PILLARS = [
  {
    icon: Landmark,
    title: 'تراث حيّ',
    text: 'من المدن العتيقة إلى المواقع الأثرية، نحفظ ذاكرة المكان ونرويها للأجيال.',
  },
  {
    icon: BookOpen,
    title: 'حضارات متعاقبة',
    text: 'الأمازيغ، الفينيقيون، الرومان، العرب… طبقات من التاريخ تشكّل هويتنا.',
  },
  {
    icon: Globe2,
    title: 'حوار الأمم',
    text: 'تونس جسر بين ضفّتي المتوسط، فضاء للتسامح وتلاقي الثقافات.',
  },
  {
    icon: Gamepad2,
    title: 'تعلّم باللعب',
    text: 'فضاء ألعاب تفاعلية يقرّب الأطفال من بلدهم بطريقة ممتعة وآمنة.',
  },
]

export function Pillars() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 md:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-sm font-bold uppercase tracking-widest text-terracotta">
          من نحن
        </span>
        <h2 className="mt-3 font-[family-name:var(--font-heading)] text-4xl font-bold text-foreground text-balance md:text-5xl">
          أربعة أعمدة تحمل رسالتنا
        </h2>
      </div>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {PILLARS.map((p) => (
          <div
            key={p.title}
            className="group rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-gold hover:shadow-lg"
          >
            <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
              <p.icon className="h-7 w-7" />
            </span>
            <h3 className="mt-5 font-[family-name:var(--font-heading)] text-2xl font-bold text-foreground">
              {p.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {p.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
