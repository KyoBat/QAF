import { Lesson } from '../../../types';
import { contentAr } from './ar';
import { contentFr } from './fr';
import { contentEn } from './en';

export const lesson010: Lesson = {
  id: 'usul-010',
  title: {
    ar: 'الاجتهاد',
    fr: "L'ijtihad",
    en: 'Juristic Effort',
  },
  content: {
    ar: contentAr,
    fr: contentFr,
    en: contentEn,
  },
  duration: '35 min',
  order: 10,
};
