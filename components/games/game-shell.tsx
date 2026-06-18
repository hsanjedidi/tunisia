import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function GameShell({
  title,
  subtitle,
  children,
}: {
  title: string
  subtitle: string
  children: React.ReactNode
}) {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10 md:px-8 md:py-14">
      <Link
        href="/al-aab"
        className="inline-flex items-center gap-2 text-sm font-bold text-primary transition-colors hover:text-terracotta"
      >
        <ArrowRight className="h-4 w-4" />
        رجوع إلى فضاء الألعاب
      </Link>

      <header className="mt-6">
        <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold text-foreground text-balance md:text-5xl">
          {title}
        </h1>
        <p className="mt-2 text-muted-foreground">{subtitle}</p>
      </header>

      <div className="mt-8">{children}</div>
    </main>
  )
}
