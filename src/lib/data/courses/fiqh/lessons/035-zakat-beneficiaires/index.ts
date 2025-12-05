/**
 * Fiqh - Lesson 035: Les Bénéficiaires de la Zakat (مصارف الزكاة)
 * Index - Lesson Configuration
 */

import type { Lesson } from '@/lib/schemas/course';
import { content as contentFr } from './fr';
import { content as contentAr } from './ar';
import { content as contentEn } from './en';

export const lesson035: Lesson = {
  id: 'lesson-035',
  title: {
    fr: 'Les Bénéficiaires de la Zakat',
    ar: 'مصارف الزكاة',
    en: 'Zakat Beneficiaries',
  },
  duration: '35 min',
  content: {
    fr: contentFr,
    ar: contentAr,
    en: contentEn,
  },
  order: 8,
};

export default lesson035;
