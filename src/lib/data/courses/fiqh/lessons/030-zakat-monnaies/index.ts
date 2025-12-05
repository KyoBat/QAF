/**
 * Fiqh - Lesson 030: Zakat des Monnaies (Or, Argent et Numéraire)
 * Index - Lesson Configuration
 */

import type { Lesson } from '@/lib/schemas/course';
import { content as contentFr } from './fr';
import { content as contentAr } from './ar';
import { content as contentEn } from './en';

export const lesson030: Lesson = {
  id: 'lesson-030',
  title: {
    fr: 'Zakat sur l\'Or, l\'Argent et les Monnaies',
    ar: 'زكاة الذهب والفضة والنقود',
    en: 'Zakat on Gold, Silver, and Currency',
  },
  duration: '30 min',
  content: {
    fr: contentFr,
    ar: contentAr,
    en: contentEn,
  },
  order: 3,
};

export default lesson030;
