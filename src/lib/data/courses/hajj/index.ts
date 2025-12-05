/**
 * Hajj Course - Main Index
 * Cours complet sur le Pèlerinage (Hajj) selon le Fiqh Malikite
 */

import { hajjMeta } from './meta'
import { lesson001 } from './lessons/001-introduction'
import { lesson002 } from './lessons/002-conditions-obligation'
import { lesson003 } from './lessons/003-ihram-miqat'
import { lesson004 } from './lessons/004-piliers-hajj'
import { lesson005 } from './lessons/005-obligations-hajj'
import { lesson006 } from './lessons/006-interdits-ihram'
import { lesson007 } from './lessons/007-tawaf-sai'
import { lesson008 } from './lessons/008-arafat-muzdalifa-mina'
import { lesson009 } from './lessons/009-sacrifice-lapidation'
import { lesson010 } from './lessons/010-umra'

export const hajjCourse = {
  ...hajjMeta,
  lessons: [
    lesson001,
    lesson002,
    lesson003,
    lesson004,
    lesson005,
    lesson006,
    lesson007,
    lesson008,
    lesson009,
    lesson010
  ]
}

export default hajjCourse
