import { Lesson } from '../../../types';
import { lessonAishaFr } from './fr';
import { lessonAishaAr } from './ar';
import { lessonAishaEn } from './en';

export const lesson002: Lesson = {
  id: 'heroines-002-aisha',
  title: {
    fr: lessonAishaFr.title,
    ar: lessonAishaAr.title,
    en: lessonAishaEn.title,
  },
  content: {
    fr: lessonAishaFr.content,
    ar: lessonAishaAr.content,
    en: lessonAishaEn.content,
  },
  duration: '45 min',
  order: 2,
};
