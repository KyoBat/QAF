/**
 * Leçon — Les Épouses du Prophète ﷺ (Ummahāt al-Mu'minīn)
 */

import { Lesson } from '../../../types'
import { lessonEpousesFr } from './fr'
import { lessonEpousesAr } from './ar'
import { lessonEpousesEn } from './en'

const lessonEpousesProphete: Lesson = {
  id: 'seerah-020b-epouses-prophete',
  title: {
    fr: lessonEpousesFr.title,
    ar: lessonEpousesAr.title,
    en: lessonEpousesEn.title,
  },
  content: {
    fr: lessonEpousesFr.content,
    ar: lessonEpousesAr.content,
    en: lessonEpousesEn.content,
  },
  duration: '45 min',
  order: 20.5,
}

export default lessonEpousesProphete
