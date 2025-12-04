'use client';

import dynamic from 'next/dynamic';
import { useState } from 'react';
import type { MindMapData } from '@/components/mindmap';

// Import dynamique pour éviter les erreurs SSR avec ReactFlow
const MindMap = dynamic(() => import('@/components/mindmap/MindMap'), {
  ssr: false,
  loading: () => <LoadingPlaceholder />,
});

const CollapsibleMindMap = dynamic(() => import('@/components/mindmap/CollapsibleMindMap'), {
  ssr: false,
  loading: () => <LoadingPlaceholder />,
});

function LoadingPlaceholder() {
  return (
    <div className="w-full h-[500px] bg-slate-100 dark:bg-slate-800 rounded-xl flex items-center justify-center">
      <div className="animate-pulse text-slate-500">جاري التحميل...</div>
    </div>
  );
}

// Données du Mind Map: أنواع العبادة
const worshipTypesData: MindMapData = {
  id: 'root',
  label: 'Types of Worship',
  labelAr: 'أنواع العبادة',
  icon: '🕌',
  color: '#1e3a5f',
  children: [
    {
      id: 'heart',
      label: 'Heart Worship',
      labelAr: 'عبادات القلب',
      icon: '❤️',
      color: '#c9184a',
      children: [
        { id: 'love', label: 'Love', labelAr: 'المحبة', icon: '💕' },
        { id: 'fear', label: 'Fear', labelAr: 'الخوف', icon: '😨' },
        { id: 'hope', label: 'Hope', labelAr: 'الرجاء', icon: '🤲' },
        { id: 'tawakkul', label: 'Reliance', labelAr: 'التوكل', icon: '🙏' },
        { id: 'khushu', label: 'Humility', labelAr: 'الخشوع', icon: '🧎' },
        { id: 'inaba', label: 'Turning to Allah', labelAr: 'الإنابة', icon: '↩️' },
      ],
    },
    {
      id: 'tongue',
      label: 'Tongue Worship',
      labelAr: 'عبادات اللسان',
      icon: '👅',
      color: '#2d6a4f',
      children: [
        { id: 'shahada', label: 'Testimony', labelAr: 'الشهادتان', icon: '☝️' },
        { id: 'dhikr', label: 'Remembrance', labelAr: 'الذكر', icon: '📿' },
        { id: 'dua', label: 'Supplication', labelAr: 'الدعاء', icon: '🤲' },
        { id: 'quran', label: 'Quran Recitation', labelAr: 'تلاوة القرآن', icon: '📖' },
        { id: 'istighfar', label: 'Seeking Forgiveness', labelAr: 'الاستغفار', icon: '🙏' },
        { id: 'amr', label: 'Enjoining Good', labelAr: 'الأمر بالمعروف', icon: '✅' },
      ],
    },
    {
      id: 'body',
      label: 'Body Worship',
      labelAr: 'عبادات الجوارح',
      icon: '🏃',
      color: '#7b2cbf',
      children: [
        { id: 'salah', label: 'Prayer', labelAr: 'الصلاة', icon: '🕋' },
        { id: 'siyam', label: 'Fasting', labelAr: 'الصيام', icon: '🌙' },
        { id: 'hajj', label: 'Pilgrimage', labelAr: 'الحج', icon: '🕌' },
        { id: 'jihad', label: 'Striving', labelAr: 'الجهاد', icon: '⚔️' },
        { id: 'sadaqa', label: 'Charity', labelAr: 'الصدقة', icon: '💰' },
        { id: 'birr', label: 'Kindness to Parents', labelAr: 'بر الوالدين', icon: '👨‍👩‍👧' },
      ],
    },
    {
      id: 'wealth',
      label: 'Wealth Worship',
      labelAr: 'عبادات المال',
      icon: '💎',
      color: '#9c6644',
      children: [
        { id: 'zakat', label: 'Obligatory Charity', labelAr: 'الزكاة', icon: '💵' },
        { id: 'sadaqat', label: 'Voluntary Charity', labelAr: 'الصدقات', icon: '🎁' },
        { id: 'nafaqa', label: 'Spending on Family', labelAr: 'النفقة', icon: '👨‍👩‍👧‍👦' },
        { id: 'waqf', label: 'Endowment', labelAr: 'الوقف', icon: '🏛️' },
        { id: 'nadhr', label: 'Vow', labelAr: 'النذر', icon: '📜' },
        { id: 'udhiya', label: 'Sacrifice', labelAr: 'الأضحية', icon: '🐑' },
      ],
    },
  ],
};

