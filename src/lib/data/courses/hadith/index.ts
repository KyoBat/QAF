/**
 * Cours Hadith - Export centralisé
 */

import { Course } from '../types'
import { hadithMeta } from './meta'
import { lesson001 } from './lessons/001-introduction'

export const hadithCourse: Course = {
  ...hadithMeta,
  lessons: [lesson001],
}
