/**
 * Cours: Les Fondements de la Aqeedah Islamique
 * Métadonnées du cours
 */

import { CourseMeta } from '../types'

export const aqeedahMeta: CourseMeta = {
  id: 'course-003',
  slug: 'aqeedah-islamique',
  title: {
    fr: 'Les Fondements de la Aqeedah Islamique',
    ar: 'أصول العقيدة الإسلامية',
    en: 'Foundations of Islamic Aqeedah',
  },
  description: {
    fr: 'Étudiez les six piliers de la foi islamique et comprenez les fondements de la croyance musulmane basés sur le Coran et la Sunna.',
    ar: 'ادرس أركان الإيمان الستة وافهم أسس العقيدة الإسلامية من القرآن والسنة.',
    en: 'Study the six pillars of Islamic faith and understand the foundations of Muslim belief based on the Quran and Sunnah.',
  },
  category: 'aqeedah',
  level: 'beginner',
  duration: '12h 00min',
  instructor: 'Sheikh Ibrahim Al-Aqidi',
  image: '/images/courses/aqeedah.jpg',
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
