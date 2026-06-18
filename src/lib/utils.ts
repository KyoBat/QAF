import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import type { Locale } from '@/locales'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/** Prefix a path with a locale segment, e.g. localePath('ar', '/courses') → '/ar/courses' */
export function localePath(locale: Locale, path: string): string {
  const cleanPath = path.startsWith('/') ? path : `/${path}`
  return `/${locale}${cleanPath}`
}

/** Build the hreflang alternates block for metadata */
export function buildHreflangAlternates(
  pathWithoutLang: string,
  defaultLocale: Locale = 'fr'
): Record<string, string> {
  const base = 'https://www.tahalearn.com'
  // Empty string must stay empty (not become '/') to avoid trailing-slash redirects on home page
  const clean = pathWithoutLang === '' ? '' : pathWithoutLang.startsWith('/') ? pathWithoutLang : `/${pathWithoutLang}`
  return {
    fr: `${base}/fr${clean}`,
    ar: `${base}/ar${clean}`,
    en: `${base}/en${clean}`,
    'x-default': `${base}/${defaultLocale}${clean}`,
  }
}

export function formatDuration(minutes: number): string {
  if (minutes < 60) {
    return `${minutes} min`
  }
  const hours = Math.floor(minutes / 60)
  const remainingMinutes = minutes % 60
  if (remainingMinutes === 0) {
    return `${hours}h`
  }
  return `${hours}h ${remainingMinutes}min`
}

export function slugify(text: string): string {
  return text
    .toString()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Remove diacritics
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/[^\w\-]+/g, '') // Remove all non-word chars
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, '') // Trim - from end of text
}

export function truncate(text: string, length: number): string {
  if (text.length <= length) {
    return text
  }
  return text.slice(0, length).trim() + '...'
}
