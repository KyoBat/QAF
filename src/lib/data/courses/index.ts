/**
 * Export centralisé de tous les cours
 * Point d'entrée unique pour accéder aux données des cours
 */

import { Course } from './types'
import { tajweedCourse } from './tajweed'
import { fiqhPurificationCourse, fiqhSalatCourse } from './fiqh'
import { aqeedahCourse } from './aqeedah'
import { aqeedah2Course } from './aqeedah-2'
import { seerahCourse } from './seerah'
import { hadithCourse } from './hadith'

// Export des types
export * from './types'

// Export des cours individuels
export { tajweedCourse } from './tajweed'
export { fiqhPurificationCourse, fiqhSalatCourse } from './fiqh'
export { aqeedahCourse } from './aqeedah'
export { aqeedah2Course } from './aqeedah-2'
export { seerahCourse } from './seerah'
export { hadithCourse } from './hadith'

// Export de la liste complète des cours
export const coursesData: Course[] = [
  tajweedCourse,
  fiqhPurificationCourse,
  fiqhSalatCourse,
  aqeedahCourse,
  aqeedah2Course,
  seerahCourse,
  hadithCourse,
]

const legacySlugAliases: Record<string, string> = {
  'bases-fiqh-ibadat': fiqhPurificationCourse.slug,
}

// Utilitaires pour accéder aux cours
export function getCourseBySlug(slug: string): Course | undefined {
  const normalizedSlug = legacySlugAliases[slug] ?? slug
  return coursesData.find((course) => course.slug === normalizedSlug)
}

export function getCourseById(id: string): Course | undefined {
  return coursesData.find((course) => course.id === id)
}

export function getCoursesByCategory(category: Course['category']): Course[] {
  return coursesData.filter((course) => course.category === category)
}

export function getFeaturedCourses(): Course[] {
  return coursesData.filter((course) => course.featured)
}

export function getPublishedCourses(): Course[] {
  return coursesData.filter((course) => course.published)
}
