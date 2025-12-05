/**
 * Hajj - Leçon 008: Arafat, Muzdalifa et Mina
 * Index du module
 */

import { Lesson } from '../../../types'
import { content as contentFr } from './fr'
import { content as contentAr } from './ar'
import { content as contentEn } from './en'

export const lesson008: Lesson = {
  id: 'lesson-008',
  duration: '55 min',
  order: 8,
  title: {
    fr: 'Arafat, Muzdalifa et Mina',
    ar: 'عرفة ومزدلفة ومنى',
    en: 'Arafat, Muzdalifa and Mina'
  },
  content: {
    fr: contentFr,
    ar: contentAr,
    en: contentEn
  }
}

export default lesson008
