/**
 * Cours Aqeedah - Export centralisé
 */

import { Course } from '../types'
import { aqeedahMeta } from './meta'
import { lesson001 } from './lessons/001-introduction'
import { lesson002 } from './lessons/002-tawheed-rububiyyah'
import { lesson003 } from './lessons/003-tawheed-uluhiyyah'
import { lesson004 } from './lessons/004-tawheed-asma-sifat'
import { lesson005 } from './lessons/005-anges'
import { lesson006 } from './lessons/006-livres'
import { lesson007 } from './lessons/007-prophetes'
import { lesson008 } from './lessons/008-jour-dernier'
import { lesson009 } from './lessons/009-destin'
import { lesson010 } from './lessons/010-preuves-existence-allah'
import { lesson011 } from './lessons/011-sources-aqeedah'
import { lesson012 } from './lessons/012-caracteristiques-aqeedah'
import { lesson013 } from './lessons/013-causes-deviation'
import { lesson014 } from './lessons/014-arkan-tawhid'

export const aqeedahCourse: Course = {
  ...aqeedahMeta,
  lessons: [
    lesson001, // Introduction à la science de la croyance
    lesson010, // Preuves de l'existence d'Allah
    lesson011, // Sources de la croyance authentique
    lesson012, // Caractéristiques de la croyance authentique
    lesson013, // Causes de déviation
    lesson014, // Piliers et catégories du Tawhid
    lesson002, // Tawhid Rububiyyah
    lesson003, // Tawhid Uluhiyyah
    lesson004, // Tawhid Asma wa Sifat
    lesson005, // Les Anges
    lesson006, // Les Livres
    lesson007, // Les Prophètes
    lesson008, // Le Jour Dernier
    lesson009, // Le Destin
  ],
}
