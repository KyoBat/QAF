/**
 * Fiqh - Lesson 017: صلاة المسبوق
 * Prayer of the Late-Comer (Masbuq)
 */

import type { Lesson } from '@/lib/schemas/course';
import { content as contentAr } from './ar';
import { content as contentEn } from './en';
import { content as contentFr } from './fr';

export const lesson017: Lesson = {
  id: 'lesson-017',
  title: {
    ar: 'صلاة المسبوق',
    en: 'Prayer of the Late-Comer',
    fr: 'Prière du Retardataire',
  },
  description: {
    fr: "Règles du retardataire (masbuq) en prière : quand rejoindre l'imam, quelles rak'at sont considérées rattrapées, comment compléter sa prière après le salam de l'imam selon le rite malékite.",
    ar: "أحكام المسبوق في الصلاة: متى يدخل مع الإمام، ما يُعتدّ به وما يقضيه، وكيفية إتمام صلاته عند المالكية.",
    en: "Rules for the late-comer (masbuq) in prayer: when to join the imam, which rak'at count, and how to complete the prayer after the imam's salam in Maliki fiqh.",
  },
  duration: '25 min',
  content: {
    ar: contentAr,
    en: contentEn,
    fr: contentFr,
  },
  order: 7,
};

export default lesson017;
