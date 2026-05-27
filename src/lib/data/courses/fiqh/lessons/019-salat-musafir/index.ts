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
  description: {
    fr: "Durée et règles de la prière du voyageur selon le rite malékite : distance minimale, raccourcissement (qasr) à 2 rak'at, regroupement (jam') de Dhuhr/Asr et Maghrib/Isha, et durée maximale autorisée selon les 4 écoles.",
    ar: "أحكام صلاة المسافر عند المالكية: مسافة القصر، عدد الركعات، الجمع بين الصلاتين، ومدة الترخص بالقصر والجمع مع الأدلة من القرآن والسنة.",
    en: "Rules of the traveler's prayer in Maliki fiqh: minimum travel distance, shortening (qasr) to 2 rak'at, combining (jam') Dhuhr/Asr and Maghrib/Isha, and maximum duration of the concession.",
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
