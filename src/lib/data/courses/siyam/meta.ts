/**
 * Cours: Le Jeûne (Siyam)
 * Métadonnées du cours
 */

import { CourseMeta } from '../types'

export const siyamMeta: CourseMeta = {
  id: 'course-siyam',
  slug: 'fiqh-siyam',
  title: {
    fr: 'Le Jeûne (Siyam)',
    ar: 'الصيام',
    en: 'Fasting (Siyam)',
  },
  description: {
    fr: 'Apprenez les règles du jeûne selon l\'école Malikite : ses piliers, conditions, ce qui l\'annule, les dispenses légales, Zakat Al-Fitr et les actes de fin de Ramadan.',
    ar: 'تعلم أحكام الصيام وفق المذهب المالكي: أركانه وشروطه ومفسداته والرخص الشرعية وزكاة الفطر وأعمال نهاية رمضان.',
    en: 'Learn the rules of fasting according to the Maliki school: its pillars, conditions, nullifiers, legal dispensations, Zakat Al-Fitr and end of Ramadan acts.',
  },
  category: 'fiqh',
  level: 'beginner',
  duration: '5h 20min',
  instructor: 'Sheikh Muhammad Al-Faqih',
  image: '/images/courses/fiqh.svg',
  tags: ['fiqh', 'siyam', 'fasting', 'ramadan', 'worship'],
  featured: true,
  published: true,
  resources: [],
  createdAt: '2025-12-05T00:00:00.000Z',
  updatedAt: '2025-12-05T00:00:00.000Z',
}
