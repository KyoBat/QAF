/**
 * Fiqh - Lesson 010: The Siwak and Acts of Natural Disposition (Fitra)
 */

import { content as arContent } from './ar';
import { content as enContent } from './en';
import { content as frContent } from './fr';
import type { Lesson } from '@/lib/schemas';

export const lesson010: Lesson = {
  id: 'fiqh-010-siwak-fitra',
  duration: '35 min',
  order: 5,
  title: {
    ar: 'السواك وسنن الفطرة',
    en: 'The Siwak and Acts of Fitra',
    fr: 'Le Siwak et les Actes de la Fitra',
  },
  content: {
    ar: arContent,
    en: enContent,
    fr: frContent,
  },
};

export default lesson010;
