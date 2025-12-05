/**
 * Cours: La Seerah du Prophète ﷺ
 * Métadonnées du cours
 */

import { CourseMeta } from '../types'

export const seerahMeta: CourseMeta = {
  id: 'course-004',
  slug: 'seerah-nabawiyya',
  title: {
    fr: 'La Seerah du Prophète ﷺ',
    ar: 'السيرة النبوية',
    en: 'The Prophetic Biography',
  },
  description: {
    fr: "Parcourez la vie du Prophète Muhammad ﷺ, de sa naissance à La Mecque jusqu'à l'établissement de l'État islamique à Médine.",
    ar: 'تعرف على حياة النبي محمد ﷺ من مولده في مكة حتى تأسيس الدولة الإسلامية في المدينة.',
    en: 'Journey through the life of Prophet Muhammad ﷺ, from his birth in Mecca to the establishment of the Islamic state in Medina.',
  },
  category: 'seerah',
  level: 'intermediate',
  duration: '12h 00min',
  instructor: 'Dr. Yasir Al-Siyari',
  image: '/images/courses/seerah.svg',
  tags: ['seerah', 'prophet', 'history', 'biography'],
  featured: false,
  published: false, // En cours de préparation
  resources: [
    {
      type: 'article',
      title: 'Chronologie de la Seerah',
      url: 'https://example.com/seerah-timeline',
      description: 'Frise chronologique interactive',
    },
  ],
  createdAt: '2025-02-15T00:00:00.000Z',
  updatedAt: '2025-02-15T00:00:00.000Z',
}
