/**
 * Histoire Islamique - Leçon 003 : 'Uthmān ibn 'Affān
 * Index des traductions
 */

import { content as frContent } from './fr';
import { content as arContent } from './ar';
import { content as enContent } from './en';

export const lesson003 = {
  id: 'lesson-003',
  slug: '003-uthman',
  duration: '35min',
  order: 3,
  title: {
    fr: '\'Uthmān ibn \'Affān — Le Possesseur des Deux Lumières',
    ar: 'عثمان بن عفان — ذو النورين',
    en: '\'Uthmān ibn \'Affān — The Possessor of Two Lights'
  },
  description: {
    fr: 'La pudeur incarnée, le généreux qui compila le Coran pour l\'éternité.',
    ar: 'الحياء المجسد، الكريم الذي جمع القرآن للأبد.',
    en: 'Modesty incarnate, the generous one who compiled the Quran for eternity.'
  },
  content: {
    fr: frContent,
    ar: arContent,
    en: enContent
  }
};

export default lesson003;
