/**
 * Les Anṣār — Ceux qui ont Tout Partagé
 * Lesson index - exports all language versions
 */

import { content as contentFr } from './fr';
import { content as contentAr } from './ar';
import { content as contentEn } from './en';

export const lesson010 = {
  id: 'lesson-010',
  slug: '010-ansar',
  duration: '35min',
  order: 10,
  title: {
    fr: 'Les Anṣār — Ceux qui ont Tout Partagé',
    ar: 'الأنصار — الذين تقاسموا كل شيء',
    en: 'The Anṣār — Those Who Shared Everything'
  },
  description: {
    fr: 'Sa\'d ibn Mu\'ādh dont le Trône a tremblé, Sa\'d ibn \'Ubāda le généreux, et la fraternité (mu\'ākhāh).',
    ar: 'سعد بن معاذ الذي اهتز له العرش، سعد بن عبادة الكريم، والمؤاخاة.',
    en: 'Sa\'d ibn Mu\'ādh for whom the Throne trembled, Sa\'d ibn \'Ubāda the generous, and the brotherhood (mu\'ākhāh).'
  },
  content: {
    fr: contentFr,
    ar: contentAr,
    en: contentEn
  }
};

export default lesson010;
