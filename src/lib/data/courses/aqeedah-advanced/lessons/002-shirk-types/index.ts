/**
 * Leçon 002: Le Shirk — Types et Causes
 * Export centralisé
 */

import { Lesson } from '../../../types'
import { lesson002Ar } from './ar'
import { lesson002Fr } from './fr'
import { lesson002En } from './en'

export const lesson002: Lesson = {
  id: 'aqeedah-adv-002',
  title: {
    fr: lesson002Fr.title,
    ar: lesson002Ar.title,
    en: lesson002En.title,
  },
  description: {
    fr: "Les types de shirk (association à Allah) selon la 'aqeedah islamique : shirk akbar (grand) qui invalide l'islam, shirk asghar (petit) comme le riya, et shirk khafi (caché). Comment s'en prémunir.",
    ar: "أنواع الشرك بالله: الشرك الأكبر المخرج من الملة، الشرك الأصغر كالرياء، والشرك الخفي مع أسبابها وسبل التحصُّن منها.",
    en: "Types of shirk (associating partners with Allah): major shirk (akbar) which nullifies Islam, minor shirk (asghar) such as riya, and hidden shirk (khafi). How to protect oneself.",
  },
  content: {
    fr: lesson002Fr.content,
    ar: lesson002Ar.content,
    en: lesson002En.content,
  },
  duration: '35 min',
  order: 2,
  videoUrl: '',
}
