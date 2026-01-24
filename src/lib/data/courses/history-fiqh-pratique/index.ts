/**
 * Cours: Fiqh Pratique - Application et Diversité des Écoles
 * Export centralisé des leçons
 */

import { Course } from '../types'
import { historyFiqhPratiqueMeta } from './meta'

// Réutilisation des leçons du cours history
import { lesson019 } from '../history/lessons/019-choisir-madhab'
import { lesson020 } from '../history/lessons/020-vivre-madhab-21e-siecle'
import { lesson021 } from '../history/lessons/021-au-dela-madhahib-unite'
import { lesson022 } from '../history/lessons/022-madhahib-disparus'
import { lesson023 } from '../history/lessons/023-madhab-jafari'

// Renumérotation pour ce cours
const lessonFiqh001 = { ...lesson019, order: 1 }
const lessonFiqh002 = { ...lesson020, order: 2 }
const lessonFiqh003 = { ...lesson021, order: 3 }
const lessonFiqh004 = { ...lesson022, order: 4 }
const lessonFiqh005 = { ...lesson023, order: 5 }

export const historyFiqhPratiqueCourse: Course = {
  ...historyFiqhPratiqueMeta,
  lessons: [
    lessonFiqh001,
    lessonFiqh002,
    lessonFiqh003,
    lessonFiqh004,
    lessonFiqh005,
  ],
}
