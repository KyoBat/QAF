import { Lesson } from '../../../types';
import { contentAr } from './ar';
import { contentFr } from './fr';
import { contentEn } from './en';

export const lesson011: Lesson = {
  id: 'usul-011',
  title: {
    ar: 'التقليد والمذاهب',
    fr: 'Taqlid et écoles juridiques',
    en: 'Following and Madhabs',
  },
  content: {
    ar: contentAr,
    fr: contentFr,
    en: contentEn,
  },
  duration: '40 min',
  order: 11,
};
