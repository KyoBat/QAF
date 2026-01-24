import { Lesson } from '../../../types';
import { content as contentFr } from './fr';
import { content as contentAr } from './ar';
import { content as contentEn } from './en';

export const lessonMiracles: Lesson = {
  id: 'seerah-032-miracles-prophete',
  title: {
    fr: 'Les Miracles du Prophète ﷺ',
    ar: 'المعجزات النبوية',
    en: 'The Miracles of the Prophet ﷺ',
  },
  content: {
    fr: contentFr,
    ar: contentAr,
    en: contentEn,
  },
  duration: '35 min',
  order: 32,
};
