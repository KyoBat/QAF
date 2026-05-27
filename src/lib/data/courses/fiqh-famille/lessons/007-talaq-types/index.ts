import type { Lesson } from '../../../types';
import { contentAr } from './ar';
import { contentFr } from './fr';
import { contentEn } from './en';

export const lesson007: Lesson = {
  id: 'famille-007',
  order: 7,
  title: {
    ar: 'أنواع الطلاق',
    fr: 'Types de divorce',
    en: 'Types of Divorce',
  },
  description: {
    fr: "Les types de divorce en islam selon le rite malékite : talaq sunni et bid'i, talaq raj'i (révocable) et ba'in (irrévocable), khul' à l'initiative de la femme, et faskh judiciaire.",
    ar: "أنواع الطلاق عند المالكية: السني والبدعي، الرجعي والبائن، الخلع والفسخ مع آثارها.",
    en: "Types of Islamic divorce in Maliki fiqh: sunni and bid'i talaq, revocable and irrevocable divorce, khul' initiated by the wife, and judicial faskh.",
  },
  content: { ar: contentAr, fr: contentFr, en: contentEn },
  duration: '45 min',
};
