/**
 * Gestion des données des cours
 * Récupération et manipulation des cours depuis les fichiers
 */

import { Course, CourseFilters, CourseCategory, CourseLevel } from '@/lib/schemas'
import { coursesData } from './courses-data'

// Get all published courses
export async function getAllCourses(): Promise<Course[]> {
  // In production, this could read from markdown files or database
  return coursesData.filter(course => course.published)
}

// Get course by ID
export async function getCourseById(id: string): Promise<Course | null> {
  const course = coursesData.find(c => c.id === id)
  return course && course.published ? course : null
}

// Get course by slug
export async function getCourseBySlug(slug: string): Promise<Course | null> {
  const course = coursesData.find(c => c.slug === slug)
  return course && course.published ? course : null
}

// Get courses by category
export async function getCoursesByCategory(category: CourseCategory): Promise<Course[]> {
  return coursesData.filter(c => c.category === category && c.published)
}

// Get courses by level
export async function getCoursesByLevel(level: CourseLevel): Promise<Course[]> {
  return coursesData.filter(c => c.level === level && c.published)
}

// Get featured courses
export async function getFeaturedCourses(): Promise<Course[]> {
  return coursesData.filter(c => c.featured && c.published)
}

// Filter courses
export async function filterCourses(filters: CourseFilters): Promise<Course[]> {
  let courses = await getAllCourses()
  
  if (filters.category) {
    courses = courses.filter(c => c.category === filters.category)
  }
  
  if (filters.level) {
    courses = courses.filter(c => c.level === filters.level)
  }
  
  if (filters.search) {
    const searchLower = filters.search.toLowerCase()
    courses = courses.filter(c => 
      c.title.fr.toLowerCase().includes(searchLower) ||
      c.title.ar.includes(filters.search!) ||
      c.title.en.toLowerCase().includes(searchLower) ||
      c.description.fr.toLowerCase().includes(searchLower) ||
      c.description.en.toLowerCase().includes(searchLower) ||
      c.tags.some(tag => tag.toLowerCase().includes(searchLower))
    )
  }
  
  if (filters.tags && filters.tags.length > 0) {
    courses = courses.filter(c => 
      filters.tags!.some(tag => c.tags.includes(tag))
    )
  }
  
  return courses
}

// Get all categories with counts
export async function getCategoriesWithCounts(): Promise<{ category: CourseCategory; count: number }[]> {
  const courses = await getAllCourses()
  const categories: CourseCategory[] = ['quran', 'tajweed', 'tafsir', 'hadith', 'fiqh', 'aqeedah', 'seerah', 'spirituality', 'arabic', 'history', 'other']
  
  return categories.map(category => ({
    category,
    count: courses.filter(c => c.category === category).length
  })).filter(c => c.count > 0)
}

// Get lesson by course and lesson ID
export async function getLesson(courseSlug: string, lessonId: string) {
  const course = await getCourseBySlug(courseSlug)
  if (!course) return null
  
  const lesson = course.lessons.find(l => l.id === lessonId)
  if (!lesson) return null
  
  const lessonIndex = course.lessons.findIndex(l => l.id === lessonId)
  const prevLesson = lessonIndex > 0 ? course.lessons[lessonIndex - 1] : null
  const nextLesson = lessonIndex < course.lessons.length - 1 ? course.lessons[lessonIndex + 1] : null
  
  return {
    lesson,
    course,
    prevLesson,
    nextLesson,
    lessonNumber: lessonIndex + 1,
    totalLessons: course.lessons.length
  }
}

// Get all unique tags
export async function getAllTags(): Promise<string[]> {
  const courses = await getAllCourses()
  const tags = new Set<string>()
  courses.forEach(course => course.tags.forEach(tag => tags.add(tag)))
  return Array.from(tags).sort()
}
