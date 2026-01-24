/**
 * Cours Seerah Module 4 — Les Dernières Années
 */

import { Course } from '../types'
import { seerahModule4Meta } from './meta'

// Module 4 : Les Dernières Années (5 leçons + 1 nouvelle)
import lessonTabuk from './lessons/023b-expedition-tabuk'
import lesson024 from './lessons/024-annee-delegations'
import lesson025 from './lessons/025-pelerinage-adieu'
import lesson026 from './lessons/026-maladie-deces'
import lesson027 from './lessons/027-caractere-prophete'
import lesson028 from './lessons/028-enseignements-prophete'

export const seerahModule4Course: Course = {
  ...seerahModule4Meta,
  lessons: [
    lessonTabuk,
    lesson024,
    lesson025,
    lesson026,
    lesson027,
    lesson028,
  ],
}
