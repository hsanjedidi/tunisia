import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Sparkles } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-sidi-bou-said.png"
          alt="قرية سيدي بوسعيد بأبوابها الزرقاء وجدرانها البيضاء المطلة على البحر المتوسط"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-primary/85 via-primary/55 to-primary/30" />
      </div>

      <div className="relative mx-auto flex min-h-[88vh] max-w-7xl flex-col justify-center px-4 py-24 md:px-8">
        <span className="inline-flex w-fit items-center gap-2 rounded-full border border-gold/50 bg-background/10 px-4 py-1.5 text-sm font-medium text-gold backdrop-blur-sm">
          <Sparkles className="h-4 w-4" />
          المرجع الرقمي للهوية التونسية
        </span>

        <h1 className="mt-6 max-w-3xl font-[family-name:var(--font-heading)] text-5xl font-bold leading-tight text-primary-foreground text-balance md:text-7xl">
          إفريقية، حيث تلتقي الحضارات وتُروى الهوية
        </h1>

        <p className="mt-6 max-w-xl text-lg leading-relaxed text-primary-foreground/90">
          منصّة ثقافية فاخرة تحتفي بتونس أرض التلاقي بين البحر والصحراء، وبين
          الأمازيغ والفينيقيين والرومان والعرب والمتوسطيين. اكتشف التراث، الحضارات،
          وحوار الأمم.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Link
            href="/turath"
            className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-base font-bold text-gold-foreground transition-transform hover:scale-[1.03]"
          >
            اكتشف التراث
            <ArrowLeft className="h-5 w-5" />
          </Link>
          <Link
            href="/al-aab"
            className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/40 bg-background/10 px-7 py-3.5 text-base font-bold text-primary-foreground backdrop-blur-sm transition-colors hover:bg-background/20"
          >
            فضاء ألعاب الأطفال
          </Link>
        </div>
      </div>
    </section>
  )
}
