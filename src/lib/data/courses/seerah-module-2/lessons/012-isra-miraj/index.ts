/**
 * Seerah - Lesson 012: Al-Isra wal-Mi'raj
 * الإسراء والمعراج - Le Voyage Nocturne et l'Ascension
 */

import { content as contentAr } from './ar';
import { content as contentFr } from './fr';
import { content as contentEn } from './en';
import { Lesson } from '../../../types';

export const lesson012: Lesson = {
  id: 'seerah-012',
  order: 12,
  duration: '30 min',
  title: {
    ar: 'الإسراء والمعراج',
    fr: "Al-Isra wal-Mi'raj",
    en: "Al-Isra wal-Mi'raj",
  },
  content: {
    ar: contentAr,
    fr: contentFr,
    en: contentEn,
  },
};
