'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, Sun, Moon, Globe, BookOpen } from 'lucide-react'
import { useLocale, useTheme } from '@/components/providers'
import { Command } from '@/components/ui/command'
import { locales, type Locale } from '@/locales'
import { cn } from '@/lib/utils'
import { coursesData } from '@/lib/data/courses/index'

// Prepare courses data for Command search
const commandCourses = coursesData.map(course => ({
  slug: course.slug,
  title: course.title,
  description: course.description,
  lessons: course.lessons.map(lesson => ({
    id: lesson.id,
    title: lesson.title,
  })),
}))

export function Header() {
  const { locale, setLocale, t, isRTL } = useLocale()
  const { theme, toggleTheme } = useTheme()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLangOpen, setIsLangOpen] = useState(false)

  const navLinks = [
    { href: '/', label: t('nav.home') },
    { href: '/courses', label: t('nav.courses') },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-emerald-600 text-white px-4 py-2 rounded-lg z-50"
      >
        {t('accessibility.skipToContent')}
      </a>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center group-hover:bg-emerald-700 transition-colors">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <span className="font-bold text-lg text-gray-900 dark:text-white hidden sm:block">
              {t('app.name')}
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-1">
            {/* Search Command */}
            <Command courses={commandCourses} />

            {/* Theme */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label={theme === 'dark' ? t('accessibility.lightMode') : t('accessibility.darkMode')}
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-gray-400" />
              ) : (
                <Moon className="w-5 h-5 text-gray-600" />
              )}
            </button>

            {/* Language */}
            <div className="relative">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-1 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label={t('accessibility.changeLanguage')}
              >
                <Globe className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  {locale.toUpperCase()}
                </span>
              </button>

              {isLangOpen && (
                <>
                  <div className="fixed inset-0" onClick={() => setIsLangOpen(false)} />
                  <div className={cn(
                    "absolute mt-2 w-40 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 py-1 z-50",
                    isRTL ? "left-0" : "right-0"
                  )}>
                    {(Object.keys(locales) as Locale[]).map((loc) => (
                      <button
                        key={loc}
                        onClick={() => {
                          setLocale(loc)
                          setIsLangOpen(false)
                        }}
                        className={cn(
                          'w-full px-4 py-2 text-left flex items-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-700',
                          locale === loc && 'bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600'
                        )}
                      >
                        <span>{locales[loc].nativeName}</span>
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Mobile menu */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
              aria-label={isMenuOpen ? t('accessibility.closeMenu') : t('accessibility.openMenu')}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
          <nav className="max-w-7xl mx-auto px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="block px-4 py-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}

export function Footer() {
  const { locale, t } = useLocale()
  const year = new Date().getFullYear()

  // Textes multilingues pour le message de sadaqa jariya
  const sadaqaMessage = {
    ar: 'هذا المشروع مجاني ابتغاء وجه الله. إن أردتم دعمه، ادعوا لنا ولوالدينا ولجميع المسلمين',
    en: 'This project is free, seeking only the pleasure of Allah. If you wish to support it, make du\'a for us, our parents, and all Muslims',
    fr: 'Ce projet est gratuit, uniquement pour l\'agrément d\'Allah. Si vous souhaitez le soutenir, faites une du\'a pour nous, nos parents et tous les musulmans',
  }

  // Du'a - Hadiths authentiques
  const duaText = {
    ar: '« اللَّهُمَّ إِنِّي أَعُوذُ بِكَ أَنْ أُشْرِكَ بِكَ وَأَنَا أَعْلَمُ، وَأَسْتَغْفِرُكَ لِمَا لَا أَعْلَمُ »\n« اللَّهُمَّ انْفَعْنِي بِمَا عَلَّمْتَنِي، وَعَلِّمْنِي مَا يَنْفَعُنِي، وَزِدْنِي عِلْمًا »',
    en: '"O Allah, I seek refuge in You from associating anything with You knowingly, and I seek Your forgiveness for what I do not know"\n"O Allah, benefit me with what You have taught me, teach me what will benefit me, and increase me in knowledge"',
    fr: '« Ô Allah, je cherche refuge auprès de Toi contre le fait de T\'associer quoi que ce soit sciemment, et je Te demande pardon pour ce que j\'ignore »\n« Ô Allah, fais-moi bénéficier de ce que Tu m\'as enseigné, enseigne-moi ce qui me sera utile, et augmente ma science »',
  }

  const duaSource = {
    ar: 'صحيح الأدب المفرد • صحيح الترمذي',
    en: 'Sahih Al-Adab Al-Mufrad • Sahih At-Tirmidhi',
    fr: 'Sahih Al-Adab Al-Mufrad • Sahih At-Tirmidhi',
  }

  const lang = locale as keyof typeof sadaqaMessage

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Section Sadaqa Jariya */}
        <div className="text-center mb-8 pb-6 border-b border-gray-200 dark:border-gray-700">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-full mb-4">
            <span className="text-2xl">🤲</span>
          </div>
          <p className="text-gray-600 dark:text-gray-400 mb-4 max-w-2xl mx-auto">
            {sadaqaMessage[lang]}
          </p>
          <blockquote className="bg-emerald-50 dark:bg-emerald-900/20 rounded-xl p-4 max-w-2xl mx-auto border border-emerald-200 dark:border-emerald-800">
            <p className={`text-emerald-800 dark:text-emerald-300 font-medium ${locale === 'ar' ? 'text-xl font-arabic' : 'text-base italic'}`} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
              {duaText[lang]}
            </p>
            <cite className="block mt-2 text-sm text-emerald-600 dark:text-emerald-400">
              — {duaSource[lang]}
            </cite>
          </blockquote>
        </div>

        {/* Footer classique */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-emerald-600" />
            <span className="font-semibold text-gray-900 dark:text-white">{t('app.name')}</span>
          </div>
          
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {t('footer.copyright', { year })}
          </p>
          
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {t('footer.madeWith')}
          </p>
        </div>
      </div>
    </footer>
  )
}
