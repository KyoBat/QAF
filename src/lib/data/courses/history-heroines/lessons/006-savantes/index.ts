import { Lesson } from '../../../types';
import { lessonSavantesFr } from './fr';
import { lessonSavantesAr } from './ar';
import { lessonSavantesEn } from './en';

export const lesson006: Lesson = {
  id: 'heroines-006-savantes',
  title: {
    fr: lessonSavantesFr.title,
    ar: lessonSavantesAr.title,
    en: lessonSavantesEn.title,
  },
  content: {
    fr: lessonSavantesFr.content,
    ar: lessonSavantesAr.content,
    en: lessonSavantesEn.content,
  },
  duration: '45 min',
  order: 6,
};
