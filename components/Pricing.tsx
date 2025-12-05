'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Pricing() {
  const { t } = useLanguage()

  const pricingTiers = [
    {
      name: t.pricing.stargazer.name,
      price: '$29',
      period: '/month',
      description: t.pricing.stargazer.description,
      features: t.pricing.stargazer.features,
      cta: t.pricing.stargazer.cta,
      popular: false,
    },
    {
      name: t.pricing.astronomer.name,
      price: '$79',
      period: '/month',
      description: t.pricing.astronomer.description,
      features: t.pricing.astronomer.features,
      cta: t.pricing.astronomer.cta,
      popular: true,
    },
    {
      name: t.pricing.cosmicExplorer.name,
      price: '$199',
      period: '/month',
      description: t.pricing.cosmicExplorer.description,
      features: t.pricing.cosmicExplorer.features,
      cta: t.pricing.cosmicExplorer.cta,
      popular: false,
    },
  ]

  return (
    <section
      id="pricing"
      className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-white"
    >
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t.pricing.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t.pricing.description}
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 max-w-6xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative bg-white p-8 rounded-2xl shadow-lg border-2 transition-all duration-300 ${
                tier.popular
                  ? 'border-primary-600 scale-105 lg:scale-110'
                  : 'border-gray-100 hover:border-primary-300'
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    {t.pricing.astronomer.popular}
                  </span>
                </div>
              )}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                <p className="text-gray-600 mb-6">{tier.description}</p>
                <div className="flex items-baseline justify-center">
                  <span className="text-5xl font-bold text-gray-900">{tier.price}</span>
                  <span className="text-gray-600 ml-2">{tier.period}</span>
                </div>
              </div>
              <ul className="space-y-4 mb-8">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <svg
                      className="w-5 h-5 text-primary-600 mr-3 mt-0.5 flex-shrink-0"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#cta"
                className={`block w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
                  tier.popular
                    ? 'bg-primary-600 text-white hover:bg-primary-700 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                } focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2`}
                aria-label={`${tier.cta} - ${tier.name} plan`}
              >
                {tier.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

