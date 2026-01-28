/**
 * @deprecated This file is deprecated. Use @/lib/data/courses/types instead.
 * Legacy types maintained for backward compatibility only.
 * 
 * For new code, import from:
 * import type { Course, Lesson, Resource, Locale } from '@/lib/data/courses/types'
 */

export interface Course {
  id: string
  slug: string
  category: 'quran' | 'fiqh' | 'aqeedah' | 'hadith' | 'seerah'
  level: 'beginner' | 'intermediate' | 'advanced'
  title: { fr: string; ar: string; en: string }
  description: { fr: string; ar: string; en: string }
  instructor: string
  image?: string
  lessonsCount: number
  duration: string
  lessons: Lesson[]
}

export interface Lesson {
  id: string
  title: { fr: string; ar: string; en: string }
  duration: string
  content: { fr: string; ar: string; en: string }
  audioUrl?: string
  videoUrl?: string
  resources?: Resource[]
}

export interface Resource {
  title: string
  url: string
  type: 'pdf' | 'audio' | 'video' | 'link'
}

export type Locale = 'fr' | 'ar' | 'en'
export type Category = Course['category']
export type Level = Course['level']
