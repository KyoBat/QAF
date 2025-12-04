/**
 * Cours: Les Fondements de la Aqeedah Islamique
 * Métadonnées du cours
 */

import { CourseMeta } from '../types'

export const aqeedahMeta: CourseMeta = {
  id: 'course-003',
  slug: 'aqeedah-islamique',
  title: {
    fr: 'Fondements de la Foi - Niveau 1',
    ar: 'أصول الإيمان - المستوى الأول',
    en: 'Foundations of Faith - Level 1',
  },
  description: {
    fr: 'Introduction aux six piliers de la foi islamique. Cours fondamental pour comprendre les bases de la croyance musulmane.',
    ar: 'مدخل إلى أركان الإيمان الستة. دورة تأسيسية لفهم أساسيات العقيدة الإسلامية.',
    en: 'Introduction to the six pillars of Islamic faith. Foundational course to understand the basics of Muslim belief.',
  },
  category: 'aqeedah',
  level: 'beginner',
  duration: '6h 00min',
  instructor: 'Sheikh Ibrahim Al-Aqidi',
  image: '/images/courses/aqeedah.svg',
  tags: ['aqeedah', 'faith', 'pillars', 'tawheed', 'iman'],
  featured: true,
  published: true,
  resources: [
    {
      type: 'pdf',
      title: 'Les trois fondements (Al-Usul Al-Thalatha)',
      url: '/resources/usul-thalatha.pdf',
      description: "Texte de l'Imam Muhammad ibn Abd Al-Wahhab",
    },
  ],
  createdAt: '2025-02-01T00:00:00.000Z',
  updatedAt: '2025-02-01T00:00:00.000Z',
}
