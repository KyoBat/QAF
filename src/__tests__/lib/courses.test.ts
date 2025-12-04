/**
 * Tests for Course Data utilities
 */
import { describe, it, expect } from 'vitest'
import { 
  coursesData, 
  getCourseBySlug, 
  getCourseById,
  getPublishedCourses,
  getFeaturedCourses,
} from '@/lib/data/courses/index'
import type { Course, Lesson } from '@/lib/data/courses/types'

describe('Course Data', () => {
  describe('coursesData', () => {
    it('should contain courses', () => {
      expect(coursesData).toBeDefined()
      expect(Array.isArray(coursesData)).toBe(true)
      expect(coursesData.length).toBeGreaterThan(0)
    })

    it('each course should have required fields', () => {
      coursesData.forEach((course: Course) => {
        expect(course.id).toBeDefined()
        expect(course.slug).toBeDefined()
        expect(course.title).toBeDefined()
        expect(course.title.fr).toBeDefined()
        expect(course.title.ar).toBeDefined()
        expect(course.title.en).toBeDefined()
        expect(course.description).toBeDefined()
        expect(course.category).toBeDefined()
        expect(course.level).toBeDefined()
        expect(course.lessons).toBeDefined()
        expect(Array.isArray(course.lessons)).toBe(true)
      })
    })
  })

  describe('getCourseBySlug', () => {
    it('should find a course by slug', () => {
      const course = getCourseBySlug('introduction-tajweed')
      expect(course).toBeDefined()
      expect(course?.slug).toBe('introduction-tajweed')
    })

    it('should return undefined for unknown slug', () => {
      const course = getCourseBySlug('unknown-course')
      expect(course).toBeUndefined()
    })

    it('should handle legacy slug aliases', () => {
      const course = getCourseBySlug('bases-fiqh-ibadat')
      expect(course).toBeDefined()
    })
  })

  describe('getCourseById', () => {
    it('should find a course by id', () => {
      const firstCourse = coursesData[0]
      const course = getCourseById(firstCourse.id)
      expect(course).toBeDefined()
      expect(course?.id).toBe(firstCourse.id)
    })

    it('should return undefined for unknown id', () => {
      const course = getCourseById('unknown-id')
      expect(course).toBeUndefined()
    })
  })

  describe('getPublishedCourses', () => {
    it('should return only published courses', () => {
      const published = getPublishedCourses()
      expect(Array.isArray(published)).toBe(true)
      published.forEach((course: Course) => {
        expect(course.published).toBe(true)
      })
    })
  })

  describe('getFeaturedCourses', () => {
    it('should return only featured courses', () => {
      const featured = getFeaturedCourses()
      expect(Array.isArray(featured)).toBe(true)
      featured.forEach((course: Course) => {
        expect(course.featured).toBe(true)
      })
    })
  })
})

describe('Lesson Data', () => {
  it('each lesson should have required fields', () => {
    coursesData.forEach((course: Course) => {
      course.lessons.forEach((lesson: Lesson) => {
        expect(lesson.id).toBeDefined()
        expect(lesson.title).toBeDefined()
        expect(lesson.title.fr).toBeDefined()
        expect(lesson.title.ar).toBeDefined()
        expect(lesson.content).toBeDefined()
        expect(lesson.content.fr).toBeDefined()
        expect(lesson.content.ar).toBeDefined()
      })
    })
  })

  it('lesson content should not be empty', () => {
    coursesData.forEach((course: Course) => {
      course.lessons.forEach((lesson: Lesson) => {
        expect(lesson.content.fr.length).toBeGreaterThan(10)
        expect(lesson.content.ar.length).toBeGreaterThan(10)
      })
    })
  })
})
