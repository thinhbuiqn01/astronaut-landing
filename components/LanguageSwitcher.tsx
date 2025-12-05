'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { Locale, locales } from '@/lib/i18n'

interface LanguageSwitcherProps {
  scrolled?: boolean
}

export default function LanguageSwitcher({ scrolled = false }: LanguageSwitcherProps) {
  const { locale, setLocale } = useLanguage()

  const languageNames: Record<Locale, string> = {
    en: 'English',
    vi: 'Tiếng Việt',
  }

  return (
    <div className="relative inline-block">
      <select
        value={locale}
        onChange={(e) => setLocale(e.target.value as Locale)}
        className={`appearance-none backdrop-blur-sm border rounded-lg px-4 py-2 font-medium cursor-pointer transition-colors focus:outline-none focus:ring-2 pr-8 ${
          scrolled
            ? 'bg-white border-gray-200 text-gray-700 hover:bg-gray-50 focus:ring-primary-500'
            : 'bg-white/10 border-white/20 text-white hover:bg-white/20 focus:ring-white/50'
        }`}
        aria-label="Select language"
      >
        {locales.map((loc) => (
          <option key={loc} value={loc} className="bg-gray-900 text-white">
            {languageNames[loc]}
          </option>
        ))}
      </select>
      <div className={`absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none ${
        scrolled ? 'text-gray-600' : 'text-white'
      }`}>
        <svg
          className="w-4 h-4"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  )
}

