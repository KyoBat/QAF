/**
 * Cours Seerah Module 5 — Leçons et Applications
 */

import { Course } from '../types'
import { seerahModule5Meta } from './meta'

// Module 5 : Leçons et Applications (2 leçons + 1 nouvelle)
import lesson029 from './lessons/029-lecons-seerah'
import lesson030 from './lessons/030-suivre-prophete'
import lessonShubuhat from './lessons/031-refutation-shubuhat'

export const seerahModule5Course: Course = {
  ...seerahModule5Meta,
  lessons: [
    lesson029,
    lesson030,
    lessonShubuhat,
  ],
}
