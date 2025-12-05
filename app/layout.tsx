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
  title: 'Astronaut | View Planets, Stars, Black Holes Online',
  description:
    'Explore the universe online - view planets, stars, black holes, and experience virtual space travel. Discover the cosmos in stunning detail.',
  keywords: [
    'space exploration',
    'view planets online',
    'stars',
    'black holes',
    'space travel',
    'universe',
    'astronomy',
    'cosmos',
  ],
  authors: [{ name: 'Astronaut' }],
  openGraph: {
    title: 'Astronaut | View Planets, Stars, Black Holes Online',
    description:
      'Explore the universe online - view planets, stars, black holes, and experience virtual space travel.',
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
