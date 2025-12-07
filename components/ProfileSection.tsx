'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import { HiMail, HiPhone } from 'react-icons/hi'
import { FaGithub, FaGitlab, FaFacebook } from 'react-icons/fa'
import Image from 'next/image'

export default function ProfileSection() {
  const { t } = useLanguage()

  return (
    <section id="profile" className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t.profile.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t.profile.description}</p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 lg:p-12">
            <div className="flex flex-col items-center mb-8">
              <div className="w-32 h-32 rounded-full flex items-center justify-center mb-6">
                {/* <FaUser className="w-12 h-12 text-primary-600" /> */}
                <Image
                  src="/assets/images/profile.png"
                  alt="Profile"
                  width={128}
                  height={128}
                  className="rounded-full object-cover w-32 h-32"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{t.profile.name}</h3>
              <p className="text-gray-600">{t.profile.role}</p>
            </div>

            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                  <HiMail className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">{t.profile.emailLabel}</p>
                  <a
                    href={`mailto:${t.profile.email}`}
                    className="text-gray-900 font-medium hover:text-primary-600 transition-colors"
                  >
                    {t.profile.email}
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                  <HiPhone className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">{t.profile.phoneLabel}</p>
                  <a
                    href={`tel:${t.profile.phone}`}
                    className="text-gray-900 font-medium hover:text-primary-600 transition-colors"
                  >
                    {t.profile.phone}
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Social Media Links */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500 mb-4 text-center">{t.profile.socialLabel}</p>
              <div className="flex justify-center gap-4">
                <motion.a
                  href={t.profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  whileHover={{ scale: 1.1 }}
                  className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-primary-100 transition-colors"
                  aria-label="GitHub"
                >
                  <FaGithub className="w-6 h-6 text-gray-700 hover:text-primary-600 transition-colors" />
                </motion.a>
                <motion.a
                  href={t.profile.gitlab}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  whileHover={{ scale: 1.1 }}
                  className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-primary-100 transition-colors"
                  aria-label="GitLab"
                >
                  <FaGitlab className="w-6 h-6 text-gray-700 hover:text-primary-600 transition-colors" />
                </motion.a>
                <motion.a
                  href={t.profile.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  whileHover={{ scale: 1.1 }}
                  className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-primary-100 transition-colors"
                  aria-label="Facebook"
                >
                  <FaFacebook className="w-6 h-6 text-gray-700 hover:text-primary-600 transition-colors" />
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
