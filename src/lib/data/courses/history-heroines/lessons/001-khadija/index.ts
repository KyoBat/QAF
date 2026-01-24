import { Lesson } from '../../../types';
import { content as contentFr } from './fr';
import { content as contentAr } from './ar';
import { content as contentEn } from './en';

export const lesson001: Lesson = {
  id: 'heroines-001-khadija',
  title: {
    fr: 'Khadīja bint Khuwaylid — La Première Croyante',
    ar: 'خديجة بنت خويلد — أم المؤمنين الأولى',
    en: 'Khadīja bint Khuwaylid — The First Believer',
  },
  content: {
    fr: contentFr,
    ar: contentAr,
    en: contentEn,
  },
  duration: '40 min',
  order: 1,
};
