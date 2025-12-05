/**
 * Cours Siyam (Le Jeûne) - Export centralisé
 */

import { Course } from '../types'
import { siyamMeta } from './meta'
import { lesson001 } from './lessons/001-introduction'

export const siyamCourse: Course = {
  ...siyamMeta,
  lessons: [
    lesson001, // 1. Introduction au Jeûne (مقدمة في الصيام)
    // Les leçons suivantes seront ajoutées progressivement :
    // lesson002, // 2. Les Piliers et Conditions du Jeûne
    // lesson003, // 3. Les Actes qui Annulent le Jeûne
    // lesson004, // 4. Les Dispenses Légales (Al-Rukhsas)
    // lesson005, // 5. Le Rattrapage et l'Expiation (Al-Qada' wal-Kaffara)
    // lesson006, // 6. Les Actes Recommandés et Détestés
    // lesson007, // 7. Zakat Al-Fitr
    // lesson008, // 8. La Nuit du Destin et les Dix Derniers Jours
  ],
}

export { siyamMeta } from './meta'
