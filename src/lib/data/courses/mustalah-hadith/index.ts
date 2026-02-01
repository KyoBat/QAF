/**
 * Mustalah al-Hadith - مصطلح الحديث
 * Sciences du Hadith - Méthodologie
 * 
 * Ce cours couvre les fondements des sciences du hadith :
 * - Introduction au Mustalah
 * - Classification (Sahih/Hasan/Da'if)
 * - Isnad et transmission
 * - Les six recueils majeurs
 * - Vérification des hadiths
 * - Hadiths fabriqués
 * - Femmes savantes du hadith
 */

import { Course } from '../types'
import { mustalahHadithMeta } from './meta'

// Import des leçons
import { lesson001 } from './lessons/001-introduction'
import { lesson002 } from './lessons/002-classification'
import { lesson003 } from './lessons/003-isnad'
import { lesson004 } from './lessons/004-recueils'
import { lesson005 } from './lessons/005-verification'
import { lesson006 } from './lessons/006-mawdu'
import { lesson007 } from './lessons/007-femmes-savantes'

export const mustalahHadithCourse: Course = {
  ...mustalahHadithMeta,
  lessons: [
    lesson001,
    lesson002,
    lesson003,
    lesson004,
    lesson005,
    lesson006,
    lesson007,
  ],
}

export default mustalahHadithCourse
