import type { Lesson } from '../../../types';
import { contentAr } from './ar';
import { contentFr } from './fr';
import { contentEn } from './en';

export const lesson011: Lesson = {
  id: 'famille-011',
  order: 11,
  title: {
    ar: 'الخلع',
    fr: "Le khul'",
    en: "Khul' (wife-initiated divorce)",
  },
  content: {
    ar: contentAr,
    fr: contentFr,
    en: contentEn,
  },
  duration: '30 min',
};
