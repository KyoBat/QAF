/**
 * Cours Tajweed - Export centralisé
 */

import { Course } from '../types'
import { tajweedMeta } from './meta'
import { lesson001 } from './lessons/001-introduction'
import { lesson002 } from './lessons/002-makharij'
import { lesson003 } from './lessons/003-sifat'

export const tajweedCourse: Course = {
  ...tajweedMeta,
  lessons: [lesson001, lesson002, lesson003],
}
