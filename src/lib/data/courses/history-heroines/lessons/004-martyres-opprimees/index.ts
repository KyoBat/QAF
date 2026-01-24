import { Lesson } from '../../../types';
import { lessonMartyresFr } from './fr';
import { lessonMartyresAr } from './ar';
import { lessonMartyresEn } from './en';

export const lesson004: Lesson = {
  id: 'heroines-004-martyres',
  title: {
    fr: lessonMartyresFr.title,
    ar: lessonMartyresAr.title,
    en: lessonMartyresEn.title,
  },
  content: {
    fr: lessonMartyresFr.content,
    ar: lessonMartyresAr.content,
    en: lessonMartyresEn.content,
  },
  duration: '35 min',
  order: 4,
};
