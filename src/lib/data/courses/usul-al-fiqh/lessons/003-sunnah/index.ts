import { Lesson } from '../../../types';
import { contentAr } from './ar';
import { contentFr } from './fr';
import { contentEn } from './en';

export const lesson003: Lesson = {
  id: 'usul-003',
  title: {
    ar: 'السنة النبوية',
    fr: 'La Sunnah prophétique',
    en: 'The Prophetic Sunnah',
  },
  content: { ar: contentAr, fr: contentFr, en: contentEn },
  duration: '40 min',
  order: 3,
};
