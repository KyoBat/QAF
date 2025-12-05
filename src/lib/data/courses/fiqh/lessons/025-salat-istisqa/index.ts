/**
 * Fiqh - Lesson 025: صلاة الاستسقاء
 * Rain Prayer
 */

import type { Lesson } from '@/lib/schemas/course';
import { content as contentAr } from './ar';
import { content as contentEn } from './en';
import { content as contentFr } from './fr';

export const lesson025: Lesson = {
  id: 'lesson-025',
  title: {
    ar: 'صلاة الاستسقاء',
    en: 'Rain Prayer',
    fr: 'La Prière pour la Pluie',
  },
  duration: '25 min',
  content: {
    ar: contentAr,
    en: contentEn,
    fr: contentFr,
  },
  order: 7,
};

export default lesson025;
