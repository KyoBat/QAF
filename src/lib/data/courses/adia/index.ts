/**
 * Cours Invocations - Les Invocations Authentiques du Musulman
 * Export centralisé des Modules 1 et 2 (8 leçons)
 */

import { Course } from '../types'
import { adiaMeta } from './meta'
import { lesson001 } from './lessons/001-sabah'
import { lesson002 } from './lessons/002-masaa'
import { lesson003 } from './lessons/003-nawm'
import { lesson004 } from './lessons/004-istiyqadh'
import { lesson005 } from './lessons/005-taam'
import { lesson006 } from './lessons/006-salat-avant-pendant'
import { lesson007 } from './lessons/007-salat-tashahud'
import { lesson008 } from './lessons/008-salat-apres'

export const adiaCourse: Course = {
  ...adiaMeta,
  lessons: [
    lesson001,
    lesson002,
    lesson003,
    lesson004,
    lesson005,
    lesson006,
    lesson007,
    lesson008,
  ],
}
