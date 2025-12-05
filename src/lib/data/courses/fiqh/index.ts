/**
 * Cours Fiqh - Export centralisé
 */

import { Course } from '../types'
import { fiqhPurificationMeta, fiqhSalatMeta, fiqhSalawatKhassaMeta } from './meta'
import { lesson001 } from './lessons/001-introduction'
import { lesson002 } from './lessons/002-tahara'
import { lesson003 } from './lessons/003-najassa'
import { lesson004 } from './lessons/004-wudu'
import { lesson005 } from './lessons/005-ghusl'
import { lesson006 } from './lessons/006-tayammum'
import { lesson007 } from './lessons/007-hayd-nifas'
import { lesson008 } from './lessons/008-aniya'
import { lesson009 } from './lessons/009-istinja'
import { lesson010 } from './lessons/010-siwak-fitra'
import { lesson011 } from './lessons/011-salat-introduction'
import { lesson012 } from './lessons/012-salat-conditions'
import { lesson013 } from './lessons/013-salat-pillars'
import { lesson014 } from './lessons/014-salat-obligatory-actions'
import { lesson015 } from './lessons/015-salat-sunan-nullifiers'
import { lesson016 } from './lessons/016-sujood-sahw'
import { lesson017 } from './lessons/017-salat-masbuq'
import { lesson018 } from './lessons/018-salat-jamaa'
// Prières Spéciales (Cours séparé)
import { lesson019 } from './lessons/019-salat-musafir'
import { lesson020 } from './lessons/020-salat-marid'
import { lesson021 } from './lessons/021-salat-jumuah'
import { lesson022 } from './lessons/022-salat-eidayn'
import { lesson023 } from './lessons/023-salat-janaza'
import { lesson024 } from './lessons/024-salat-kusuf'
import { lesson025 } from './lessons/025-salat-istisqa'
import { lesson026 } from './lessons/026-sujud-tilawa-shukr'
import { lesson027 } from './lessons/027-qada-fawait'

export const fiqhPurificationCourse: Course = {
  ...fiqhPurificationMeta,
  lessons: [
    lesson001,
    lesson002,
    lesson003,
    lesson004,
    lesson005,
    lesson006,
    lesson007,
    lesson008,
    lesson009,
    lesson010,
  ],
  sections: [
    {
      id: 'bab-tahara',
      title: {
        fr: 'Chapitre : Purification',
        ar: 'باب الطهارة',
        en: 'Chapter: Purification',
      },
      description: {
        fr: 'Comprendre les principes qui préparent le fidèle à la prière et aux autres adorations.',
        ar: 'فهم المبادئ التي تهيئ المسلم للصلاة وسائر العبادات.',
        en: 'Understand the principles that prepare a believer for prayer and other acts of worship.',
      },
      lessonIds: [
        'lesson-001',
        'lesson-002',
        'lesson-003',
        'lesson-004',
        'lesson-005',
        'lesson-006',
        'lesson-007',
        'lesson-008',
        'lesson-009',
        'fiqh-010-siwak-fitra',
      ],
    },
  ],
}

export const fiqhSalatCourse: Course = {
  ...fiqhSalatMeta,
  lessons: [
    lesson011,
    lesson012,
    lesson013,
    lesson014,
    lesson015,
    lesson016,
    lesson017,
    lesson018,
  ],
  sections: [
    {
      id: 'bab-salat',
      title: {
        fr: 'Chapitre : Salat',
        ar: 'باب الصلاة',
        en: 'Chapter: Salah',
      },
      description: {
        fr: 'Parcours progressif des fondements de la prière: introduction, conditions, piliers, obligations et sunan.',
        ar: 'مسار متدرج في فقه الصلاة: مقدمة، شروط، أركان، واجبات وسنن ومبطلات.',
        en: 'Step-by-step path through Salah fiqh: introduction, conditions, pillars, obligations, and sunan/nullifiers.',
      },
      lessonIds: [
        'lesson-011',
        'lesson-012',
        'lesson-013',
        'lesson-014',
        'lesson-015',
        'lesson-016',
        'lesson-017',
        'lesson-018',
      ],
    },
  ],
}

export const fiqhSalawatKhassaCourse: Course = {
  ...fiqhSalawatKhassaMeta,
  lessons: [
    lesson019,
    lesson020,
    lesson021,
    lesson022,
    lesson023,
    lesson024,
    lesson025,
    lesson026,
    lesson027,
  ],
  sections: [
    {
      id: 'bab-salawat-khassa',
      title: {
        fr: 'Chapitre : Prières Spéciales',
        ar: 'باب الصلوات الخاصة',
        en: 'Chapter: Special Prayers',
      },
      description: {
        fr: 'Les règles des prières liées à des situations particulières : voyage, maladie, vendredi, fêtes, funérailles et autres.',
        ar: 'أحكام الصلوات المتعلقة بحالات خاصة: السفر، المرض، الجمعة، العيدين، الجنازة وغيرها.',
        en: 'Rulings on prayers related to special situations: travel, illness, Friday, Eids, funerals, and others.',
      },
      lessonIds: [
        'lesson-019',
        'lesson-020',
        'lesson-021',
        'lesson-022',
        'lesson-023',
        'lesson-024',
        'lesson-025',
        'lesson-026',
        'lesson-027',
      ],
    },
  ],
}
