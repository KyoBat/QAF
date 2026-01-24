/**
 * Cours Seerah Module 3 — Médine et l'État Islamique
 */

import { Course } from '../types'
import { seerahModule3Meta } from './meta'

// Module 3 : Médine et l'État Islamique (10 leçons + 1 nouvelle)
import lesson014 from './lessons/014-mosquee-fraternite'
import lesson015 from './lessons/015-constitution-medine'
import lesson016 from './lessons/016-bataille-badr'
import lesson017 from './lessons/017-bataille-uhud'
import lesson018 from './lessons/018-bataille-ahzab'
import lesson019 from './lessons/019-traite-hudaybiya'
import lesson020 from './lessons/020-bataille-khaybar'
import lessonEpousesProphete from './lessons/020b-epouses-prophete'
import lesson021 from './lessons/021-lettres-rois'
import lesson022 from './lessons/022-conquete-mecque'
import lesson023 from './lessons/023-hunayn-taif'

export const seerahModule3Course: Course = {
  ...seerahModule3Meta,
  lessons: [
    lesson014,
    lesson015,
    lesson016,
    lesson017,
    lesson018,
    lesson019,
    lesson020,
    lessonEpousesProphete,
    lesson021,
    lesson022,
    lesson023,
  ],
}
