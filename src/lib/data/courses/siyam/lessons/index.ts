/**
 * Siyam Course - Lessons Index
 * Exports all lessons for the Fasting course
 */

export { lesson001 } from './001-introduction'
export { lesson002 } from './002-conditions-obligation'
export { lesson003 } from './003-piliers-validite'
export { lesson004 } from './004-mufattirat'
export { lesson005 } from './005-actes-permis'
export { lesson006 } from './006-dispenses-qada'
export { lesson007 } from './007-kaffara-fidya'
export { lesson008 } from './008-jeune-surerogatoire'
export { lesson009 } from './009-laylat-qadr-itikaf'
export { lesson010 } from './010-zakat-fitr-eid'

import { lesson001 } from './001-introduction'
import { lesson002 } from './002-conditions-obligation'
import { lesson003 } from './003-piliers-validite'
import { lesson004 } from './004-mufattirat'
import { lesson005 } from './005-actes-permis'
import { lesson006 } from './006-dispenses-qada'
import { lesson007 } from './007-kaffara-fidya'
import { lesson008 } from './008-jeune-surerogatoire'
import { lesson009 } from './009-laylat-qadr-itikaf'
import { lesson010 } from './010-zakat-fitr-eid'
import { Lesson } from '../../types'

export const siyamLessons: Lesson[] = [
  lesson001,
  lesson002,
  lesson003,
  lesson004,
  lesson005,
  lesson006,
  lesson007,
  lesson008,
  lesson009,
  lesson010,
]
