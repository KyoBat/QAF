/**
 * History Course - Mind Maps Data (Les 4 Grands Imams)
 * خرائط ذهنية لدورة الأئمة الأربعة
 */

import { MindMapData } from '@/components/mindmap/CollapsibleMindMap'

/**
 * سلسلة الأسانيد - Chain of Transmission
 * من الرسول ﷺ إلى الأئمة الأربعة
 */
export const asanidChainMindMap: MindMapData = {
  id: 'rasul',
  label: 'The Prophet ﷺ',
  labelAr: 'الرَّسُولُ ﷺ',
  icon: '☪️',
  color: '#1e3a5f',
  children: [
    // الصحابة - Companions (direct students of the Prophet)
    {
      id: 'ibn-umar',
      label: 'Ibn Umar',
      labelAr: 'ابن عمر',
      icon: '🌟',
      color: '#059669',
      children: [
        {
          id: 'nafi',
          label: "Nāfi'",
          labelAr: 'نَافِع',
          icon: '📚',
          color: '#0891b2',
          children: [
            {
              id: 'malik',
              label: 'Mālik',
              labelAr: 'مَالِك',
              icon: '🟡',
              color: '#eab308',
              children: [
                {
                  id: 'shafii',
                  label: "Al-Shāfi'ī",
                  labelAr: 'الشَّافِعِي',
                  icon: '🔵',
                  color: '#3b82f6',
                  children: [
                    {
                      id: 'ahmad',
                      label: 'Aḥmad',
                      labelAr: 'أَحْمَد',
                      icon: '🟣',
                      color: '#a855f7',
                    },
                  ],
                },
              ],
            },
            {
              id: 'abu-hanifa-nafi',
              label: 'Abū Ḥanīfa',
              labelAr: 'أَبُو حَنِيفَة',
              icon: '🟢',
              color: '#22c55e',
              children: [
                {
                  id: 'shaybani',
                  label: 'Al-Shaybānī',
                  labelAr: 'الشَّيْبَانِي',
                  color: '#16a34a',
                  children: [
                    {
                      id: 'shafii-from-shaybani',
                      label: "Al-Shāfi'ī",
                      labelAr: 'الشَّافِعِي',
                      icon: '🔵',
                      color: '#3b82f6',
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'ibn-abbas',
      label: 'Ibn Abbas',
      labelAr: 'ابن عباس',
      icon: '🌟',
      color: '#059669',
      children: [
        {
          id: 'ata',
          label: "'Aṭā'",
          labelAr: 'عَطَاء',
          icon: '📚',
          color: '#0891b2',
          children: [
            {
              id: 'abu-hanifa-ata',
              label: 'Abū Ḥanīfa',
              labelAr: 'أَبُو حَنِيفَة',
              icon: '🟢',
              color: '#22c55e',
            },
          ],
        },
      ],
    },
    {
      id: 'aisha',
      label: 'Aisha',
      labelAr: 'عائشة',
      icon: '🌟',
      color: '#059669',
      children: [
        {
          id: 'urwa',
          label: 'Urwa',
          labelAr: 'عروة',
          icon: '📚',
          color: '#0891b2',
          children: [
            {
              id: 'zuhri',
              label: 'Al-Zuhrī',
              labelAr: 'الزُّهْرِي',
              color: '#7c3aed',
              children: [
                {
                  id: 'malik-zuhri',
                  label: 'Mālik',
                  labelAr: 'مَالِك',
                  icon: '🟡',
                  color: '#eab308',
                },
                {
                  id: 'sufyan',
                  label: 'Sufyān',
                  labelAr: 'سُفْيَان',
                  color: '#7c3aed',
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}

/**
 * التسلسل الجيلي - Generational Chain
 * سلسلة اللقاءات بين الأئمة
 */
export const imamsGenerationalChainMindMap: MindMapData = {
  id: 'abu-hanifa-root',
  label: 'Abū Ḥanīfa (80-150 H)',
  labelAr: 'أَبُو حَنِيفَة (80-150 هـ)',
  icon: '🟢',
  color: '#22c55e',
  children: [
    {
      id: 'malik-branch',
      label: 'Mālik (93-179 H)',
      labelAr: 'مَالِك (93-179 هـ)',
      icon: '🟡',
      color: '#eab308',
      children: [
        {
          id: 'shafii-branch',
          label: "Al-Shāfi'ī (150-204 H)",
          labelAr: 'الشَّافِعِي (150-204 هـ)',
          icon: '🔵',
          color: '#3b82f6',
          children: [
            {
              id: 'ahmad-branch',
              label: 'Aḥmad (164-241 H)',
              labelAr: 'أَحْمَد (164-241 هـ)',
              icon: '🟣',
              color: '#a855f7',
            },
          ],
        },
      ],
    },
    {
      id: 'shaybani-branch',
      label: 'Al-Shaybānī',
      labelAr: '[الشَّيْبَانِي]',
      color: '#16a34a',
      children: [
        {
          id: 'shafii-from-shaybani-branch',
          label: "Al-Shāfi'ī",
          labelAr: 'الشَّافِعِي',
          icon: '🔵',
          color: '#3b82f6',
        },
      ],
    },
  ],
}
