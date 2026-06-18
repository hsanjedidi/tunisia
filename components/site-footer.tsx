import Link from 'next/link'

const LINKS = [
  { href: '/turath', label: 'التراث' },
  { href: '/hadarat', label: 'الحضارات' },
  { href: '/hiwar', label: 'حوار الحضارات' },
  { href: '/al-aab', label: 'فضاء الألعاب' },
]

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-3 md:px-8">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold text-gold-foreground font-[family-name:var(--font-heading)] text-xl">
              إ
            </span>
            <span className="font-[family-name:var(--font-heading)] text-2xl font-bold">
              إفريقية
            </span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-primary-foreground/80">
            المرجع الرقمي للهوية التونسية وحوار الحضارات. منصّة ثقافية تجمع بين
            عراقة التراث وروح العصر.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest text-gold">
            استكشف
          </h4>
          <ul className="mt-4 flex flex-col gap-2">
            {LINKS.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-sm text-primary-foreground/80 transition-colors hover:text-gold"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest text-gold">
            عن المنصّة
          </h4>
          <p className="mt-4 text-sm leading-relaxed text-primary-foreground/80">
            إفريقية مشروع يحتفي بتونس أرض اللقاء بين الحضارات الأمازيغية
            والفينيقية والرومانية والعربية الإسلامية والمتوسطية.
          </p>
        </div>
      </div>
      <div className="border-t border-primary-foreground/15">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-6 text-xs text-primary-foreground/70 md:flex-row md:px-8">
          <p>© {new Date().getFullYear()} إفريقية — جميع الحقوق محفوظة.</p>
          <p>صُنع بشغف للهوية التونسية</p>
        </div>
      </div>
    </footer>
  )
}
