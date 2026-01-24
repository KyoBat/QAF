import type { Lesson } from '../../../types';
import { contentAr } from './ar';
import { contentFr } from './fr';
import { contentEn } from './en';

export const lesson001: Lesson = {
  id: 'famille-001',
  order: 1,
  title: {
    ar: 'مقدمة فقه الأسرة',
    fr: 'Introduction au fiqh familial',
    en: 'Introduction to Family Fiqh',
  },
  content: { ar: contentAr, fr: contentFr, en: contentEn },
  duration: '30 min',
};
