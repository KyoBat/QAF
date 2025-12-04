/**
 * Cours: Approfondissement de la Foi - Niveau 2
 * Métadonnées du cours
 */

import { CourseMeta } from '../types'

export const aqeedah2Meta: CourseMeta = {
  id: 'course-006',
  slug: 'aqeedah-niveau-2',
  title: {
    fr: 'Approfondissement de la Foi - Niveau 2',
    ar: 'تفصيل العقيدة - المستوى الثاني',
    en: 'Deepening Faith - Level 2',
  },
  description: {
    fr: 'Approfondissez votre compréhension du Tawhid et des six piliers de la foi avec des études détaillées, des preuves et la réfutation des ambiguïtés.',
    ar: 'تعمّق في فهم التوحيد وأركان الإيمان الستة مع دراسة تفصيلية وأدلة والرد على الشبهات.',
    en: 'Deepen your understanding of Tawhid and the six pillars of faith with detailed studies, evidences, and refutation of doubts.',
  },
  category: 'aqeedah',
  level: 'intermediate',
  duration: '8h 00min',
  instructor: 'Sheikh Ibrahim Al-Aqidi',
  image: '/images/courses/aqeedah-2.jpg',
  tags: ['aqeedah', 'tawheed', 'intermediate', 'pillars', 'detailed'],
  featured: false,
  published: true,
  resources: [
    {
      type: 'pdf',
      title: 'العقيدة الواسطية',
      url: '/resources/wasitiyyah.pdf',
      description: 'متن شيخ الإسلام ابن تيمية',
    },
    {
      type: 'pdf',
      title: 'كتاب التوحيد',
      url: '/resources/kitab-tawhid.pdf',
      description: 'للإمام محمد بن عبد الوهاب',
    },
  ],
  createdAt: '2025-02-15T00:00:00.000Z',
  updatedAt: '2025-12-04T00:00:00.000Z',
}
