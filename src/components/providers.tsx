'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { useLocaleStore, useThemeStore } from '@/lib/store'
import { locales, getTranslation, interpolate, type Locale } from '@/locales'
import { ToastProvider } from '@/components/ui/toast'
import { OnboardingModal } from '@/components/ui/onboarding'

// Theme Provider
interface ThemeContextType {
  theme: 'light' | 'dark'
  setTheme: (theme: 'light' | 'dark' | 'system') => void
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | null>(null)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const { theme: themePreference, setTheme } = useThemeStore()
  const [theme, setResolvedTheme] = useState<'light' | 'dark'>('light')

  useEffect(() => {
    const updateTheme = () => {
      let resolved: 'light' | 'dark' = 'light'
      
      if (themePreference === 'system') {
        resolved = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
      } else {
        resolved = themePreference
      }
      
      setResolvedTheme(resolved)
      document.documentElement.classList.toggle('dark', resolved === 'dark')
    }

    updateTheme()
    
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    mediaQuery.addEventListener('change', updateTheme)
    
    return () => mediaQuery.removeEventListener('change', updateTheme)
  }, [themePreference])

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) throw new Error('useTheme must be used within ThemeProvider')
  return context
}

// Locale Provider
interface LocaleContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (key: string, params?: Record<string, string | number>) => string
  dir: 'ltr' | 'rtl'
  isRTL: boolean
}

const LocaleContext = createContext<LocaleContextType | null>(null)

export function LocaleProvider({ children, initialLocale }: { children: React.ReactNode; initialLocale?: Locale }) {
  const { locale, setLocale } = useLocaleStore()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Sync URL-based locale into Zustand store on first mount
    if (initialLocale && initialLocale !== locale) {
      setLocale(initialLocale)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (mounted) {
      document.documentElement.lang = locale
      document.documentElement.dir = locales[locale].dir
    }
  }, [locale, mounted])

  // During SSR and before hydration, use initialLocale (from URL) so the
  // server-rendered HTML matches the requested language.
  const activeLocale = mounted ? locale : (initialLocale ?? 'fr')

  const t = (key: string, params?: Record<string, string | number>) => {
    const text = getTranslation(activeLocale, key)
    return params ? interpolate(text, params) : text
  }

  const dir = locales[activeLocale].dir
  const isRTL = dir === 'rtl'

  return (
    <LocaleContext.Provider value={{ locale: activeLocale, setLocale, t, dir, isRTL }}>
      {children}
    </LocaleContext.Provider>
  )
}

export function useLocale() {
  const context = useContext(LocaleContext)
  if (!context) throw new Error('useLocale must be used within LocaleProvider')
  return context
}

// Combined Providers
export function Providers({ children, initialLocale }: { children: React.ReactNode; initialLocale?: Locale }) {
  return (
    <ThemeProvider>
      <LocaleProvider initialLocale={initialLocale}>
        <ToastProvider>
          {children}
          <OnboardingModal />
        </ToastProvider>
      </LocaleProvider>
    </ThemeProvider>
  )
}
