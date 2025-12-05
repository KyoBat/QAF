/**
 * Siyam Course - Lessons Index
 * Exports all lessons for the Fasting course
 */

export { lesson001 } from './001-introduction'
export { lesson002 } from './002-conditions-obligation'
export { lesson003 } from './003-piliers-validite'
export { lesson004 } from './004-mufattirat'
export { lesson005 } from './005-actes-permis'

import { lesson001 } from './001-introduction'
import { lesson002 } from './002-conditions-obligation'
import { lesson003 } from './003-piliers-validite'
import { lesson004 } from './004-mufattirat'
import { lesson005 } from './005-actes-permis'
import { Lesson } from '../../types'

export const siyamLessons: Lesson[] = [
  lesson001,
  lesson002,
  lesson003,
  lesson004,
  lesson005,
]
