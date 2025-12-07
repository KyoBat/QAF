/**
 * Les Jeunes Compagnons — Ibn 'Abbās et Ibn 'Umar
 * Lesson index - exports all language versions
 */

import { content as contentFr } from './fr';
import { content as contentAr } from './ar';
import { content as contentEn } from './en';

export const lesson009 = {
  id: 'lesson-009',
  slug: '009-jeunes',
  duration: '35min',
  order: 9,
  title: {
    fr: 'Les Jeunes Compagnons — Ibn \'Abbās et Ibn \'Umar',
    ar: 'الصحابة الشباب — ابن عباس وابن عمر',
    en: 'The Young Companions — Ibn \'Abbās and Ibn \'Umar'
  },
  description: {
    fr: 'Deux enfants devenus des océans de savoir : Ibn \'Abbās le père du Tafsīr, Ibn \'Umar le modèle de piété.',
    ar: 'طفلان صارا بحرين من العلم: ابن عباس أبو التفسير، ابن عمر نموذج الورع.',
    en: 'Two children who became oceans of knowledge: Ibn \'Abbās the father of Tafsīr, Ibn \'Umar the model of piety.'
  },
  content: {
    fr: contentFr,
    ar: contentAr,
    en: contentEn
  }
};

export default lesson009;
