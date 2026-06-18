import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Amiri, Tajawal, Geist_Mono } from 'next/font/google'
import './globals.css'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'

const amiri = Amiri({
  variable: '--font-amiri',
  subsets: ['arabic', 'latin'],
  weight: ['400', '700'],
})

const tajawal = Tajawal({
  variable: '--font-tajawal',
  subsets: ['arabic', 'latin'],
  weight: ['300', '400', '500', '700', '800'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'إفريقية | المرجع الرقمي للهوية التونسية وحوار الحضارات',
  description:
    'إفريقية منصّة رقمية فاخرة تحتفي بالهوية التونسية، التراث، الحضارات المتعاقبة، وحوار الحضارات، مع فضاء ألعاب تعليمية للأطفال.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  themeColor: '#1f5e5e',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${amiri.variable} ${tajawal.variable} ${geistMono.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        <SiteHeader />
        {children}
        <SiteFooter />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
