/**
 * Images de partage (Open Graph) — source unique des textes affichés.
 *
 * La route /api/og n'accepte plus de texte libre : elle reçoit seulement
 * lang + course (+ lesson) et reconstruit titre, sous-titre, badge et image
 * depuis les données des cours. Personne ne peut donc générer une image
 * « TahaLearn » avec un texte arbitraire, ni faire charger une image externe.
 */

import type { Locale } from '@/locales'
import { getCourseBySlug, getLesson } from '@/lib/data'

const SITE_URL = 'https://www.tahalearn.com'
const OG_LOCALES: Locale[] = ['fr', 'ar', 'en']

const CATEGORY_NAMES: Record<string, Record<Locale, string>> = {
  tajweed: { fr: 'Tajweed', ar: 'التجويد', en: 'Tajweed' },
  fiqh: { fr: 'Fiqh', ar: 'الفقه', en: 'Fiqh' },
  aqeedah: { fr: 'Aqeedah', ar: 'العقيدة', en: 'Aqeedah' },
  seerah: { fr: 'Seerah', ar: 'السيرة', en: 'Seerah' },
  hadith: { fr: 'Hadith', ar: 'الحديث', en: 'Hadith' },
  history: { fr: 'Histoire Islamique', ar: 'التاريخ الإسلامي', en: 'Islamic History' },
  spirituality: { fr: 'Spiritualité', ar: 'التزكية', en: 'Spirituality' },
}

/** Seuls des chemins locaux d'images raster sont acceptés (pas de "..", pas d'hôte). */
const SAFE_IMAGE_PATH = /^\/(?:images\/[a-z0-9/_-]+|og-image)\.(?:png|jpe?g|webp)$/i

export interface OgContent {
  title: string
  sub: string
  badge: string
  /** Chemin local validé sous public/ (ex. /images/courses/hajj.png), ou null */
  imagePath: string | null
}

export function categoryLabel(category: string, locale: Locale): string {
  return CATEGORY_NAMES[category]?.[locale] ?? category
}

export function courseBadge(lessonsCount: number, locale: Locale): string {
  const plural = lessonsCount > 1 ? 's' : ''
  if (locale === 'ar') return `${lessonsCount} درس مجاني`
  if (locale === 'en') return `${lessonsCount} free lesson${plural}`
  return `${lessonsCount} leçon${plural} gratuite${plural}`
}

export function lessonBadge(lessonNumber: number, totalLessons: number, locale: Locale): string {
  return locale === 'ar'
    ? `درس ${lessonNumber} / ${totalLessons}`
    : `Lesson ${lessonNumber} / ${totalLessons}`
}

/** Image raster du cours (les SVG ont un équivalent PNG), si le chemin est sûr. */
export function safeCourseImagePath(image: string | undefined | null): string | null {
  const path = (image ?? '/og-image.png').replace(/\.svg$/, '.png')
  return SAFE_IMAGE_PATH.test(path) ? path : null
}

/** URL de l'image de partage d'un cours ou d'une leçon. */
export function ogImageUrl(locale: Locale, courseSlug: string, lessonId?: string): string {
  const params = new URLSearchParams({ lang: locale, course: courseSlug })
  if (lessonId) params.set('lesson', lessonId)
  return `${SITE_URL}/api/og?${params.toString()}`
}

export function parseOgLocale(value: string | null): Locale {
  return OG_LOCALES.includes(value as Locale) ? (value as Locale) : 'fr'
}

/** Reconstruit les textes depuis les données ; null si cours/leçon inconnu. */
export async function resolveOgContent(
  locale: Locale,
  courseSlug: string | null,
  lessonId: string | null,
): Promise<OgContent | null> {
  if (!courseSlug) return null

  if (lessonId) {
    const data = await getLesson(courseSlug, lessonId)
    if (!data) return null
    return {
      title: data.lesson.title[locale] ?? data.lesson.title.fr,
      sub: data.course.title[locale] ?? data.course.title.fr,
      badge: lessonBadge(data.lessonNumber, data.totalLessons, locale),
      imagePath: safeCourseImagePath(data.course.image),
    }
  }

  const course = await getCourseBySlug(courseSlug)
  if (!course) return null
  return {
    title: course.title[locale] ?? course.title.fr,
    sub: categoryLabel(course.category, locale),
    badge: courseBadge(course.lessons.length, locale),
    imagePath: safeCourseImagePath(course.image),
  }
}
