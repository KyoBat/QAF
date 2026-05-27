/**
 * Fiqh - Lesson 021: صلاة الجمعة
 * Friday Prayer
 */

import type { Lesson } from '@/lib/schemas/course';
import { content as contentAr } from './ar';
import { content as contentEn } from './en';
import { content as contentFr } from './fr';

export const lesson021: Lesson = {
  id: 'lesson-021',
  title: {
    ar: 'صلاة الجمعة',
    en: 'Friday Prayer',
    fr: 'La Prière du Vendredi',
  },
  description: {
    fr: "Règles de la prière du vendredi (jumu'a) selon le rite malékite : conditions d'obligation, nombre de khutbas, nombre minimum de personnes, heure de la prière, et ce qui la remplace pour le voyageur.",
    ar: "أحكام صلاة الجمعة عند المالكية: شروط وجوبها، شروط صحتها، عدد المصلين، خطبتا الجمعة وأحكامهما.",
    en: "Rules of Friday prayer (jumu'a) in Maliki fiqh: conditions, minimum attendees, two khutbas, timing, and who is exempt.",
  },
  duration: '30 min',
  content: {
    ar: contentAr,
    en: contentEn,
    fr: contentFr,
  },
  order: 3,
};

export default lesson021;
