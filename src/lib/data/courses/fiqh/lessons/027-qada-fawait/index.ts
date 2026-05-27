/**
 * Fiqh - Lesson 027: قضاء الفوائت
 * Making Up Missed Prayers
 */

import type { Lesson } from '@/lib/schemas/course';
import { content as contentAr } from './ar';
import { content as contentEn } from './en';
import { content as contentFr } from './fr';

export const lesson027: Lesson = {
  id: 'lesson-027',
  title: {
    ar: 'قضاء الفوائت',
    en: 'Making Up Missed Prayers',
    fr: 'Le Rattrapage des Prières Manquées',
  },
  description: {
    fr: "Comment rattraper ses prières manquées de plusieurs jours selon l'islam : règles du qada, ordre de rattrapage, délai et repentir. Réponse claire avec les positions malékite et comparées pour ceux qui ont omis la prière longtemps.",
    ar: "كيف يقضي من فاتته صلوات كثيرة: حكم قضاء الفوائت، ترتيبها، التوبة معها، والخلاف بين المذاهب في حق تارك الصلاة عمداً.",
    en: "How to make up missed prayers in Islam: rules of qada, order of makeup, repentance, and scholarly positions on someone who missed prayers for days or years.",
  },
  duration: '25 min',
  content: {
    ar: contentAr,
    en: contentEn,
    fr: contentFr,
  },
  order: 9,
};

export default lesson027;
