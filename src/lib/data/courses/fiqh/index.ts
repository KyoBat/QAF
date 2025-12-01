/**
 * Cours Fiqh - Export centralisé
 */

import { Course } from '../types'
import { fiqhMeta } from './meta'
import { lesson001 } from './lessons/001-introduction'
import { lesson002 } from './lessons/002-tahara'

export const fiqhCourse: Course = {
  ...fiqhMeta,
  lessons: [lesson001, lesson002],
}
