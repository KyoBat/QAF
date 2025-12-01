/**
 * Cours Seerah - Export centralisé
 */

import { Course } from '../types'
import { seerahMeta } from './meta'
import { lesson001 } from './lessons/001-arabie-avant-islam'

export const seerahCourse: Course = {
  ...seerahMeta,
  lessons: [lesson001],
}
