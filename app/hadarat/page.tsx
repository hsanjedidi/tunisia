import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'

export const metadata: Metadata = {
  title: 'الحضارات | إفريقية',
  description: 'رحلة عبر الحضارات التي تعاقبت على تونس وشكّلت هويتها.',
}

const ERAS = [
  {
    period: 'قبل التاريخ',
    title: 'الحضارة القفصية',
    text: 'من أقدم الحضارات في شمال إفريقيا، تركت آثاراً حجرية تشهد على بدايات الإنسان في المنطقة.',
  },
  {
    period: 'القرن 12 ق.م',
    title: 'الفينيقيون وقرطاج',
    text: 'أسّس الفينيقيون قرطاج لتصبح قوّة بحرية وتجارية عظمى سيطرت على المتوسط.',
  },
  {
    period: '146 ق.م',
    title: 'الرومان',
    text: 'حوّل الرومان إفريقية إلى مطمورة لروما، وتركوا مدناً ومسارح وفسيفساء خالدة.',
  },
  {
    period: 'القرن 5 م',
    title: 'الوندال والبيزنطيون',
    text: 'فترة انتقالية شهدت صراعات وتحوّلات أعادت رسم خريطة المنطقة.',
  },
  {
    period: '670 م',
    title: 'الفتح العربي الإسلامي',
    text: 'تأسيس القيروان وبداية عصر ذهبي للعلم والعمارة والفكر الإسلامي.',
  },
  {
    period: 'القرون الوسطى والحديثة',
    title: 'الأغالبة والحفصيون والعثمانيون',
    text: 'دول متعاقبة أثرت الموروث المعماري والثقافي وصولاً إلى تونس الحديثة.',
  },
]

export default function Page() {
  return (
    <main>
      <PageHero
        tag="الحضارات"
        title="طبقات من التاريخ تصنع هويتنا"
        subtitle="من القفصيين والفينيقيين إلى الرومان والعرب، كلّ حضارة أضافت لوناً إلى لوحة تونس."
        img="/images/mosaic.png"
        alt="فسيفساء رومانية تونسية"
      />

      <section className="mx-auto max-w-4xl px-4 py-20 md:px-8">
        <div className="text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-terracotta">
            خطّ الزمن
          </span>
          <h2 className="mt-3 font-[family-name:var(--font-heading)] text-4xl font-bold text-foreground text-balance">
            تونس عبر العصور
          </h2>
        </div>

        <ol className="relative mt-14 border-r-2 border-border pr-8 md:pr-12">
          {ERAS.map((e, i) => (
            <li key={e.title} className="relative pb-12 last:pb-0">
              <span className="absolute right-[-2.65rem] top-1 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground md:right-[-3.65rem]">
                {i + 1}
              </span>
              <span className="text-sm font-bold text-terracotta">{e.period}</span>
              <h3 className="mt-1 font-[family-name:var(--font-heading)] text-2xl font-bold text-foreground">
                {e.title}
              </h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">{e.text}</p>
            </li>
          ))}
        </ol>
      </section>
    </main>
  )
}
