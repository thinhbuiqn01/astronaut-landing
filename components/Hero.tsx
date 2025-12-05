'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Hero() {
  const { t } = useLanguage()
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-16 lg:pt-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/images/hero-image.webp"
          alt="Hero background showing planets, stars, and space exploration"
          fill
          className="object-cover"
          priority
          sizes="100vw"
          quality={90}
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-blue-900/70 to-slate-900/80" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6"
            >
              {t.hero.title} <span className="text-primary-600">{t.hero.titleHighlight}</span>{' '}
              {t.hero.titleSuffix}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              {t.hero.description}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a
                href="#cta"
                className="bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                aria-label={`${t.hero.getStarted} - Primary CTA`}
              >
                {t.hero.getStarted}
              </a>
              <a
                href="#features"
                className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg border-2 border-primary-600 hover:bg-primary-50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                aria-label={`${t.hero.learnMore} - Secondary CTA`}
              >
                {t.hero.learnMore}
              </a>
            </motion.div>
          </motion.div>

          {/* Right Image - Optional decorative element or can be removed */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] hidden lg:block"
          >
            {/* Optional decorative element - can be removed if not needed */}
            <div className="relative w-full h-full rounded-2xl shadow-2xl flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-purple-500/20 rounded-xl backdrop-blur-sm border border-primary-500/30" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
