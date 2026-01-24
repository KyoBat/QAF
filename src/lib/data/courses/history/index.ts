/**
 * Cours Histoire Islamique - Les 4 Grands Imams et leurs Écoles
 * Export centralisé des leçons (Module Principal - 12 leçons)
 * 
 * Note: Les leçons bonus ont été déplacées vers des cours séparés:
 * - history-biographies: Leçons 013-018 (Vies des Savants)
 * - history-fiqh-pratique: Leçons 019-023 (Fiqh Pratique)
 */

import { Course } from '../types'
import { historyImamsMeta } from './meta'
import { lesson001 } from './lessons/001-age-dor'
import { lesson002 } from './lessons/002-maitres-communs'
import { lesson003 } from './lessons/003-rencontres'
import { lesson004 } from './lessons/004-face-pouvoir'
import { lesson005 } from './lessons/005-methodes'
import { lesson006 } from './lessons/006-eleves'
import { lesson007 } from './lessons/007-livres'
import { lesson008 } from './lessons/008-convergences'
import { lesson009 } from './lessons/009-divergences'
import { lesson010 } from './lessons/010-geographie'
import { lesson011 } from './lessons/011-critiques'
import { lesson012 } from './lessons/012-heritage'

export const historyImamsCourse: Course = {
  ...historyImamsMeta,
  lessons: [
    lesson001,
    lesson002,
    lesson003,
    lesson004,
    lesson005,
    lesson006,
    lesson007,
    lesson008,
    lesson009,
    lesson010,
    lesson011,
    lesson012,
  ],
}

// Export des leçons bonus pour réutilisation par les autres cours
export { lesson013 } from './lessons/013-vie-abu-hanifa'
export { lesson014 } from './lessons/014-vie-malik'
export { lesson015 } from './lessons/015-vie-shafii'
export { lesson016 } from './lessons/016-vie-ahmad'
export { lesson017 } from './lessons/017-femmes-vie-imams'
export { lesson018 } from './lessons/018-femmes-juristes'
export { lesson019 } from './lessons/019-choisir-madhab'
export { lesson020 } from './lessons/020-vivre-madhab-21e-siecle'
export { lesson021 } from './lessons/021-au-dela-madhahib-unite'
export { lesson022 } from './lessons/022-madhahib-disparus'
export { lesson023 } from './lessons/023-madhab-jafari'
