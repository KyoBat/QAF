/**
 * Cours Seerah - Export centralisé
 */

import { Course } from '../types'
import { seerahMeta } from './meta'

// Module 1 : Avant la Révélation
import { lesson001 } from './lessons/module-1/001-arabie-avant-islam'
import { lesson002 } from './lessons/module-1/002-naissance-prophete'
import { lesson003 } from './lessons/module-1/003-enfance-jeunesse'
import { lesson004 } from './lessons/module-1/004-jeune-homme-veridique'
import { lesson005 } from './lessons/module-1/005-mariage-khadija'

// Module 2 : La Révélation à La Mecque
import { lesson006 } from './lessons/module-2/006-premiere-revelation'

export const seerahCourse: Course = {
  ...seerahMeta,
  lessons: [lesson001, lesson002, lesson003, lesson004, lesson005, lesson006],
}
