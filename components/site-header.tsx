'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const NAV = [
  { href: '/', label: 'الرئيسية' },
  { href: '/turath', label: 'التراث' },
  { href: '/hadarat', label: 'الحضارات' },
  { href: '/hiwar', label: 'حوار الحضارات' },
  { href: '/al-aab', label: 'فضاء الألعاب' },
]

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 md:px-8">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-[family-name:var(--font-heading)] text-xl">
            إ
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-[family-name:var(--font-heading)] text-2xl font-bold text-primary">
              إفريقية
            </span>
            <span className="text-[10px] tracking-widest text-muted-foreground">
              IFRIQIYA
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV.map((item) => {
            const active =
              item.href === '/'
                ? pathname === '/'
                : pathname.startsWith(item.href)
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'rounded-full px-4 py-2 text-sm font-medium transition-colors',
                  active
                    ? 'bg-primary text-primary-foreground'
                    : 'text-foreground/80 hover:bg-secondary hover:text-foreground',
                )}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        <button
          type="button"
          aria-label="القائمة"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-border/60 bg-background px-4 py-3 md:hidden">
          <ul className="flex flex-col gap-1">
            {NAV.map((item) => {
              const active =
                item.href === '/'
                  ? pathname === '/'
                  : pathname.startsWith(item.href)
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      'block rounded-lg px-4 py-3 text-base font-medium transition-colors',
                      active
                        ? 'bg-primary text-primary-foreground'
                        : 'text-foreground/80 hover:bg-secondary',
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      )}
    </header>
  )
}
