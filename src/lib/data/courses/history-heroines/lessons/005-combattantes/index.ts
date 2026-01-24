import { Lesson } from '../../../types';
import { content as contentFr } from './fr';
import { content as contentAr } from './ar';
import { content as contentEn } from './en';

export const lesson005: Lesson = {
  id: 'heroines-005-combattantes',
  title: {
    fr: 'Les Femmes Guerrières — Nusayba et les Combattantes',
    ar: 'النساء المحاربات — نُسَيْبة والمجاهدات',
    en: 'The Warrior Women — Nusayba and the Fighters',
  },
  content: {
    fr: contentFr,
    ar: contentAr,
    en: contentEn,
  },
  duration: '40 min',
  order: 5,
};
