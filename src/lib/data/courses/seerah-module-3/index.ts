/**
 * Cours Seerah Module 3 — Médine et l'État Islamique
 */

import { Course } from '../types'
import { seerahModule3Meta } from './meta'

// Module 3 : Médine et l'État Islamique (10 leçons)
import { lesson014 } from './lessons/014-mosquee-fraternite'

export const seerahModule3Course: Course = {
  ...seerahModule3Meta,
  lessons: [lesson014],
}
