/**
 * Leçon 004: La Magie et la Voyance
 * Export centralisé
 */

import { Lesson } from '../../../types'
import { lesson004Ar } from './ar'
import { lesson004Fr } from './fr'
import { lesson004En } from './en'

export const lesson004: Lesson = {
  id: 'aqeedah-adv-004',
  title: {
    fr: lesson004Fr.title,
    ar: lesson004Ar.title,
    en: lesson004En.title,
  },
  description: {
    fr: "Jugement islamique sur la magie (sihr) et la voyance ('arrafah) : interdiction formelle, preuves coraniques, causes spirituelles et comment s'en protéger par les invocations authentiques.",
    ar: "حكم السحر والكهانة في الإسلام: التحريم القطعي، أدلة القرآن والسنة، أسبابهما الروحية وطرق الوقاية بالأذكار الصحيحة.",
    en: "Islamic ruling on magic (sihr) and fortune-telling: explicit prohibition, Quranic proofs, spiritual causes and how to protect oneself through authentic adhkar.",
  },
  content: {
    fr: lesson004Fr.content,
    ar: lesson004Ar.content,
    en: lesson004En.content,
  },
  duration: '30 min',
  order: 4,
  videoUrl: '',
}
