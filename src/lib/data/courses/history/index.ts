/**
 * Cours Histoire Islamique - Les 4 Grands Imams et leurs Écoles
 * Export centralisé des leçons
 */

import { Course } from '../types'
import { historyImamsMeta } from './meta'
import { lesson001 } from './lessons/001-age-dor'
import { lesson002 } from './lessons/002-maitres-communs'

export const historyImamsCourse: Course = {
  ...historyImamsMeta,
  lessons: [
    lesson001,
    lesson002,
  ],
}
