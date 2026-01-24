import { Lesson } from '../../../types';
import { lessonMiraclesFr } from './fr';
import { lessonMiraclesAr } from './ar';
import { lessonMiraclesEn } from './en';

export const lessonMiracles: Lesson = {
  id: 'seerah-032-miracles-prophete',
  title: {
    fr: lessonMiraclesFr.title,
    ar: lessonMiraclesAr.title,
    en: lessonMiraclesEn.title,
  },
  content: {
    fr: lessonMiraclesFr.content,
    ar: lessonMiraclesAr.content,
    en: lessonMiraclesEn.content,
  },
  duration: '35 min',
  order: 32,
};
