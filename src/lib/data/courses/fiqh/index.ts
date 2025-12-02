/**
 * Cours Fiqh - Export centralisé
 */

import { Course } from '../types'
import { fiqhMeta } from './meta'
import { lesson001 } from './lessons/001-introduction'
import { lesson002 } from './lessons/002-tahara'
import { lesson003 } from './lessons/003-najassa'
import { lesson004 } from './lessons/004-wudu'
import { lesson005 } from './lessons/005-ghusl'
import { lesson006 } from './lessons/006-tayammum'

export const fiqhCourse: Course = {
  ...fiqhMeta,
  lessons: [lesson001, lesson002, lesson003, lesson004, lesson005, lesson006],
}
