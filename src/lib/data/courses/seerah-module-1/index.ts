/**
 * Cours Seerah Module 1 — Avant la Révélation
 */

import { Course } from '../types'
import { seerahModule1Meta } from './meta'

// Module 1 : Avant la Révélation (5 leçons)
import { lesson001 } from './lessons/001-arabie-avant-islam'
import { lesson002 } from './lessons/002-naissance-prophete'
import { lesson003 } from './lessons/003-enfance-jeunesse'
import { lesson004 } from './lessons/004-jeune-homme-veridique'
import { lesson005 } from './lessons/005-mariage-khadija'

export const seerahModule1Course: Course = {
  ...seerahModule1Meta,
  lessons: [lesson001, lesson002, lesson003, lesson004, lesson005],
}
