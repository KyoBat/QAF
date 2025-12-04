/**
 * Aqeedah - Leçon 001: Introduction et les Piliers de la Foi
 * Index de la leçon
 */

import { Lesson } from '../../../types'
import { content as contentFr } from './fr'
import { content as contentAr } from './ar'
import { content as contentEn } from './en'
import { arkanImanMindMap } from '../../mindmaps'

export const lesson001: Lesson = {
  id: 'lesson-001',
  duration: '45 min',
  order: 1,
  title: {
    fr: 'Introduction et les Piliers de la Foi',
    ar: 'مقدمة وأركان الإيمان',
    en: 'Introduction and Pillars of Faith',
  },
  content: {
    fr: contentFr,
    ar: contentAr,
    en: contentEn,
  },
  mindmaps: [
    {
      id: 'arkan-iman',
      title: {
        fr: 'Les Six Piliers de la Foi',
        ar: 'أركان الإيمان الستة',
        en: 'The Six Pillars of Faith',
      },
      data: arkanImanMindMap,
    },
  ],
}
