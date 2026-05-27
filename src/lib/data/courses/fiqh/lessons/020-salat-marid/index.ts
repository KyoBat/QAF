/**
 * Fiqh - Lesson 020: صلاة المريض
 * Prayer of the Sick
 */

import type { Lesson } from '@/lib/schemas/course';
import { content as contentAr } from './ar';
import { content as contentEn } from './en';
import { content as contentFr } from './fr';

export const lesson020: Lesson = {
  id: 'lesson-020',
  title: {
    ar: 'صلاة المريض',
    en: 'Prayer of the Sick',
    fr: 'La Prière du Malade',
  },
  description: {
    fr: "Comment prier quand on est malade selon l'islam : prière assis, allongé, par signe de tête (ima'), dispense du wudu et du ghusl. Règles complètes du malékite avec comparaison des écoles.",
    ar: "كيف يصلي المريض في الإسلام: الصلاة قاعدًا أو مضطجعًا أو بالإيماء، وأحكام طهارة المريض عند المالكية.",
    en: "How to pray when sick in Islam: seated, lying down, or by gesture (ima'), purity dispensation for the sick, complete Maliki rules.",
  },
  duration: '25 min',
  content: {
    ar: contentAr,
    en: contentEn,
    fr: contentFr,
  },
  order: 2,
};

export default lesson020;
