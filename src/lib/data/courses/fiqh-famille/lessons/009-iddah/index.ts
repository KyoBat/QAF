import type { Lesson } from '../../../types';
import { contentAr } from './ar';
import { contentFr } from './fr';
import { contentEn } from './en';

export const lesson009: Lesson = {
  id: 'famille-009',
  order: 9,
  title: {
    ar: 'العدة',
    fr: "La période d'attente",
    en: 'The waiting period',
  },
  content: {
    ar: contentAr,
    fr: contentFr,
    en: contentEn,
  },
  duration: '30 min',
};
