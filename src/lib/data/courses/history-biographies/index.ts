/**
 * Cours: Vies des Savants - Biographies des Imams et Femmes Savantes
 * Export centralisé des leçons
 */

import { Course } from '../types'
import { historyBiographiesMeta } from './meta'

// Réutilisation des leçons du cours history
import { lesson013 } from '../history/lessons/013-vie-abu-hanifa'
import { lesson014 } from '../history/lessons/014-vie-malik'
import { lesson015 } from '../history/lessons/015-vie-shafii'
import { lesson016 } from '../history/lessons/016-vie-ahmad'
import { lesson017 } from '../history/lessons/017-femmes-vie-imams'
import { lesson018 } from '../history/lessons/018-femmes-juristes'

// Renumérotation pour ce cours
const lessonBio001 = { ...lesson013, order: 1 }
const lessonBio002 = { ...lesson014, order: 2 }
const lessonBio003 = { ...lesson015, order: 3 }
const lessonBio004 = { ...lesson016, order: 4 }
const lessonBio005 = { ...lesson017, order: 5 }
const lessonBio006 = { ...lesson018, order: 6 }

export const historyBiographiesCourse: Course = {
  ...historyBiographiesMeta,
  lessons: [
    lessonBio001,
    lessonBio002,
    lessonBio003,
    lessonBio004,
    lessonBio005,
    lessonBio006,
  ],
}
