import type { Lesson } from '../../../types';
import { contentAr } from './ar';
import { contentFr } from './fr';
import { contentEn } from './en';

export const lesson003: Lesson = {
  id: 'famille-003',
  order: 3,
  title: {
    ar: 'أركان النكاح',
    fr: 'Piliers du mariage',
    en: 'Pillars of Marriage',
  },
  description: {
    fr: "Les piliers et conditions du mariage islamique (nikah) selon le rite malékite : le wali (tuteur), les deux témoins, le consentement et la dot (mahr). Ce qui rend un mariage valide ou nul.",
    ar: "أركان عقد النكاح عند المالكية: الولي، الشاهدان، الصيغة، المهر وشروط صحة العقد.",
    en: "Pillars and conditions of Islamic marriage contract (nikah) in Maliki fiqh: guardian (wali), two witnesses, offer and acceptance, and mahr (dowry).",
  },
  content: { ar: contentAr, fr: contentFr, en: contentEn },
  duration: '40 min',
};
