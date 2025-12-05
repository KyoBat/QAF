/**
 * Cours: Introduction au Tajweed
 * Métadonnées du cours
 */

import { CourseMeta } from '../types'

export const tajweedMeta: CourseMeta = {
  id: 'course-001',
  slug: 'introduction-tajweed',
  title: {
    fr: 'Introduction au Tajweed',
    ar: 'مقدمة في التجويد',
    en: 'Introduction to Tajweed',
  },
  description: {
    fr: "Apprenez les règles fondamentales de récitation du Coran avec les bases du Tajweed. Ce cours couvre les points d'articulation et les caractéristiques des lettres.",
    ar: 'تعلم القواعد الأساسية لتلاوة القرآن الكريم مع أساسيات التجويد. يغطي هذا المقرر مخارج الحروف وصفاتها.',
    en: 'Learn the fundamental rules of Quran recitation with Tajweed basics. This course covers articulation points and letter characteristics.',
  },
  category: 'tajweed',
  level: 'beginner',
  duration: '6h 30min',
  instructor: 'Sheikh Ahmad Al-Qari',
  image: '/images/courses/tajweed.svg',
  tags: ['tajweed', 'quran', 'recitation', 'beginner'],
  featured: false,
  published: false, // En cours de préparation
  resources: [
    {
      type: 'pdf',
      title: 'Guide des règles de Tajweed',
      url: '/resources/tajweed-guide.pdf',
      description: 'Document PDF complet des règles',
    },
    {
      type: 'video',
      title: 'Démonstration des Makharij',
      url: 'https://www.youtube.com/watch?v=example1',
      description: "Vidéo explicative des points d'articulation",
    },
  ],
  createdAt: '2025-01-15T00:00:00.000Z',
  updatedAt: '2025-01-15T00:00:00.000Z',
}
