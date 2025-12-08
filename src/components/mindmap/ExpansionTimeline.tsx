'use client';

import React from 'react';
import { cn } from '@/lib/utils';

export interface ExpansionStep {
  id: string;
  label: string;
  labelAr?: string;
  labelFr?: string;
  description?: string;
  descriptionAr?: string;
  descriptionFr?: string;
  highlight?: boolean;
}

export interface ExpansionTimelineData {
  title: string;
  titleAr?: string;
  titleFr?: string;
  school: 'hanafi' | 'maliki' | 'shafii' | 'hanbali';
  steps: ExpansionStep[];
}

interface ExpansionTimelineProps {
  data: ExpansionTimelineData;
  locale?: string;
  className?: string;
}

// School colors
const schoolColors = {
  hanafi: { primary: '#22c55e', dark: '#166534', bg: 'bg-green-50 dark:bg-green-900/20', border: 'border-green-500', icon: '🟢' },
  maliki: { primary: '#eab308', dark: '#a16207', bg: 'bg-yellow-50 dark:bg-yellow-900/20', border: 'border-yellow-500', icon: '🟡' },
  shafii: { primary: '#3b82f6', dark: '#1d4ed8', bg: 'bg-blue-50 dark:bg-blue-900/20', border: 'border-blue-500', icon: '🔵' },
  hanbali: { primary: '#a855f7', dark: '#7c3aed', bg: 'bg-purple-50 dark:bg-purple-900/20', border: 'border-purple-500', icon: '🟣' },
};

/**
 * ExpansionTimeline - Composant pour afficher l'expansion géographique des écoles
 * Affiche une timeline verticale avec les étapes de propagation
 */
export function ExpansionTimeline({ data, locale = 'ar', className }: ExpansionTimelineProps) {
  const isRTL = locale === 'ar';
  const colors = schoolColors[data.school];
  
  // Helper to get localized text
  const getLocalizedText = (en: string, ar?: string, fr?: string) => {
    if (locale === 'ar') return ar || en;
    if (locale === 'fr') return fr || en;
    return en;
  };
  
  const title = getLocalizedText(data.title, data.titleAr, data.titleFr);

  return (
    <div className={cn('w-full', className)} dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Title */}
      <h4 className="text-lg font-bold text-primary mb-4 flex items-center gap-2 justify-center">
        <span>{colors.icon}</span>
        <span className={isRTL ? 'font-arabic' : ''}>{title}</span>
      </h4>

      {/* Timeline Container */}
      <div className={cn(
        'relative rounded-2xl p-6 shadow-lg border',
        colors.bg,
        'border-slate-200 dark:border-slate-700'
      )}>
        
        {/* Vertical Timeline */}
        <div className="relative">
          {/* Central Line */}
          <div 
            className="absolute top-0 bottom-0 w-1 rounded-full"
            style={{ 
              backgroundColor: colors.primary,
              left: 'calc(50% - 2px)',
            }}
          />

          {/* Steps */}
          <div className="flex flex-col items-center gap-6 relative z-10">
            {data.steps.map((step, index) => {
              const displayLabel = getLocalizedText(step.label, step.labelAr, step.labelFr);
              const displayDesc = getLocalizedText(step.description || '', step.descriptionAr, step.descriptionFr);
              const isHighlight = step.highlight;

              return (
                <div key={step.id} className="w-full flex justify-center">
                  {/* Step Card */}
                  <div 
                    className={cn(
                      'relative w-full max-w-md px-5 py-4 rounded-xl shadow-md transition-all duration-300 hover:scale-[1.02]',
                      isHighlight 
                        ? 'text-white' 
                        : 'bg-white dark:bg-slate-800 border-2',
                      !isHighlight && colors.border
                    )}
                    style={isHighlight ? {
                      background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.dark} 100%)`,
                    } : undefined}
                  >
                    {/* Step Number Circle */}
                    <div 
                      className={cn(
                        'absolute w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold -top-3 shadow-lg',
                        isRTL ? '-left-4' : '-right-4',
                        isHighlight ? 'bg-white text-slate-700' : 'text-white'
                      )}
                      style={!isHighlight ? { backgroundColor: colors.primary } : undefined}
                    >
                      {index + 1}
                    </div>

                    {/* Content */}
                    <div className="text-center">
                      <div className={cn(
                        'font-bold text-base',
                        isHighlight ? 'text-white' : 'text-slate-700 dark:text-slate-200',
                        isRTL && 'font-arabic'
                      )}>
                        {displayLabel}
                      </div>
                      {displayDesc && (
                        <div className={cn(
                          'text-sm mt-2 leading-relaxed',
                          isHighlight ? 'text-white/90' : 'text-slate-500 dark:text-slate-400',
                          isRTL && 'font-arabic'
                        )}>
                          {displayDesc}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExpansionTimeline;
