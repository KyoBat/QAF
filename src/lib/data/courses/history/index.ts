/**
 * Cours Histoire Islamique - Les 4 Grands Imams et leurs Écoles
 * Export centralisé des leçons
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
  ],
}
