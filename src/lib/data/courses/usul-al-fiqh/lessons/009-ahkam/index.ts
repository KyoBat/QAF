import { Lesson } from '../../../types';
import { contentAr } from './ar';
import { contentFr } from './fr';
import { contentEn } from './en';

export const lesson009: Lesson = {
  id: 'usul-009',
  title: {
    ar: 'الأحكام التكليفية',
    fr: 'Les règles juridiques',
    en: 'Legal Rulings',
  },
  content: {
    ar: contentAr,
    fr: contentFr,
    en: contentEn,
  },
  duration: '35 min',
  order: 9,
};
