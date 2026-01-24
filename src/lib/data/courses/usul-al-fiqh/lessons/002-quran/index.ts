import { Lesson } from '../../../types';
import { contentAr } from './ar';
import { contentFr } from './fr';
import { contentEn } from './en';

export const lesson002: Lesson = {
  id: 'usul-002',
  title: {
    ar: 'القرآن الكريم كمصدر',
    fr: 'Le Coran comme source',
    en: 'The Quran as Source',
  },
  content: { ar: contentAr, fr: contentFr, en: contentEn },
  duration: '35 min',
  order: 2,
};
