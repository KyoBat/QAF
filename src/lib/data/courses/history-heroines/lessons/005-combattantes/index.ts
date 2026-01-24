import { Lesson } from '../../../types';
import { lessonCombattantesFr } from './fr';
import { lessonCombattantesAr } from './ar';
import { lessonCombattantesEn } from './en';

export const lesson005: Lesson = {
  id: 'heroines-005-combattantes',
  title: {
    fr: lessonCombattantesFr.title,
    ar: lessonCombattantesAr.title,
    en: lessonCombattantesEn.title,
  },
  content: {
    fr: lessonCombattantesFr.content,
    ar: lessonCombattantesAr.content,
    en: lessonCombattantesEn.content,
  },
  duration: '40 min',
  order: 5,
};
