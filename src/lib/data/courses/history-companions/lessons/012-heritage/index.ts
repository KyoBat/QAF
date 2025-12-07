/**
 * L'Héritage des Compagnons — Leur Legs Aujourd'hui
 * Lesson index - exports all language versions
 */

import { content as contentFr } from './fr';
import { content as contentAr } from './ar';
import { content as contentEn } from './en';

export const lesson012 = {
  id: 'lesson-012',
  slug: '012-heritage',
  duration: '30min',
  order: 12,
  title: {
    fr: 'L\'Héritage des Compagnons — Leur Legs Aujourd\'hui',
    ar: 'إرث الصحابة — تركتهم اليوم',
    en: 'The Legacy of the Companions — Their Impact Today'
  },
  description: {
    fr: 'Ce que chaque Compagnon nous enseigne et comment appliquer leur exemple dans notre vie quotidienne.',
    ar: 'ما يعلمنا إياه كل صحابي وكيف نطبق قدوتهم في حياتنا اليومية.',
    en: 'What each Companion teaches us and how to apply their example in our daily life.'
  },
  content: {
    fr: contentFr,
    ar: contentAr,
    en: contentEn
  }
};

export default lesson012;
