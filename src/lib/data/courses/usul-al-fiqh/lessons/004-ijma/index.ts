import { Lesson } from '../../../types';
import { contentAr } from './ar';
import { contentFr } from './fr';
import { contentEn } from './en';

export const lesson004: Lesson = {
  id: 'usul-004',
  title: {
    ar: 'الإجماع',
    fr: 'Le Consensus (Ijma)',
    en: 'Consensus (Ijma)',
  },
  content: { ar: contentAr, fr: contentFr, en: contentEn },
  duration: '35 min',
  order: 4,
};
