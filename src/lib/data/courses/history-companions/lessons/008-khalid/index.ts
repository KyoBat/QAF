/**
 * L'Épée d'Allah — Khālid ibn al-Walīd
 * Lesson index - exports all language versions
 */

import { content as contentFr } from './fr';
import { content as contentAr } from './ar';
import { content as contentEn } from './en';

export const lesson008 = {
  id: 'lesson-008',
  slug: '008-khalid',
  duration: '40min',
  order: 8,
  title: {
    fr: 'L\'Épée d\'Allah — Khālid ibn al-Walīd',
    ar: 'سيف الله — خالد بن الوليد',
    en: 'The Sword of Allah — Khālid ibn al-Walīd'
  },
  description: {
    fr: 'Le plus grand général de l\'histoire islamique : d\'ennemi de l\'Islam à son défenseur invaincu.',
    ar: 'أعظم قائد في التاريخ الإسلامي: من عدو للإسلام إلى مدافع عنه لم يُهزم قط.',
    en: 'The greatest general in Islamic history: from enemy of Islam to its undefeated defender.'
  },
  content: {
    fr: contentFr,
    ar: contentAr,
    en: contentEn
  }
};

export default lesson008;
