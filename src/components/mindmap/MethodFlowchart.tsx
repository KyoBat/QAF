'use client';

import React from 'react';
import { cn } from '@/lib/utils';

export interface FlowStep {
  id: string;
  label: string;
  labelAr?: string;
  labelFr?: string;
  note?: string;
  noteAr?: string;
  noteFr?: string;
  isSource?: boolean; // True for sources like Quran, Sunnah
}

export interface MethodFlowchartData {
  title: string;
  titleAr?: string;
  titleFr?: string;
  school: 'hanafi' | 'maliki' | 'shafii' | 'hanbali';
  steps: FlowStep[];
}

interface MethodFlowchartProps {
  data: MethodFlowchartData;
  locale?: string;
  className?: string;
}

// School colors and icons
const schoolConfig = {
  hanafi: {
    color: '#22c55e',
    colorLight: '#dcfce7',
    colorDark: '#166534',
    icon: '🟢',
    gradient: 'from-green-500 to-emerald-600',
  },
  maliki: {
    color: '#eab308',
    colorLight: '#fef9c3',
    colorDark: '#a16207',
    icon: '🟡',
    gradient: 'from-yellow-500 to-amber-600',
  },
  shafii: {
    color: '#3b82f6',
    colorLight: '#dbeafe',
    colorDark: '#1d4ed8',
    icon: '🔵',
    gradient: 'from-blue-500 to-indigo-600',
  },
  hanbali: {
    color: '#a855f7',
    colorLight: '#f3e8ff',
    colorDark: '#7c3aed',
    icon: '🟣',
    gradient: 'from-purple-500 to-violet-600',
  },
};

/**
 * MethodFlowchart - Composant pour afficher les méthodes juridiques des écoles
 * Affiche un flowchart vertical avec les étapes et notes conditionnelles
 */
export function MethodFlowchart({ data, locale = 'ar', className }: MethodFlowchartProps) {
  const isRTL = locale === 'ar';
  const config = schoolConfig[data.school];
  
  // Helper to get localized text
  const getLocalizedText = (en: string, ar?: string, fr?: string) => {
    if (locale === 'ar') return ar || en;
    if (locale === 'fr') return fr || en;
    return en;
  };
  
  const title = getLocalizedText(data.title, data.titleAr, data.titleFr);

  return (
    <div className={cn('w-full', className)} dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Header */}
      <div 
        className="flex items-center justify-center gap-3 mb-6 py-3 px-6 rounded-xl text-white font-bold text-lg shadow-lg"
        style={{
          background: `linear-gradient(135deg, ${config.color} 0%, ${config.colorDark} 100%)`,
        }}
      >
        <span className="text-2xl">{config.icon}</span>
        <span>{title}</span>
      </div>

      {/* Flowchart Container */}
      <div className="relative bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700">
        
        {/* Steps */}
        <div className="flex flex-col items-center gap-0">
          {data.steps.map((step, index) => {
            const isLast = index === data.steps.length - 1;
            const displayLabel = getLocalizedText(step.label, step.labelAr, step.labelFr);
            const displayNote = getLocalizedText(step.note || '', step.noteAr, step.noteFr);

            return (
              <React.Fragment key={step.id}>
                {/* Step Card */}
                <div className="relative flex items-center gap-4 w-full max-w-md">
                  {/* Main Step */}
                  <div
                    className={cn(
                      'flex-1 px-5 py-3 rounded-xl font-semibold text-center shadow-md transition-all duration-300 hover:scale-[1.02] hover:shadow-lg',
                      step.isSource 
                        ? 'text-white' 
                        : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border-2'
                    )}
                    style={{
                      ...(step.isSource 
                        ? { 
                            background: `linear-gradient(135deg, ${config.color} 0%, ${config.colorDark} 100%)`,
                            boxShadow: `0 4px 14px -2px ${config.color}44`,
                          }
                        : { 
                            borderColor: config.color,
                          }
                      ),
                    }}
                  >
                    <div className="text-base">{displayLabel}</div>
                  </div>

                  {/* Note (conditional) */}
                  {displayNote && (
                    <div 
                      className={cn(
                        'absolute top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-lg text-xs font-medium shadow-sm border whitespace-nowrap',
                        'bg-amber-50 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-700',
                        isRTL ? '-left-2 translate-x-[-100%]' : '-right-2 translate-x-[100%]'
                      )}
                    >
                      <span className="mr-1">💡</span>
                      {displayNote}
                    </div>
                  )}
                </div>

                {/* Connector Arrow */}
                {!isLast && (
                  <div className="flex flex-col items-center py-2">
                    <div 
                      className="w-0.5 h-4"
                      style={{ backgroundColor: config.color }}
                    />
                    <div 
                      className="text-lg"
                      style={{ color: config.color }}
                    >
                      ▼
                    </div>
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* Footer decoration */}
        <div className="mt-6 flex justify-center">
          <div 
            className="px-4 py-2 rounded-full text-sm font-medium text-white shadow-md"
            style={{
              background: `linear-gradient(135deg, ${config.color}88 0%, ${config.colorDark}88 100%)`,
            }}
          >
            {config.icon} {isRTL ? 'المذهب' : 'School'} {data.school.charAt(0).toUpperCase() + data.school.slice(1)}
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * MethodComparison - Affiche plusieurs méthodes côte à côte pour comparaison
 */
interface MethodComparisonProps {
  methods: MethodFlowchartData[];
  locale?: string;
  className?: string;
}

export function MethodComparison({ methods, locale = 'ar', className }: MethodComparisonProps) {
  const isRTL = locale === 'ar';

  return (
    <div className={cn('w-full', className)} dir={isRTL ? 'rtl' : 'ltr'}>
      <div className={cn(
        'grid gap-6',
        methods.length === 2 && 'md:grid-cols-2',
        methods.length === 3 && 'md:grid-cols-3',
        methods.length >= 4 && 'md:grid-cols-2 lg:grid-cols-4',
      )}>
        {methods.map((method) => (
          <MethodFlowchart 
            key={method.school} 
            data={method} 
            locale={locale}
          />
        ))}
      </div>
    </div>
  );
}

export default MethodFlowchart;
