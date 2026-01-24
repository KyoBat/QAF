import { Lesson } from '../../../types';
import { content as contentFr } from './fr';
import { content as contentAr } from './ar';
import { content as contentEn } from './en';

export const lesson006: Lesson = {
  id: 'heroines-006-savantes',
  title: {
    fr: 'Les Femmes Savantes — Transmetteuses du Savoir',
    ar: 'النساء العالمات — ناقلات العلم',
    en: 'The Scholar Women — Transmitters of Knowledge',
  },
  content: {
    fr: contentFr,
    ar: contentAr,
    en: contentEn,
  },
  duration: '45 min',
  order: 6,
};
