import { Lesson } from '../../../types';
import { contentAr } from './ar';
import { contentFr } from './fr';
import { contentEn } from './en';

export const lesson012: Lesson = {
  id: 'usul-012',
  title: {
    ar: 'القواعد الفقهية',
    fr: 'Les maximes juridiques',
    en: 'Legal Maxims',
  },
  content: {
    ar: contentAr,
    fr: contentFr,
    en: contentEn,
  },
  duration: '45 min',
  order: 12,
};
