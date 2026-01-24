/**
 * Cours: Aqeedah Avancée — العقيدة المتقدمة
 * Export centralisé du cours complet
 */

import { Course } from '../types'
import { aqeedahAdvancedMeta } from './meta'

// Import des leçons
import { lesson001 } from './lessons/001-nawaqid-islam-intro'
import { lesson002 } from './lessons/002-shirk-types'
import { lesson003 } from './lessons/003-kufr-riddah'
import { lesson004 } from './lessons/004-magie-voyance'
import { lesson005 } from './lessons/005-wala-bara'
import { lesson006 } from './lessons/006-iman-augmente'
import { lesson007 } from './lessons/007-regles-takfir'
import { lesson008 } from './lessons/008-bidah-types'
import { lesson009 } from './lessons/009-tawassul'
import { lesson010 } from './lessons/010-karamat'
import { lesson011 } from './lessons/011-aqeedah-4-imams'
import { lesson012 } from './lessons/012-wasatiyyah'

export const aqeedahAdvancedLessons = [
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
]

export const aqeedahAdvancedCourse: Course = {
  ...aqeedahAdvancedMeta,
  lessons: aqeedahAdvancedLessons,
}

export { aqeedahAdvancedMeta }
