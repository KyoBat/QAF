/**
 * Cours Hadith - Hadiths Essentiels pour le Musulman Contemporain
 * Export centralisé des 15 leçons
 */

import { Course } from '../types'
import { hadithMeta } from './meta'
import { lesson001 } from './lessons/001-niyyah'
import { lesson002 } from './lessons/002-jibril'
import { lesson003 } from './lessons/003-verifier'
import { lesson004 } from './lessons/004-mele-pas'
import { lesson005 } from './lessons/005-tout-est-bien'
import { lesson006 } from './lessons/006-etranger'
import { lesson007 } from './lessons/007-colere'
import { lesson008 } from './lessons/008-aimer-frere'
import { lesson009 } from './lessons/009-langue-main'
import { lesson010 } from './lessons/010-nasiha'
import { lesson011 } from './lessons/011-tawakkul'
import { lesson012 } from './lessons/012-coeur'
import { lesson013 } from './lessons/013-epreuves'
import { lesson014 } from './lessons/014-taqwa'
import { lesson015 } from './lessons/015-constance'

export const hadithCourse: Course = {
  ...hadithMeta,
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
    lesson010,
    lesson011,
    lesson012,
    lesson013,
    lesson014,
    lesson015,
  ],
}
