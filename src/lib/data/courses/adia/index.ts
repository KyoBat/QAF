/**
 * Cours Invocations - Les Invocations Authentiques du Musulman
 * Export centralisé des Modules 1, 2, 3 et 4
 */

import { Course } from '../types'
import { adiaModule1Meta, adiaModule2Meta, adiaModule3Meta, adiaModule4Meta } from './meta'
import { lesson001 } from './lessons/001-sabah'
import { lesson002 } from './lessons/002-masaa'
import { lesson003 } from './lessons/003-nawm'
import { lesson004 } from './lessons/004-istiyqadh'
import { lesson005 } from './lessons/005-taam'
import { lesson006 } from './lessons/006-salat-avant-pendant'
import { lesson007 } from './lessons/007-salat-tashahud'
import { lesson008 } from './lessons/008-salat-apres'
import { lesson009 } from './lessons/009-karab'
import { lesson010 } from './lessons/010-ilm'
import { lesson011 } from './lessons/011-sihha'
import { lesson012 } from './lessons/012-usra'
import { lesson013 } from './lessons/013-dhikr'
import { lesson014 } from './lessons/014-tawba'
import { lesson015 } from './lessons/015-ibrahim'

/**
 * Module 1: Invocations Quotidiennes
 * 5 leçons sur les invocations du quotidien
 */
export const adiaModule1Course: Course = {
  ...adiaModule1Meta,
  lessons: [
    lesson001,
    lesson002,
    lesson003,
    lesson004,
    lesson005,
  ],
}

/**
 * Module 2: Invocations de la Salat
 * 3 leçons sur les invocations de la prière
 */
export const adiaModule2Course: Course = {
  ...adiaModule2Meta,
  lessons: [
    lesson006,
    lesson007,
    lesson008,
  ],
}

/**
 * Module 3: Invocations pour les Situations de Vie
 * 4 leçons sur les invocations pour différentes situations
 */
export const adiaModule3Course: Course = {
  ...adiaModule3Meta,
  lessons: [
    lesson009,
    lesson010,
    lesson011,
    lesson012,
  ],
}

/**
 * Module 4: Invocations Spirituelles Profondes
 * 3 leçons sur les invocations spirituelles
 */
export const adiaModule4Course: Course = {
  ...adiaModule4Meta,
  lessons: [
    lesson013,
    lesson014,
    lesson015,
  ],
}
