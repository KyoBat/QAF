import type { CourseMeta } from '@/types';

export const fiqhMuamalatMeta: CourseMeta = {
  id: 'course-022',
  slug: 'fiqh-muamalat',
  title: {
    ar: 'فقه المعاملات',
    fr: 'Fiqh des Transactions',
    en: 'Fiqh of Transactions',
  },
  description: {
    ar: 'دراسة شاملة لأحكام البيوع والمعاملات المالية في الإسلام وفق منهج الفقه المقارن',
    fr: 'Étude complète des règles de commerce et transactions financières en Islam selon la méthodologie du fiqh comparé',
    en: 'Comprehensive study of trade rules and financial transactions in Islam according to comparative fiqh methodology',
  },
  category: 'fiqh',
  level: 'intermediate',
  duration: '8h',
  totalLessons: 15,
  imageUrl: '/images/courses/fiqh/muamalat.svg',
};
