/**
 * Histoire Islamique - Leçon 005 : Les Dix Promis au Paradis
 * Index des traductions
 */

import { content as frContent } from './fr';
import { content as arContent } from './ar';
import { content as enContent } from './en';

export const lesson005 = {
  id: 'lesson-005',
  slug: '005-dix-promis',
  duration: '40min',
  order: 5,
  title: {
    fr: 'Les Dix Promis au Paradis',
    ar: 'العشرة المبشرون بالجنة',
    en: 'The Ten Promised Paradise'
  },
  description: {
    fr: 'Aperçu des dix Compagnons bénis à qui le Prophète ﷺ promit le Paradis de leur vivant.',
    ar: 'نظرة على الصحابة العشرة المباركين الذين بشّرهم النبي ﷺ بالجنة.',
    en: 'Overview of the ten blessed Companions to whom the Prophet ﷺ promised Paradise in their lifetimes.'
  },
  content: {
    fr: frContent,
    ar: arContent,
    en: enContent
  }
};

export default lesson005;
