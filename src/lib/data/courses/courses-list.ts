/**
 * Données légères pour la liste des cours (sans contenu des leçons)
 * Utilisé pour la page /courses afin de réduire le bundle size
 */

import type { Course } from './types'
import { coursesData } from './index'

// Type léger sans le contenu des leçons
export interface CourseListItem {
  id: string
  slug: string
  title: { fr: string; ar: string; en: string }
  description: { fr: string; ar: string; en: string }
  category: Course['category']
  level: Course['level']
  duration: string
  lessonsCount: number
  published: boolean
  featured: boolean
  tags: string[]
  image?: string
}

// Transformer les cours en version légère (sans contenu)
export function getCoursesListData(): CourseListItem[] {
  return coursesData
    .filter(course => course.published)
    .map(course => ({
      id: course.id,
      slug: course.slug,
      title: course.title,
      description: course.description,
      category: course.category,
      level: course.level,
      duration: course.duration,
      lessonsCount: course.lessons.length,
      published: course.published,
      featured: course.featured,
      tags: course.tags,
      image: course.image,
    }))
}

// Version pré-calculée pour éviter le recalcul
let cachedCoursesListData: CourseListItem[] | null = null

export function getCachedCoursesListData(): CourseListItem[] {
  if (!cachedCoursesListData) {
    cachedCoursesListData = getCoursesListData()
  }
  return cachedCoursesListData
}
