/**
 * Cours: Introduction aux Sciences du Hadith
 * Métadonnées du cours
 */

import { CourseMeta } from '../types'

export const hadithMeta: CourseMeta = {
  id: 'course-005',
  slug: 'sciences-hadith',
  title: {
    fr: 'Introduction aux Sciences du Hadith',
    ar: 'مقدمة في علوم الحديث',
    en: 'Introduction to Hadith Sciences',
  },
  description: {
    fr: 'Découvrez la méthodologie des savants du Hadith pour authentifier les paroles du Prophète ﷺ et comprendre la classification des hadiths.',
    ar: 'اكتشف منهجية علماء الحديث في تصحيح أقوال النبي ﷺ وفهم تصنيف الأحاديث.',
    en: 'Discover the methodology of Hadith scholars in authenticating the sayings of the Prophet ﷺ and understanding hadith classification.',
  },
  category: 'hadith',
  level: 'intermediate',
  duration: '7h 30min',
  instructor: 'Sheikh Khalid Al-Muhaddith',
  image: '/images/courses/hadith.svg',
  tags: ['hadith', 'isnad', 'authentication', 'sciences'],
  featured: false,
  published: false, // En cours de préparation
  resources: [],
  createdAt: '2025-03-01T00:00:00.000Z',
  updatedAt: '2025-03-01T00:00:00.000Z',
}
