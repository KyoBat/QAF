import type { Lesson } from '../../../types';
import { contentAr } from './ar';
import { contentFr } from './fr';
import { contentEn } from './en';

export const lesson012: Lesson = {
  id: 'famille-012',
  order: 12,
  title: {
    ar: 'الحضانة',
    fr: 'La garde des enfants',
    en: 'Child custody',
  },
  content: {
    ar: contentAr,
    fr: contentFr,
    en: contentEn,
  },
  duration: '30 min',
};
