'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface ExperienceCardProps {
  title: string
  description: string
  icon?: ReactNode
  delay?: number
}

export default function ExperienceCard({
  title,
  description,
  icon,
  delay = 0,
}: ExperienceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5, delay }}
      className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
    >
      {icon && (
        <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mb-6">
          <div className="w-8 h-8 text-primary-600">{icon}</div>
        </div>
      )}
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </motion.div>
  )
}
