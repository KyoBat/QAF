/**
 * Fiqh - Lesson 018: صلاة الجماعة
 * Congregational Prayer
 */

import type { Lesson } from '@/lib/schemas/course';
import { content as contentAr } from './ar';
import { content as contentEn } from './en';
import { content as contentFr } from './fr';

export const lesson018: Lesson = {
  id: 'lesson-018',
  title: {
    ar: 'صلاة الجماعة',
    en: 'Congregational Prayer',
    fr: 'La Prière en Groupe',
  },
  description: {
    fr: "Règles de la prière en groupe (jama'a) en islam : statut (sunnah muakkada ou obligation), conditions pour être imam, rang des femmes et enfants, et récompense de la prière en congrégation.",
    ar: "أحكام صلاة الجماعة: حكمها، شروط الإمامة، ترتيب الصفوف، وفضل الجماعة في القرآن والسنة.",
    en: "Rules of congregational prayer in Islam: its ruling, conditions for leading prayer, rows arrangement, and the great reward of praying in jama'a.",
  },
  duration: '30 min',
  content: {
    ar: contentAr,
    en: contentEn,
    fr: contentFr,
  },
  order: 8,
};

export default lesson018;
