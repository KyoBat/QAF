/**
 * Cours: Fiqh de la Famille
 * فقه الأسرة
 */

import { CourseMeta } from '../types'

export const fiqhFamilleMeta: CourseMeta = {
  id: 'course-023',
  slug: 'fiqh-famille',
  title: {
    ar: 'فقه الأسرة',
    fr: 'Fiqh de la Famille',
    en: 'Family Jurisprudence',
  },
  description: {
    ar: 'دراسة شاملة لأحكام الأسرة في الإسلام: الخطبة والزواج والطلاق والعدة والحضانة والنفقة وحقوق الزوجين والأولاد',
    fr: 'Étude complète du droit familial islamique : fiançailles, mariage, divorce, période d\'attente, garde des enfants, pension alimentaire et droits conjugaux',
    en: 'Comprehensive study of Islamic family law: engagement, marriage, divorce, waiting period, child custody, maintenance and spousal rights',
  },
  category: 'fiqh',
  level: 'intermediate',
  duration: '7h',
  instructor: 'TahaLearn Academy',
  image: '/images/courses/fiqh/fiqh-famille.svg',
  tags: ['fiqh', 'famille', 'mariage', 'divorce', 'nikah', 'talaq', 'hadanah', 'nafaqah'],
  featured: true,
  published: true,
  resources: [],
  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
}
