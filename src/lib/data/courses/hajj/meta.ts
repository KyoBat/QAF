/**
 * Cours: Le Pèlerinage (Al-Hajj)
 * Métadonnées du cours
 */

import { CourseMeta } from '../types'

export const hajjMeta: CourseMeta = {
  id: 'course-hajj',
  slug: 'fiqh-hajj',
  title: {
    fr: 'Le Pèlerinage (Al-Hajj)',
    ar: 'الحج والعمرة',
    en: 'Pilgrimage (Al-Hajj)',
  },
  description: {
    fr: 'Maîtrisez les règles du Hajj et de la Omra selon l\'école Malikite : conditions, piliers, obligations, rites jour par jour, interdits de l\'Ihram et sacrifices.',
    ar: 'أتقن أحكام الحج والعمرة وفق المذهب المالكي: الشروط والأركان والواجبات ومناسك كل يوم ومحظورات الإحرام والهدي.',
    en: 'Master the rules of Hajj and Umrah according to the Maliki school: conditions, pillars, obligations, day-by-day rites, Ihram prohibitions and sacrifices.',
  },
  category: 'fiqh',
  level: 'beginner',
  duration: '6h 00min',
  instructor: 'Sheikh Muhammad Al-Faqih',
  image: '/images/courses/fiqh.svg',
  tags: ['fiqh', 'hajj', 'umrah', 'pilgrimage', 'worship', 'makkah'],
  featured: true,
  published: true,
  resources: [],
  createdAt: '2025-12-05T00:00:00.000Z',
  updatedAt: '2025-12-05T00:00:00.000Z',
}
