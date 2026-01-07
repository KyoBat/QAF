/**
 * Schémas de validation Zod pour les cours
 * Validation stricte de toutes les données
 */

import { z } from 'zod'

// Resource Schema
export const CourseResourceSchema = z.object({
  type: z.enum(['video', 'article', 'pdf', 'link', 'audio']),
  title: z.string().min(1, 'Le titre est requis'),
  url: z.string().url('URL invalide'),
  description: z.string().optional(),
})

// Course Level
export const CourseLevelSchema = z.enum(['beginner', 'intermediate', 'advanced'])

// Course Category (Islamic sciences)
export const CourseCategorySchema = z.enum([
  'quran',      // القرآن الكريم
  'tajweed',    // التجويد
  'tafsir',     // التفسير
  'hadith',     // الحديث
  'fiqh',       // الفقه
  'aqeedah',    // العقيدة
  'seerah',     // السيرة
  'arabic',     // اللغة العربية
  'history',    // التاريخ الإسلامي
  'spirituality', // الروحانيات (invocations, dhikr, etc.)
  'other',      // أخرى
])

// Lesson Schema
export const LessonSchema = z.object({
  id: z.string().min(1),
  title: z.object({
    fr: z.string().min(1),
    ar: z.string().min(1),
    en: z.string().min(1),
  }),
  duration: z.string(), // e.g., "30 min"
  content: z.object({
    fr: z.string(),
    ar: z.string(),
    en: z.string(),
  }),
  videoUrl: z.string().url().optional(),
  audioUrl: z.string().url().optional(),
  resources: z.array(CourseResourceSchema).optional(),
  order: z.number().int().positive(),
})

export const LessonSectionSchema = z.object({
  id: z.string().min(1),
  title: z.object({
    fr: z.string().min(1),
    ar: z.string().min(1),
    en: z.string().min(1),
  }),
  description: z.object({
    fr: z.string(),
    ar: z.string(),
    en: z.string(),
  }).optional(),
  lessonIds: z.array(z.string().min(1)).min(1),
})

// Full Course Schema
export const CourseSchema = z.object({
  id: z.string().min(1, 'ID requis'),
  slug: z.string().min(1, 'Slug requis'),
  title: z.object({
    fr: z.string().min(1, 'Titre français requis').max(200),
    ar: z.string().min(1, 'Titre arabe requis').max(200),
    en: z.string().min(1, 'Titre anglais requis').max(200),
  }),
  description: z.object({
    fr: z.string().min(10, 'Description trop courte').max(1000),
    ar: z.string().min(10, 'Description trop courte').max(1000),
    en: z.string().min(10, 'Description trop courte').max(1000),
  }),
  category: CourseCategorySchema,
  level: CourseLevelSchema,
  duration: z.string(), // Total duration e.g., "4h 30min"
  instructor: z.string().min(1, 'Instructeur requis'),
  image: z.string().optional(),
  tags: z.array(z.string()).default([]),
  resources: z.array(CourseResourceSchema).default([]),
  lessons: z.array(LessonSchema).default([]),
  published: z.boolean().default(false),
  featured: z.boolean().default(false),
  createdAt: z.string().datetime().optional(),
  updatedAt: z.string().datetime().optional(),
  sections: z.array(LessonSectionSchema).optional(),
})

// Partial schemas for forms/updates
export const CourseCreateSchema = CourseSchema.omit({ 
  id: true, 
  createdAt: true, 
  updatedAt: true 
})

export const CourseUpdateSchema = CourseSchema.partial().required({ id: true })

// Course filters schema
export const CourseFiltersSchema = z.object({
  category: CourseCategorySchema.optional(),
  level: CourseLevelSchema.optional(),
  search: z.string().optional(),
  tags: z.array(z.string()).optional(),
})

// Type exports
export type CourseResource = z.infer<typeof CourseResourceSchema>
export type CourseLevel = z.infer<typeof CourseLevelSchema>
export type CourseCategory = z.infer<typeof CourseCategorySchema>
export type Lesson = z.infer<typeof LessonSchema>
export type LessonSection = z.infer<typeof LessonSectionSchema>
export type Course = z.infer<typeof CourseSchema>
export type CourseCreate = z.infer<typeof CourseCreateSchema>
export type CourseUpdate = z.infer<typeof CourseUpdateSchema>
export type CourseFilters = z.infer<typeof CourseFiltersSchema>

// Validation helpers
export function validateCourse(data: unknown): Course {
  return CourseSchema.parse(data)
}

export function validateCoursePartial(data: unknown): Partial<Course> {
  return CourseSchema.partial().parse(data)
}

export function safeParseCourse(data: unknown) {
  return CourseSchema.safeParse(data)
}
