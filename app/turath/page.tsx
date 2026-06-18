import Image from 'next/image'
import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'

export const metadata: Metadata = {
  title: 'التراث | إفريقية',
  description: 'اكتشف التراث التونسي العريق من المواقع الأثرية إلى الفنون والحرف.',
}

const SITES = [
  {
    title: 'قرطاج',
    text: 'عاصمة الإمبراطورية الفينيقية ومسرح الحروب البونيقية، مدرجة على قائمة التراث العالمي لليونسكو.',
  },
  {
    title: 'مدينة تونس العتيقة',
    text: 'نسيج عمراني فريد من الأزقّة والأسواق والمساجد يعود إلى القرن السابع الميلادي.',
  },
  {
    title: 'جامع عقبة بالقيروان',
    text: 'أوّل مسجد في الغرب الإسلامي ومنارة للعلم والعمارة الإسلامية.',
  },
  {
    title: 'مدرج الجمّ',
    text: 'أحد أكبر المدرّجات الرومانية في العالم، شاهد على عظمة الحضارة الرومانية في إفريقية.',
  },
  {
    title: 'متحف باردو',
    text: 'يضمّ أكبر مجموعة فسيفساء رومانية في العالم تروي حياة الناس في العصور القديمة.',
  },
  {
    title: 'واحات الجنوب',
    text: 'من توزر إلى دوز، حيث تتشابك النخيل والعمارة الطينية وتقاليد الصحراء.',
  },
]

const CRAFTS = [
  { title: 'النسيج والمرڨوم', text: 'سجّاد وزرابي بألوان ونقوش تحمل رموزاً أمازيغية عريقة.' },
  { title: 'الفخّار', text: 'صناعة نابل وسجنان المدرجة ضمن التراث اللامادي لليونسكو.' },
  { title: 'الحلي الفضّية', text: 'مصوغ تقليدي يزيّن العرائس ويحمل دلالات الحماية والبركة.' },
  { title: 'النحاس المنقوش', text: 'أوانٍ وصواني تزخر بزخارف هندسية دقيقة من قلب المدينة.' },
]

export default function Page() {
  return (
    <main>
      <PageHero
        tag="التراث"
        title="كنوز الأرض التونسية"
        subtitle="من قرطاج إلى القيروان، ومن الفسيفساء إلى الزربية، تراث تونسي يمتدّ آلاف السنين."
        img="/images/carthage.png"
        alt="أطلال قرطاج الأثرية"
      />

      <section className="mx-auto max-w-7xl px-4 py-20 md:px-8">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <span className="text-sm font-bold uppercase tracking-widest text-terracotta">
              ذاكرة المكان
            </span>
            <h2 className="mt-3 font-[family-name:var(--font-heading)] text-4xl font-bold text-foreground text-balance">
              أرضٌ كتبت التاريخ بحجارتها
            </h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              تحتضن تونس ثمانية مواقع مدرجة على قائمة التراث العالمي لليونسكو،
              تشهد على تعاقب الحضارات وثراء الموروث الإنساني. كلّ حجر يروي حكاية،
              وكلّ زقاق يحفظ صدى خطى من سبقونا.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              نعمل في إفريقية على توثيق هذا التراث رقمياً وإتاحته للأجيال القادمة
              بأسلوب يجمع بين الدقّة العلمية وجمال العرض.
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
            <Image
              src="/images/mosaic.png"
              alt="تفاصيل فسيفساء رومانية تونسية"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-secondary/50">
        <div className="mx-auto max-w-7xl px-4 py-20 md:px-8">
          <h2 className="font-[family-name:var(--font-heading)] text-4xl font-bold text-foreground">
            مواقع لا تُنسى
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SITES.map((s) => (
              <article
                key={s.title}
                className="rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-gold hover:shadow-lg"
              >
                <h3 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-primary">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {s.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 md:px-8">
        <h2 className="font-[family-name:var(--font-heading)] text-4xl font-bold text-foreground">
          فنون وحِرَف عريقة
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CRAFTS.map((c) => (
            <div
              key={c.title}
              className="rounded-2xl border-t-4 border-terracotta bg-card p-6 shadow-sm"
            >
              <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-foreground">
                {c.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {c.text}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
