/**
 * Leçon — L'Expédition de Tabuk (غزوة تبوك)
 */

import { Lesson } from '../../../types'
import { lessonTabukFr } from './fr'
import { lessonTabukAr } from './ar'
import { lessonTabukEn } from './en'

const lessonExpeditionTabuk: Lesson = {
  id: 'seerah-023b-expedition-tabuk',
  title: {
    fr: lessonTabukFr.title,
    ar: lessonTabukAr.title,
    en: lessonTabukEn.title,
  },
  content: {
    fr: lessonTabukFr.content,
    ar: lessonTabukAr.content,
    en: lessonTabukEn.content,
  },
  duration: '40 min',
  order: 23.5,
}

export default lessonExpeditionTabuk
