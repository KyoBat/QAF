/**
 * Aqeedah Course - Mind Maps Data
 * Données des cartes mentales pour le cours de Aqeedah
 */

import { MindMapData } from '@/components/mindmap/MindMap'

/**
 * أركان الإيمان الستة
 * Les Six Piliers de la Foi
 */
export const arkanImanMindMap: MindMapData = {
  id: 'iman',
  label: 'Pillars of Faith',
  labelAr: 'أركان الإيمان',
  icon: '☪️',
  color: '#1e3a5f',
  children: [
    {
      id: 'allah',
      label: 'Belief in Allah',
      labelAr: 'الإيمان بالله',
      icon: '🔷',
      color: '#2563eb',
      children: [
        {
          id: 'rububiyyah',
          label: 'Lordship',
          labelAr: 'الربوبية',
          color: '#3b82f6',
        },
        {
          id: 'uluhiyyah',
          label: 'Worship',
          labelAr: 'الألوهية',
          color: '#3b82f6',
        },
        {
          id: 'asma-sifat',
          label: 'Names & Attributes',
          labelAr: 'الأسماء والصفات',
          color: '#3b82f6',
        },
      ],
    },
    {
      id: 'malaikah',
      label: 'Belief in Angels',
      labelAr: 'الإيمان بالملائكة',
      icon: '👼',
      color: '#7c3aed',
      children: [
        {
          id: 'jibreel',
          label: 'Jibreel',
          labelAr: 'جبريل',
          color: '#8b5cf6',
        },
        {
          id: 'mikael',
          label: 'Mikael',
          labelAr: 'ميكائيل',
          color: '#8b5cf6',
        },
        {
          id: 'israfil',
          label: 'Israfil',
          labelAr: 'إسرافيل',
          color: '#8b5cf6',
        },
      ],
    },
    {
      id: 'kutub',
      label: 'Belief in Books',
      labelAr: 'الإيمان بالكتب',
      icon: '📖',
      color: '#059669',
      children: [
        {
          id: 'quran',
          label: 'Quran',
          labelAr: 'القرآن',
          color: '#10b981',
        },
        {
          id: 'tawrat',
          label: 'Torah',
          labelAr: 'التوراة',
          color: '#10b981',
        },
        {
          id: 'injeel',
          label: 'Gospel',
          labelAr: 'الإنجيل',
          color: '#10b981',
        },
        {
          id: 'zabur',
          label: 'Psalms',
          labelAr: 'الزبور',
          color: '#10b981',
        },
      ],
    },
    {
      id: 'rusul',
      label: 'Belief in Messengers',
      labelAr: 'الإيمان بالرسل',
      icon: '🕌',
      color: '#d97706',
      children: [
        {
          id: 'nuh',
          label: 'Nuh',
          labelAr: 'نوح',
          color: '#f59e0b',
        },
        {
          id: 'ibrahim',
          label: 'Ibrahim',
          labelAr: 'إبراهيم',
          color: '#f59e0b',
        },
        {
          id: 'musa',
          label: 'Musa',
          labelAr: 'موسى',
          color: '#f59e0b',
        },
        {
          id: 'isa',
          label: 'Isa',
          labelAr: 'عيسى',
          color: '#f59e0b',
        },
        {
          id: 'muhammad',
          label: 'Muhammad ﷺ',
          labelAr: 'محمد ﷺ',
          color: '#f59e0b',
        },
      ],
    },
    {
      id: 'yawm-akhir',
      label: 'Belief in Last Day',
      labelAr: 'الإيمان باليوم الآخر',
      icon: '⚖️',
      color: '#dc2626',
      children: [
        {
          id: 'qabr',
          label: 'Grave',
          labelAr: 'القبر',
          color: '#ef4444',
        },
        {
          id: 'bath',
          label: 'Resurrection',
          labelAr: 'البعث',
          color: '#ef4444',
        },
        {
          id: 'hisab',
          label: 'Reckoning',
          labelAr: 'الحساب',
          color: '#ef4444',
        },
        {
          id: 'jannah-nar',
          label: 'Paradise & Hell',
          labelAr: 'الجنة والنار',
          color: '#ef4444',
        },
      ],
    },
    {
      id: 'qadar',
      label: 'Belief in Decree',
      labelAr: 'الإيمان بالقدر',
      icon: '📜',
      color: '#0891b2',
      children: [
        {
          id: 'ilm',
          label: 'Knowledge',
          labelAr: 'العلم',
          color: '#06b6d4',
        },
        {
          id: 'kitabah',
          label: 'Writing',
          labelAr: 'الكتابة',
          color: '#06b6d4',
        },
        {
          id: 'mashiah',
          label: 'Will',
          labelAr: 'المشيئة',
          color: '#06b6d4',
        },
        {
          id: 'khalq',
          label: 'Creation',
          labelAr: 'الخلق',
          color: '#06b6d4',
        },
      ],
    },
  ],
}

