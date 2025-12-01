/**
 * Export centralisé de tous les cours
 * Point d'entrée unique pour accéder aux données des cours
 */

import { Course } from './types'
import { tajweedCourse } from './tajweed'
import { fiqhCourse } from './fiqh'
import { aqeedahCourse } from './aqeedah'
import { seerahCourse } from './seerah'
import { hadithCourse } from './hadith'

// Export des types
export * from './types'

// Export des cours individuels
export { tajweedCourse } from './tajweed'
export { fiqhCourse } from './fiqh'
export { aqeedahCourse } from './aqeedah'
export { seerahCourse } from './seerah'
export { hadithCourse } from './hadith'

// Export de la liste complète des cours
export const coursesData: Course[] = [
  tajweedCourse,
  fiqhCourse,
  aqeedahCourse,
  seerahCourse,
  hadithCourse,
]

// Utilitaires pour accéder aux cours
export function getCourseBySlug(slug: string): Course | undefined {
  return coursesData.find((course) => course.slug === slug)
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
