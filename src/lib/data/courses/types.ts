/**
 * Types partagés pour la structure modulaire des cours
 */

export type Locale = 'fr' | 'ar' | 'en'

export interface LocalizedString {
  fr: string
  ar: string
  en: string
}

export interface Resource {
  type: 'pdf' | 'video' | 'audio' | 'article' | 'link'
  title: string
  url: string
  description?: string
}

/**
 * Structure de données pour les Mind Maps
 */
export interface MindMapData {
  id: string
  label: string
  labelAr?: string
  children?: MindMapData[]
  color?: string
  icon?: string
}

export interface LessonMindMap {
  id: string
  title: LocalizedString
  data: MindMapData
}

export interface LessonMeta {
  id: string
  duration: string
  order: number
  videoUrl?: string
  mindmaps?: LessonMindMap[]
}

export interface LessonContent {
  title: LocalizedString
  content: LocalizedString
}

export interface Lesson extends LessonMeta, LessonContent {}

export interface LessonSection {
  id: string
  title: LocalizedString
  description?: LocalizedString
  lessonIds: string[]
}

export interface CourseMeta {
  id: string
  slug: string
  title: LocalizedString
  description: LocalizedString
  category: 'tajweed' | 'fiqh' | 'aqeedah' | 'seerah' | 'hadith' | 'quran' | 'arabic' | 'tafsir' | 'history' | 'other'
  level: 'beginner' | 'intermediate' | 'advanced'
  duration: string
  instructor: string
  image: string
  tags: string[]
  featured: boolean
  published: boolean
  resources: Resource[]
  createdAt: string
  updatedAt: string
}

export interface Course extends CourseMeta {
  lessons: Lesson[]
  sections?: LessonSection[]
}
