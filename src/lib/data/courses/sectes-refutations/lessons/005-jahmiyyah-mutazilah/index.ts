import { Lesson } from '../../../types';
import { contentAr } from './ar';
import { contentFr } from './fr';
import { contentEn } from './en';

export const lesson005: Lesson = {
  id: 'sectes-005',
  title: {
    ar: 'الجهمية والمعتزلة — الفرق الكلامية',
    fr: 'Les Jahmiyyah et Mu\'tazilah — Les Sectes Théologiques',
    en: 'The Jahmiyyah and Mu\'tazilah — The Theological Sects',
  },
  content: {
    ar: contentAr,
    fr: contentFr,
    en: contentEn,
  },
  duration: '40 min',
  order: 5,
};
