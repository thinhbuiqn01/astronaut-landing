import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import HeaderMeta from '@/components/HeaderMeta'
import { LanguageProvider } from '@/contexts/LanguageContext'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Portfolio | Tony Bui',
  description:
    'Portfolio of Tony Bui, a software engineer with a passion for building web applications.',
  keywords: [
    'portfolio',
    'software engineer',
    'web development',
    'full stack developer',
    'react',
    'next.js',
    'typescript',
    'javascript',
  ],
  authors: [{ name: 'Tony Bui' }],
  openGraph: {
    title: 'Portfolio | Tony Bui',
    description:
      'Portfolio of Tony Bui, a software engineer with a passion for building web applications.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <HeaderMeta />
      </head>
      <body className="antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
