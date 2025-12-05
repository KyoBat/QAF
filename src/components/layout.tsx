'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, Sun, Moon, Globe, BookOpen, Mail } from 'lucide-react'
import { useLocale, useTheme } from '@/components/providers'
import { Command } from '@/components/ui/command'
import { NewsletterForm } from '@/components/ui/newsletter'
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
    { href: '/about', label: t('nav.about') },
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
  const { locale, t, isRTL } = useLocale()
  const year = new Date().getFullYear()

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      {/* Newsletter Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className={cn(
          "flex flex-col md:flex-row items-center gap-6 p-6 bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl",
          isRTL && "md:flex-row-reverse"
        )}>
          <div className={cn(
            "flex-1 text-center md:text-left",
            isRTL && "md:text-right"
          )}>
            <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
              <Mail className="h-5 w-5 text-emerald-600" />
              <h3 className={cn(
                "text-lg font-semibold text-gray-900 dark:text-white",
                isRTL && "font-arabic"
              )}>
                {t('newsletter.title')}
              </h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {t('newsletter.subtitle')}
            </p>
          </div>
          <div className="w-full md:w-80">
            <NewsletterForm variant="compact" />
          </div>
        </div>
      </div>

      {/* Section Du'a */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className={cn(
          "bg-white/50 dark:bg-gray-800/50 rounded-xl p-4 text-center",
          isRTL && "font-arabic"
        )}>
          <p className={cn(
            "text-emerald-700 dark:text-emerald-400",
            locale === 'ar' ? 'text-lg leading-loose' : 'text-sm italic'
          )}>
            {locale === 'ar' 
              ? '« اللَّهُمَّ انْفَعْنِي بِمَا عَلَّمْتَنِي، وَعَلِّمْنِي مَا يَنْفَعُنِي، وَزِدْنِي عِلْمًا »'
              : locale === 'en'
              ? '"O Allah, benefit me with what You have taught me, teach me what will benefit me, and increase me in knowledge"'
              : '« Ô Allah, fais-moi bénéficier de ce que Tu m\'as enseigné, enseigne-moi ce qui me sera utile, et augmente ma science »'
            }
          </p>
        </div>
      </div>

      {/* Footer compact */}
      <div className="border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-emerald-600" />
              <span className="font-medium text-gray-700 dark:text-gray-300">{t('app.name')}</span>
            </div>

            <nav className="flex items-center gap-4">
              <Link href="/courses" className="hover:text-emerald-600 transition-colors">
                {t('nav.courses')}
              </Link>
              <Link href="/about" className="hover:text-emerald-600 transition-colors">
                {t('nav.about')}
              </Link>
            </nav>
            
            <p>{t('footer.copyright', { year })}</p>
            
            <p className="flex items-center gap-1">
              {t('footer.madeWith')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
