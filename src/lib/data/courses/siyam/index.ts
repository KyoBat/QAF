/**
 * Cours Siyam (Le Jeûne) - Export centralisé
 */

import { Course } from '../types'
import { siyamMeta } from './meta'
import { siyamLessons } from './lessons'

export const siyamCourse: Course = {
  ...siyamMeta,
  lessons: siyamLessons,
}

export { siyamMeta } from './meta'
export { siyamLessons } from './lessons'
