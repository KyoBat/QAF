/**
 * Cours Aqeedah Niveau 1 - Export centralisé
 */

import { Course } from '../types'
import { aqeedahMeta } from './meta'
import { lesson001 } from './lessons/001-introduction'
import { lesson010 } from './lessons/010-preuves-existence-allah'
import { lesson011 } from './lessons/011-sources-aqeedah'
import { lesson014 } from './lessons/014-arkan-tawhid'
import { lesson012 } from './lessons/012-caracteristiques-aqeedah'
import { lesson013 } from './lessons/013-causes-deviation'

// Niveau 1 : Fondements de la Foi (7 leçons essentielles)
export const aqeedahCourse: Course = {
  ...aqeedahMeta,
  lessons: [
    lesson001, // 1. Introduction et piliers de la foi
    lesson011, // 2. Sources de la croyance (القرآن والسنة)
    lesson010, // 3. Preuves de l'existence d'Allah
    lesson014, // 4. Vue d'ensemble du Tawhid (أقسام التوحيد)
    lesson012, // 5. Caractéristiques de la croyance authentique
    lesson013, // 6. Causes de déviation (sensibilisation)
  ],
}