/**
 * أقسام التوحيد الثلاثة
 * Les Trois Types de Tawhid
 */
export const aqsamTawhidMindMap: MindMapData = {
  id: 'tawhid',
  label: 'Tawhid',
  labelAr: 'التوحيد',
  icon: '☝️',
  color: '#1e3a5f',
  children: [
    {
      id: 'rububiyyah',
      label: 'Tawhid Rububiyyah',
      labelAr: 'توحيد الربوبية',
      icon: '🌍',
      color: '#2563eb',
      children: [
        {
          id: 'khalq',
          label: 'Creation',
          labelAr: 'الخلق',
          color: '#3b82f6',
        },
        {
          id: 'rizq',
          label: 'Provision',
          labelAr: 'الرزق',
          color: '#3b82f6',
        },
        {
          id: 'tadbir',
          label: 'Governance',
          labelAr: 'التدبير',
          color: '#3b82f6',
        },
        {
          id: 'ihya-imata',
          label: 'Life & Death',
          labelAr: 'الإحياء والإماتة',
          color: '#3b82f6',
        },
      ],
    },
    {
      id: 'uluhiyyah',
      label: 'Tawhid Uluhiyyah',
      labelAr: 'توحيد الألوهية',
      icon: '🤲',
      color: '#059669',
      children: [
        {
          id: 'salah',
          label: 'Prayer',
          labelAr: 'الصلاة',
          color: '#10b981',
        },
        {
          id: 'dua',
          label: 'Supplication',
          labelAr: 'الدعاء',
          color: '#10b981',
        },
        {
          id: 'dhab-nadhr',
          label: 'Sacrifice & Vow',
          labelAr: 'الذبح والنذر',
          color: '#10b981',
        },
        {
          id: 'tawakkul',
          label: 'Reliance',
          labelAr: 'التوكل',
          color: '#10b981',
        },
        {
          id: 'khawf-raja',
          label: 'Fear & Hope',
          labelAr: 'الخوف والرجاء',
          color: '#10b981',
        },
      ],
    },
    {
      id: 'asma-sifat',
      label: 'Tawhid Asma wa Sifat',
      labelAr: 'توحيد الأسماء والصفات',
      icon: '✨',
      color: '#7c3aed',
      children: [
        {
          id: 'ithbat',
          label: 'Affirmation',
          labelAr: 'الإثبات',
          color: '#8b5cf6',
          children: [
            {
              id: 'bila-tamthil',
              label: 'Without resemblance',
              labelAr: 'بلا تمثيل',
              color: '#a78bfa',
            },
          ],
        },
        {
          id: 'tanzih',
          label: 'Transcendence',
          labelAr: 'التنزيه',
          color: '#8b5cf6',
          children: [
            {
              id: 'bila-tatil',
              label: 'Without denial',
              labelAr: 'بلا تعطيل',
              color: '#a78bfa',
            },
          ],
        },
        {
          id: 'wuquf',
          label: 'Stopping at texts',
          labelAr: 'الوقوف على النص',
          color: '#8b5cf6',
          children: [
            {
              id: 'bila-takyif',
              label: 'Without asking how',
              labelAr: 'بلا تكييف',
              color: '#a78bfa',
            },
          ],
        },
      ],
    },
  ],
}

