/**
 * Fiqh - Leçon 016: سجود السهو تفصيلاً
 * Index file
 */

import { Lesson } from '../../../types';
import { content as contentFr } from './fr';
import { content as contentAr } from './ar';
import { content as contentEn } from './en';

export const lesson016: Lesson = {
  id: 'lesson-016',
  duration: '50 min',
  order: 6,
  title: {
    fr: 'La prosternation de l\'oubli (Sujood as-Sahw)',
    ar: 'سجود السهو تفصيلاً',
    en: 'Prostration of Forgetfulness (Sujood as-Sahw)',
  },
  content: {
    fr: contentFr,
    ar: contentAr,
    en: contentEn,
  },
};

export { contentAr, contentEn, contentFr };