export default function MindMapPOCPage() {
  const [useCollapsible, setUseCollapsible] = useState(true);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8" dir="rtl">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4">
            🗺️ خريطة ذهنية: أنواع العبادة
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            العبادة هي اسم جامع لكل ما يحبه الله ويرضاه من الأقوال والأعمال الظاهرة والباطنة
          </p>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
            — شيخ الإسلام ابن تيمية رحمه الله
          </p>
        </div>

        {/* Toggle Switch */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex rounded-lg border border-slate-300 dark:border-slate-600 p-1 bg-white dark:bg-slate-800">
            <button
              onClick={() => setUseCollapsible(true)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                useCollapsible 
                  ? 'bg-primary text-white' 
                  : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'
              }`}
            >
              🔄 تفاعلية (مع +/−)
            </button>
            <button
              onClick={() => setUseCollapsible(false)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                !useCollapsible 
                  ? 'bg-primary text-white' 
                  : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'
              }`}
            >
              📊 كاملة
            </button>
          </div>
        </div>

        {/* Mind Map */}
        <div className="max-w-6xl mx-auto">
          {useCollapsible ? (
            <CollapsibleMindMap 
              data={worshipTypesData} 
              title="أنواع العبادة في الإسلام"
              className="mb-8"
              defaultExpanded={false}
            />
          ) : (
            <MindMap 
              data={worshipTypesData} 
              title="أنواع العبادة في الإسلام"
              className="mb-8"
            />
          )}
        </div>

        {/* Instructions */}
        <div className="max-w-2xl mx-auto mt-8 p-6 bg-white dark:bg-slate-800 rounded-xl shadow-lg" dir="rtl">
          <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-4">
            📝 كيفية استخدام الخريطة الذهنية
          </h2>
          <ul className="space-y-2 text-slate-600 dark:text-slate-300">
            <li className="flex items-center gap-2">
              <span className="text-green-500">✓</span>
              <span>استخدم الماوس للتحريك والسحب</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-500">✓</span>
              <span>استخدم عجلة الماوس للتكبير والتصغير</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-500">✓</span>
              <span>اضغط على أزرار التحكم في الزاوية لإعادة الضبط</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-500">✓</span>
              <span>استخدم الخريطة المصغرة للتنقل السريع</span>
            </li>
          </ul>
        </div>

        {/* Evidence Section */}
        <div className="max-w-4xl mx-auto mt-8 grid md:grid-cols-2 gap-6" dir="rtl">
          <div className="p-6 bg-white dark:bg-slate-800 rounded-xl shadow-lg">
            <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-3">
              📖 الدليل من القرآن
            </h3>
            <blockquote className="text-slate-600 dark:text-slate-300 border-r-4 border-green-500 pr-4">
              ﴿وَمَا خَلَقْتُ الْجِنَّ وَالْإِنسَ إِلَّا لِيَعْبُدُونِ﴾
              <footer className="text-sm text-slate-500 mt-2">الذاريات: 56</footer>
            </blockquote>
          </div>
          <div className="p-6 bg-white dark:bg-slate-800 rounded-xl shadow-lg">
            <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-3">
              📜 الدليل من السنة
            </h3>
            <blockquote className="text-slate-600 dark:text-slate-300 border-r-4 border-blue-500 pr-4">
              «الدُّعَاءُ هُوَ العِبَادَةُ»
              <footer className="text-sm text-slate-500 mt-2">رواه الترمذي وصححه</footer>
            </blockquote>
          </div>
        </div>

        {/* Back Link */}
        <div className="text-center mt-8">
          <a 
            href="/courses" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
          >
            <span>←</span>
            <span>العودة إلى الدورات</span>
          </a>
        </div>
      </div>
    </div>
  );
}
