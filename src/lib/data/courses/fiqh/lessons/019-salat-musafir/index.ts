/**
 * Fiqh - Lesson 019: صلاة المسافر
 * Traveler's Prayer
 */

import type { Lesson } from '@/lib/schemas/course';
import { content as contentAr } from './ar';
import { content as contentEn } from './en';
import { content as contentFr } from './fr';

export const lesson019: Lesson = {
  id: 'lesson-019',
  title: {
    ar: 'صلاة المسافر',
    en: "The Traveler's Prayer",
    fr: 'La Prière du Voyageur',
  },
  duration: '30 min',
  content: {
    ar: contentAr,
    en: contentEn,
    fr: contentFr,
  },
  order: 1,
};

export default lesson019;
