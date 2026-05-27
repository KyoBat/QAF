/**
 * Fiqh - Leçon 012: شروط الصلاة السبعة
 * Index de la leçon
 */

import { Lesson } from '../../../types'
import { content as contentFr } from './fr'
import { content as contentAr } from './ar'
import { content as contentEn } from './en'

export const lesson012: Lesson = {
  id: 'lesson-012',
  duration: '50 min',
  order: 2,
  title: {
    fr: 'Les Conditions de la Salat',
    ar: 'شروط الصلاة السبعة',
    en: 'The Conditions of Salah',
  },
  description: {
    fr: "Les 7 conditions de validité de la prière en islam selon le rite malékite : purification, couverture de la awra, orientation vers la qibla, intention, temps, et plus. Prière invalide si l'une manque.",
    ar: "شروط الصلاة السبعة عند المالكية: الطهارة، ستر العورة، استقبال القبلة، النية، الوقت وغيرها، مع الأدلة.",
    en: "The 7 conditions for a valid prayer in Maliki fiqh: ritual purity, covering the awra, facing the qibla, intention, prayer time, and more.",
  },
  content: {
    fr: contentFr,
    ar: contentAr,
    en: contentEn,
  },
}