/**
 * شروط لا إله إلا الله
 * Conditions of La ilaha illa Allah
 */
export const shurutKalimahMindMap: MindMapData = {
  id: 'kalimah',
  label: 'La ilaha illa Allah',
  labelAr: 'لا إله إلا الله',
  icon: '🕋',
  color: '#1e3a5f',
  children: [
    {
      id: 'arkan',
      label: 'Two Pillars',
      labelAr: 'ركنان',
      icon: '🏛️',
      color: '#7c3aed',
      children: [
        {
          id: 'nafy',
          label: 'Negation',
          labelAr: 'النفي: لا إله',
          color: '#8b5cf6',
        },
        {
          id: 'ithbat',
          label: 'Affirmation',
          labelAr: 'الإثبات: إلا الله',
          color: '#8b5cf6',
        },
      ],
    },
    {
      id: 'shurut',
      label: 'Seven Conditions',
      labelAr: 'الشروط السبعة',
      icon: '🔑',
      color: '#059669',
      children: [
        {
          id: 'ilm',
          label: 'Knowledge',
          labelAr: '١. العلم',
          color: '#10b981',
        },
        {
          id: 'yaqin',
          label: 'Certainty',
          labelAr: '٢. اليقين',
          color: '#10b981',
        },
        {
          id: 'qabul',
          label: 'Acceptance',
          labelAr: '٣. القبول',
          color: '#10b981',
        },
        {
          id: 'inqiyad',
          label: 'Submission',
          labelAr: '٤. الانقياد',
          color: '#10b981',
        },
        {
          id: 'sidq',
          label: 'Truthfulness',
          labelAr: '٥. الصدق',
          color: '#10b981',
        },
        {
          id: 'ikhlas',
          label: 'Sincerity',
          labelAr: '٦. الإخلاص',
          color: '#10b981',
        },
        {
          id: 'mahabbah',
          label: 'Love',
          labelAr: '٧. المحبة',
          color: '#10b981',
        },
      ],
    },
  ],
}

/**
 * مراتب القدر الأربعة
 * The Four Levels of Qadar
 */
export const maratibQadarMindMap: MindMapData = {
  id: 'qadar',
  label: 'Levels of Qadar',
  labelAr: 'مراتب القدر',
  icon: '📜',
  color: '#1e3a5f',
  children: [
    {
      id: 'ilm',
      label: '1. Knowledge',
      labelAr: '١. العلم',
      icon: '🧠',
      color: '#2563eb',
      children: [
        {
          id: 'ilm-desc',
          label: 'Allah knows everything',
          labelAr: 'الله يعلم كل شيء',
          color: '#3b82f6',
        },
      ],
    },
    {
      id: 'kitabah',
      label: '2. Writing',
      labelAr: '٢. الكتابة',
      icon: '📝',
      color: '#7c3aed',
      children: [
        {
          id: 'kitabah-desc',
          label: 'Written in Lawh Mahfuz',
          labelAr: 'مكتوب في اللوح المحفوظ',
          color: '#8b5cf6',
        },
      ],
    },
    {
      id: 'mashiah',
      label: '3. Will',
      labelAr: '٣. المشيئة',
      icon: '⚡',
      color: '#059669',
      children: [
        {
          id: 'mashiah-desc',
          label: 'What Allah wills happens',
          labelAr: 'ما شاء الله كان',
          color: '#10b981',
        },
      ],
    },
    {
      id: 'khalq',
      label: '4. Creation',
      labelAr: '٤. الخلق',
      icon: '🌟',
      color: '#d97706',
      children: [
        {
          id: 'khalq-desc',
          label: 'Allah creates all things',
          labelAr: 'الله خالق كل شيء',
          color: '#f59e0b',
        },
      ],
    },
  ],
}
