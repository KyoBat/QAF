import { Lesson } from '../../../types';
import { contentAr } from './ar';
import { contentFr } from './fr';
import { contentEn } from './en';

export const lesson001: Lesson = {
  id: 'usul-001',
  title: {
    ar: 'مقدمة أصول الفقه',
    fr: 'Introduction aux Usul al-Fiqh',
    en: 'Introduction to Usul al-Fiqh',
  },
  content: { ar: contentAr, fr: contentFr, en: contentEn },
  duration: '30 min',
  order: 1,
};
