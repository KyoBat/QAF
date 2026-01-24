import { Lesson } from '../../../types';
import { content as contentFr } from './fr';
import { content as contentAr } from './ar';
import { content as contentEn } from './en';

export const lesson002: Lesson = {
  id: 'heroines-002-aisha',
  title: {
    fr: "'Āisha bint Abī Bakr — La Savante de l'Umma",
    ar: 'عائشة بنت أبي بكر — عالمة الأمة',
    en: "'Āisha bint Abī Bakr — The Scholar of the Umma",
  },
  content: {
    fr: contentFr,
    ar: contentAr,
    en: contentEn,
  },
  duration: '45 min',
  order: 2,
};
