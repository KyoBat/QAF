import { Lesson } from '../../../types';
import { lessonFatimaFr } from './fr';
import { lessonFatimaAr } from './ar';
import { lessonFatimaEn } from './en';

export const lesson003: Lesson = {
  id: 'heroines-003-fatima',
  title: {
    fr: lessonFatimaFr.title,
    ar: lessonFatimaAr.title,
    en: lessonFatimaEn.title,
  },
  content: {
    fr: lessonFatimaFr.content,
    ar: lessonFatimaAr.content,
    en: lessonFatimaEn.content,
  },
  duration: '40 min',
  order: 3,
};
