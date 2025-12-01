/**
 * Cours: Les Bases du Fiqh des Adorations
 * Métadonnées du cours
 */

import { CourseMeta } from '../types'

export const fiqhMeta: CourseMeta = {
  id: 'course-002',
  slug: 'bases-fiqh-ibadat',
  title: {
    fr: 'Les Bases du Fiqh des Adorations',
    ar: 'أساسيات فقه العبادات',
    en: 'Fundamentals of Fiqh Al-Ibadat',
  },
  description: {
    fr: 'Découvrez les règles essentielles de la purification, de la prière, du jeûne et de la zakat selon les quatre écoles juridiques.',
    ar: 'اكتشف القواعد الأساسية للطهارة والصلاة والصيام والزكاة وفق المذاهب الأربعة.',
    en: 'Discover the essential rules of purification, prayer, fasting, and zakat according to the four schools of jurisprudence.',
  },
  category: 'fiqh',
  level: 'beginner',
  duration: '8h 00min',
  instructor: 'Sheikh Muhammad Al-Faqih',
  image: '/images/courses/fiqh-ibadat.jpg',
  tags: ['fiqh', 'prayer', 'purification', 'worship'],
  featured: true,
  published: true,
  resources: [
    {
      type: 'pdf',
      title: 'Manuel de Fiqh Al-Ibadat',
      url: '/resources/fiqh-ibadat-manual.pdf',
    },
  ],
  createdAt: '2025-01-20T00:00:00.000Z',
  updatedAt: '2025-01-20T00:00:00.000Z',
}
