import { Lesson } from '../../../types';
import { lessonKhadijaFr } from './fr';
import { lessonKhadijaAr } from './ar';
import { lessonKhadijaEn } from './en';

export const lesson001: Lesson = {
  id: 'heroines-001-khadija',
  title: {
    fr: lessonKhadijaFr.title,
    ar: lessonKhadijaAr.title,
    en: lessonKhadijaEn.title,
  },
  content: {
    fr: lessonKhadijaFr.content,
    ar: lessonKhadijaAr.content,
    en: lessonKhadijaEn.content,
  },
  duration: '40 min',
  order: 1,
};
