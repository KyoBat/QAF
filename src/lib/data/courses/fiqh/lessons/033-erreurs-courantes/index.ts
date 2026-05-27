/**
 * Fiqh - Leçon 033: Les Erreurs Courantes dans la Salat
 * Index - Export des trois langues
 */

import type { Lesson } from '@/lib/schemas/course';
import { content as contentAr } from './ar';
import { content as contentEn } from './en';
import { content as contentFr } from './fr';

export const lesson033: Lesson = {
  id: 'lesson-033',
  title: {
    ar: 'الأخطاء الشائعة في الصلاة',
    en: 'Common Mistakes in Prayer',
    fr: 'Les Erreurs Courantes dans la Salat',
  },
  description: {
    fr: "Les erreurs les plus fréquentes dans la prière qui l'invalident ou diminuent sa récompense : hâte excessive, mauvaise position du dos, regard vers le haut, mouvements inutiles. Correction avec preuves.",
    ar: "أكثر الأخطاء شيوعًا في الصلاة: الإسراع، إقامة الظهر والعنق، رفع البصر للسماء، والحركات المفسدة للصلاة.",
    en: "Most common mistakes in prayer that invalidate it or reduce its reward: rushing, improper back position, looking up, unnecessary movements. Corrections with evidence.",
  },
  duration: '35 min',
  content: {
    ar: contentAr,
    en: contentEn,
    fr: contentFr,
  },
  order: 23,
};

export default lesson033;
