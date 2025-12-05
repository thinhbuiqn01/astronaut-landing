'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'

export default function CTA() {
  const { t } = useLanguage()

  return (
    <section
      id="cta"
      className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-600 to-primary-700"
    >
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            {t.cta.title}
          </h2>
          <p className="text-lg sm:text-xl text-primary-100 mb-8">{t.cta.description}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-600"
              aria-label={t.cta.startTrial}
            >
              {t.cta.startTrial}
            </a>
            <a
              href="#contact"
              className="bg-transparent text-white px-8 py-4 rounded-lg font-semibold text-lg border-2 border-white hover:bg-white/10 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-600"
              aria-label={t.cta.exploreNow}
            >
              {t.cta.exploreNow}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
