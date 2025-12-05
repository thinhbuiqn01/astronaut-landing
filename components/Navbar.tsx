'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import LanguageSwitcher from './LanguageSwitcher'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: t.nav.home, href: '#home' },
    { name: t.nav.features, href: '#features' },
    { name: t.nav.testimonials, href: '#testimonials' },
    { name: t.nav.pricing, href: '#pricing' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}
      role="banner"
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a
            href="#home"
            className={`text-2xl font-bold transition-colors ${
              scrolled
                ? 'text-gray-900 hover:text-primary-600'
                : 'text-white hover:text-primary-300'
            }`}
            aria-label="Home"
          >
            Astronaut
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {navLinks.map(link => (
              <a
                key={link.name}
                href={link.href}
                className={`font-medium transition-colors ${
                  scrolled
                    ? 'text-gray-700 hover:text-primary-600'
                    : 'text-white hover:text-primary-300'
                }`}
              >
                {link.name}
              </a>
            ))}
            <LanguageSwitcher scrolled={scrolled} />
            <a
              href="#cta"
              className={`px-6 py-2.5 rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 ${
                scrolled
                  ? 'bg-primary-600 text-white hover:bg-primary-700'
                  : 'bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white/20'
              }`}
              aria-label={t.nav.getStarted}
            >
              {t.nav.getStarted}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className={`md:hidden p-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 ${
              scrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
            }`}
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden overflow-hidden"
            >
              <div className="px-4 pt-2 pb-4 space-y-3 bg-white border-t border-gray-200">
                {navLinks.map(link => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="block py-2 text-gray-700 hover:text-primary-600 font-medium transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
                <div className="py-2">
                  <LanguageSwitcher scrolled={scrolled} />
                </div>
                <a
                  href="#cta"
                  className="block bg-primary-600 text-white px-6 py-2.5 rounded-lg font-medium text-center hover:bg-primary-700 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {t.nav.getStarted}
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}
