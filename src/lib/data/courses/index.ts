/**
 * Export centralisé de tous les cours
 * Point d'entrée unique pour accéder aux données des cours
 */

import { Course } from './types'
import { tajweedCourse } from './tajweed'
import { fiqhPurificationCourse, fiqhSalatCourse, fiqhSalawatKhassaCourse, fiqhZakatCourse } from './fiqh'
import { aqeedahCourse } from './aqeedah'
import { aqeedahAdvancedCourse } from './aqeedah-advanced'
import { sectesRefutationsCourse } from './sectes-refutations'
import { fiqhMuamalatCourse } from './fiqh-muamalat'
import { fiqhFamilleCourse } from './fiqh-famille'
import { usulFiqhCourse } from './usul-al-fiqh'
import { seerahModule1Course } from './seerah-module-1'
import { seerahModule2Course } from './seerah-module-2'
import { seerahModule3Course } from './seerah-module-3'
import { seerahModule4Course } from './seerah-module-4'
import { seerahModule5Course } from './seerah-module-5'
import { hadithCourse } from './hadith'
import { siyamCourse } from './siyam'
import { hajjCourse } from './hajj'
import { historyImamsCourse } from './history'
import { historyCompanionsCourse } from './history-companions'
import { historyHeroinesCourse } from './history-heroines'
import { adiaModule1Course, adiaModule2Course, adiaModule3Course, adiaModule4Course } from './adia'

// Export des types
export * from './types'

// Export des cours individuels
export { tajweedCourse } from './tajweed'
export { fiqhPurificationCourse, fiqhSalatCourse, fiqhSalawatKhassaCourse, fiqhZakatCourse } from './fiqh'
export { aqeedahCourse } from './aqeedah'
export { aqeedahAdvancedCourse } from './aqeedah-advanced'
export { sectesRefutationsCourse } from './sectes-refutations'
export { fiqhMuamalatCourse } from './fiqh-muamalat'
export { fiqhFamilleCourse } from './fiqh-famille'
export { usulFiqhCourse } from './usul-al-fiqh'
export { seerahModule1Course } from './seerah-module-1'
export { seerahModule2Course } from './seerah-module-2'
export { seerahModule3Course } from './seerah-module-3'
export { seerahModule4Course } from './seerah-module-4'
export { seerahModule5Course } from './seerah-module-5'
export { hadithCourse } from './hadith'
export { siyamCourse } from './siyam'
export { hajjCourse } from './hajj'
export { historyImamsCourse } from './history'
export { historyCompanionsCourse } from './history-companions'
export { historyHeroinesCourse } from './history-heroines'
export { adiaModule1Course, adiaModule2Course, adiaModule3Course, adiaModule4Course } from './adia'

// Export de la liste complète des cours
export const coursesData: Course[] = [
  adiaModule1Course,
  adiaModule2Course,
  adiaModule3Course,
  adiaModule4Course,
  hadithCourse,
  historyImamsCourse,
  historyCompanionsCourse,
  historyHeroinesCourse,
  tajweedCourse,
  fiqhPurificationCourse,
  fiqhSalatCourse,
  fiqhSalawatKhassaCourse,
  fiqhZakatCourse,
  aqeedahCourse,
  aqeedahAdvancedCourse,
  sectesRefutationsCourse,
  fiqhMuamalatCourse,
  fiqhFamilleCourse,
  usulFiqhCourse,
  seerahModule1Course,
  seerahModule2Course,
  seerahModule3Course,
  seerahModule4Course,
  seerahModule5Course,
  siyamCourse,
  hajjCourse,
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
