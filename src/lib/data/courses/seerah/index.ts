/**
 * Cours Seerah - Export centralisé
 */

import { Course } from '../types'
import { seerahMeta } from './meta'
import { lesson001 } from './lessons/001-arabie-avant-islam'
import { lesson002 } from './lessons/002-naissance-prophete'
import { lesson003 } from './lessons/003-enfance-jeunesse'
import { lesson004 } from './lessons/004-jeune-homme-veridique'
import { lesson005 } from './lessons/005-mariage-khadija'

export const seerahCourse: Course = {
  ...seerahMeta,
  lessons: [lesson001, lesson002, lesson003, lesson004, lesson005],
}
