'use client';

import React from 'react';
import { cn } from '@/lib/utils';

export interface InfoItem {
  id: string;
  text: string;
  textAr?: string;
  textFr?: string;
  status?: 'accept' | 'reject' | 'neutral' | 'primary';
  icon?: string;
  school?: 'hanafi' | 'maliki' | 'shafii' | 'hanbali';
}

export interface InfoBoxData {
  title: string;
  titleAr?: string;
  titleFr?: string;
  type: 'criteria' | 'logic' | 'ranking' | 'comparison' | 'curriculum' | 'debate';
  school?: 'hanafi' | 'maliki' | 'shafii' | 'hanbali';
  items: InfoItem[];
}

interface InfoBoxProps {
  data: InfoBoxData;
  locale?: string;
  className?: string;
}

// School colors
const schoolColors = {
  hanafi: { primary: '#22c55e', icon: '🟢', bg: 'bg-green-50 dark:bg-green-900/20', border: 'border-green-500' },
  maliki: { primary: '#eab308', icon: '🟡', bg: 'bg-yellow-50 dark:bg-yellow-900/20', border: 'border-yellow-500' },
  shafii: { primary: '#3b82f6', icon: '🔵', bg: 'bg-blue-50 dark:bg-blue-900/20', border: 'border-blue-500' },
  hanbali: { primary: '#a855f7', icon: '🟣', bg: 'bg-purple-50 dark:bg-purple-900/20', border: 'border-purple-500' },
};

// Status icons
const statusIcons = {
  accept: '✅',
  reject: '❌',
  neutral: '│',
  primary: '●',
};

/**
 * InfoBox - Composant pour afficher des boîtes d'information structurées
 * Remplace les diagrammes ASCII avec des checkmarks, listes ordonnées, comparaisons
 */
export function InfoBox({ data, locale = 'ar', className }: InfoBoxProps) {
  const isRTL = locale === 'ar';
  
  // Helper to get localized text
  const getLocalizedText = (en: string, ar?: string, fr?: string) => {
    if (locale === 'ar') return ar || en;
    if (locale === 'fr') return fr || en;
    return en;
  };
  
  const title = getLocalizedText(data.title, data.titleAr, data.titleFr);
  const schoolStyle = data.school ? schoolColors[data.school] : null;
  
  // Determine background based on type
  const getTypeStyle = () => {
    switch (data.type) {
      case 'criteria':
        return 'bg-amber-50 dark:bg-amber-900/20 border-amber-300 dark:border-amber-700';
      case 'logic':
        return 'bg-blue-50 dark:bg-blue-900/20 border-blue-300 dark:border-blue-700';
      case 'ranking':
        return 'bg-slate-50 dark:bg-slate-800/50 border-slate-300 dark:border-slate-600';
      case 'comparison':
        return 'bg-gradient-to-br from-green-50 via-yellow-50 to-purple-50 dark:from-green-900/20 dark:via-yellow-900/20 dark:to-purple-900/20 border-slate-300 dark:border-slate-600';
      case 'curriculum':
        return 'bg-indigo-50 dark:bg-indigo-900/20 border-indigo-300 dark:border-indigo-700';
      case 'debate':
        return 'bg-red-50 dark:bg-red-900/20 border-red-300 dark:border-red-700';
      default:
        return 'bg-slate-50 dark:bg-slate-800 border-slate-300 dark:border-slate-600';
    }
  };

  return (
    <div 
      className={cn('w-full max-w-lg mx-auto my-6', className)} 
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      {/* Box Container */}
      <div className={cn(
        'rounded-xl border-2 shadow-md overflow-hidden',
        schoolStyle?.bg || getTypeStyle()
      )}>
        {/* Header */}
        <div className={cn(
          'px-4 py-3 border-b-2 font-bold text-center',
          schoolStyle 
            ? `${schoolStyle.border} border-opacity-30` 
            : 'border-slate-200 dark:border-slate-700',
          isRTL ? 'font-arabic' : ''
        )}>
          <span className="text-slate-700 dark:text-slate-200">{title}</span>
        </div>

        {/* Items */}
        <div className="p-4 space-y-2">
          {data.items.map((item, index) => {
            const text = getLocalizedText(item.text, item.textAr, item.textFr);
            const itemSchool = item.school ? schoolColors[item.school] : null;
            const icon = item.icon || (item.status ? statusIcons[item.status] : null);
            
            // For ranking type, show numbers
            const showNumber = data.type === 'ranking';
            
            return (
              <div 
                key={item.id}
                className={cn(
                  'flex items-start gap-3 px-3 py-2 rounded-lg transition-all',
                  'hover:bg-white/50 dark:hover:bg-slate-700/50',
                  item.status === 'reject' && 'text-red-600 dark:text-red-400',
                  item.status === 'accept' && 'text-green-600 dark:text-green-400'
                )}
              >
                {/* Icon/Number */}
                <div className={cn(
                  'flex-shrink-0 w-6 h-6 flex items-center justify-center text-sm',
                  showNumber && 'font-bold text-slate-500 dark:text-slate-400'
                )}>
                  {showNumber ? (
                    <span>{index + 1}.</span>
                  ) : itemSchool ? (
                    <span>{itemSchool.icon}</span>
                  ) : icon ? (
                    <span>{icon}</span>
                  ) : (
                    <span className="text-slate-400">│</span>
                  )}
                </div>
                
                {/* Text */}
                <div className={cn(
                  'flex-1 text-sm',
                  isRTL ? 'font-arabic text-right' : '',
                  item.status === 'reject' 
                    ? 'text-red-700 dark:text-red-300' 
                    : item.status === 'accept'
                      ? 'text-green-700 dark:text-green-300'
                      : 'text-slate-700 dark:text-slate-300'
                )}>
                  {text}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default InfoBox;
