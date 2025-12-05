'use client'

import FeatureCard from './FeatureCard'
import { useLanguage } from '@/contexts/LanguageContext'

export default function FeaturesSection() {
  const { t } = useLanguage()

  const features = [
    {
      title: t.features.viewPlanets.title,
      description: t.features.viewPlanets.description,
      icon: '/assets/feature-1.svg',
    },
    {
      title: t.features.discoverStars.title,
      description: t.features.discoverStars.description,
      icon: '/assets/feature-2.svg',
    },
    {
      title: t.features.blackHoles.title,
      description: t.features.blackHoles.description,
      icon: '/assets/feature-3.svg',
    },
  ]

  return (
    <section
      id="features"
      className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-white"
    >
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t.features.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t.features.description}
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

