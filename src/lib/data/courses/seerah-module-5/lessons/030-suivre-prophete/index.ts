/**
 * Leçon 030 — Comment Suivre l'Exemple du Prophète ﷺ
 */

import { Lesson } from '../../../types'
import { lesson030Fr } from './fr'
import { lesson030Ar } from './ar'
import { lesson030En } from './en'

const lesson030: Lesson = {
  id: 'seerah-030-suivre-prophete',
  title: {
    fr: lesson030Fr.title,
    ar: lesson030Ar.title,
    en: lesson030En.title,
  },
  content: {
    fr: lesson030Fr.content,
    ar: lesson030Ar.content,
    en: lesson030En.content,
  },
  duration: '30 min',
  order: 30,
}

export default lesson030
