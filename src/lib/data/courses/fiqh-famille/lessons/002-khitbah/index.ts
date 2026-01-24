import type { Lesson } from '../../../types';
import { contentAr } from './ar';
import { contentFr } from './fr';
import { contentEn } from './en';

export const lesson002: Lesson = {
  id: 'famille-002',
  order: 2,
  title: {
    ar: 'الخطبة',
    fr: 'Les fiançailles',
    en: 'Engagement',
  },
  content: { ar: contentAr, fr: contentFr, en: contentEn },
  duration: '35 min',
};
