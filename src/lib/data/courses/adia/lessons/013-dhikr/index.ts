/**
 * الأدعية الصحيحة - الدرس 013: الذكر والتسبيح
 * Exports centralisés pour toutes les langues
 */

import { content as arContent } from './ar';
import { content as frContent } from './fr';
import { content as enContent } from './en';

export const lesson013 = {
  id: 'adia-013',
  slug: 'dhikr',
  order: 13,
  title: {
    ar: 'الذكر والتسبيح',
    fr: 'Dhikr et Glorification',
    en: 'Dhikr and Glorification',
  },
  description: {
    ar: 'تعلّم أعظم الأذكار: سبحان الله وبحمده، لا إله إلا الله، التسبيح والتحميد والتكبير، والصلاة على النبي',
    fr: 'Apprenez les plus grands dhikrs : Subḥān Allāh wa bi-ḥamdih, Lā ilāha illā Allāh, Tasbīḥ, Taḥmīd, Takbīr et Ṣalāt sur le Prophète',
    en: 'Learn the greatest dhikrs: Subḥān Allāh wa bi-ḥamdih, Lā ilāha illā Allāh, Tasbīḥ, Taḥmīd, Takbīr and Ṣalawāt on the Prophet',
  },
  duration: '20 دقيقة',
  content: {
    ar: arContent,
    fr: frContent,
    en: enContent,
  },
};
