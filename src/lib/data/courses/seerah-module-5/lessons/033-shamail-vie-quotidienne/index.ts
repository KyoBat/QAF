import { Lesson } from '../../../types';
import { lessonShamailFr } from './fr';
import { lessonShamailAr } from './ar';
import { lessonShamailEn } from './en';

export const lessonShamail: Lesson = {
  id: 'seerah-033-shamail-vie-quotidienne',
  title: {
    fr: lessonShamailFr.title,
    ar: lessonShamailAr.title,
    en: lessonShamailEn.title,
  },
  content: {
    fr: lessonShamailFr.content,
    ar: lessonShamailAr.content,
    en: lessonShamailEn.content,
  },
  duration: '35 min',
  order: 33,
};
