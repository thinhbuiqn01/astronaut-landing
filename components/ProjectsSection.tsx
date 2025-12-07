'use client'

import ProjectCard from './ProjectCard'
import { useLanguage } from '@/contexts/LanguageContext'

export default function ProjectsSection() {
  const { t } = useLanguage()

  const projects = [
    {
      title: t.projects.project1.title,
      description: t.projects.project1.description,
      image: '/assets/images/chiichouse-booking.png',  
      technologies: t.projects.project1.technologies,
      link: t.projects.project1.link,
    },
    {
      title: t.projects.project2.title,
      description: t.projects.project2.description,
      image: '/assets/images/chiichouse-crm.png',
      technologies: t.projects.project2.technologies,
      link: t.projects.project2.link,
    },
    {
      title: t.projects.project3.title,
      description: t.projects.project3.description,
      image: '/assets/images/huegatex.png',
      technologies: t.projects.project3.technologies,
      link: t.projects.project3.link,
    },
    {
      title: t.projects.project4.title,
      description: t.projects.project4.description,
      image: '/assets/images/clothing-store.png',
      technologies: t.projects.project4.technologies,
      link: t.projects.project4.link,
    },
    {
      title: t.projects.project5.title,
      description: t.projects.project5.description,
      image: '/assets/images/quantum-insurance.png',
      technologies: t.projects.project5.technologies,
      link: t.projects.project5.link,
    },
  ]

  return (
    <section
      id="projects"
      className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-white"
    >
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t.projects.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t.projects.description}
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              image={project.image}
              technologies={project.technologies as unknown as string[]}
              link={project.link}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

