/**
 * Cours Aqeedah Niveau 2 - Export centralisé
 * Approfondissement de la Foi
 */

import { Course } from '../types'
import { aqeedah2Meta } from './meta'

// Importer les leçons détaillées du dossier aqeedah (réutilisation)
import { lesson002 } from '../aqeedah/lessons/002-tawheed-rububiyyah'
import { lesson003 } from '../aqeedah/lessons/003-tawheed-uluhiyyah'
import { lesson004 } from '../aqeedah/lessons/004-tawheed-asma-sifat'
import { lesson005 } from '../aqeedah/lessons/005-anges'
import { lesson006 } from '../aqeedah/lessons/006-livres'
import { lesson007 } from '../aqeedah/lessons/007-prophetes'
import { lesson008 } from '../aqeedah/lessons/008-jour-dernier'
import { lesson009 } from '../aqeedah/lessons/009-destin'

// Niveau 2 : Approfondissement de la Foi (8 leçons détaillées)
export const aqeedah2Course: Course = {
  ...aqeedah2Meta,
  lessons: [
    { ...lesson002, order: 1 }, // 1. توحيد الربوبية - Détails et preuves
    { ...lesson003, order: 2 }, // 2. توحيد الألوهية - العبادة وشروطها
    { ...lesson004, order: 3 }, // 3. توحيد الأسماء والصفات - القواعد ومنهج السلف
    { ...lesson005, order: 4 }, // 4. الإيمان بالملائكة - تفصيل
    { ...lesson006, order: 5 }, // 5. الإيمان بالكتب - تفصيل
    { ...lesson007, order: 6 }, // 6. الإيمان بالرسل - تفصيل
    { ...lesson008, order: 7 }, // 7. الإيمان باليوم الآخر - تفصيل
    { ...lesson009, order: 8 }, // 8. الإيمان بالقدر - تفصيل
  ],
}
