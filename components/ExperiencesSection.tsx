'use client'

import ExperienceCard from './ExperienceCard'
import { useLanguage } from '@/contexts/LanguageContext'
import { SiNextdotjs, SiAngular, SiReact, SiNodedotjs, SiNestjs, SiReactivex } from 'react-icons/si'
import { VscVscode } from 'react-icons/vsc'
import { BsCursorFill } from 'react-icons/bs'

export default function ExperiencesSection() {
  const { t } = useLanguage()

  const experiences = [
    {
      title: t.experiences.nextjs.title,
      description: t.experiences.nextjs.description,
      icon: <SiNextdotjs className="w-8 h-8" />,
    },
    {
      title: t.experiences.react.title,
      description: t.experiences.react.description,
      icon: <SiReact className="w-8 h-8" />,
    },
    {
      title: t.experiences.angular.title,
      description: t.experiences.angular.description,
      icon: <SiAngular className="w-8 h-8" />,
    },
    {
      title: t.experiences.nodejs.title,
      description: t.experiences.nodejs.description,
      icon: <SiNodedotjs className="w-8 h-8" />,
    },
    {
      title: t.experiences.nestjs.title,
      description: t.experiences.nestjs.description,
      icon: <SiNestjs className="w-8 h-8" />,
    },
    {
      title: t.experiences.rxjs.title,
      description: t.experiences.rxjs.description,
      icon: <SiReactivex className="w-8 h-8" />,
    },
    {
      title: t.experiences.vscode.title,
      description: t.experiences.vscode.description,
      icon: <VscVscode className="w-8 h-8" />,
    },
    {
      title: t.experiences.cursor.title,
      description: t.experiences.cursor.description,
      icon: <BsCursorFill className="w-8 h-8" />,
    },
  ]

  return (
    <section id="experiences" className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t.experiences.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t.experiences.description}</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={experience.title}
              title={experience.title}
              description={experience.description}
              icon={experience.icon}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
