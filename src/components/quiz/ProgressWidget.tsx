'use client';

import { LocalizedText } from '@/lib/data/quizzes/types';
import { useQuizProgress } from '@/lib/hooks/useQuizProgress';
import { cn } from '@/lib/utils';

type Locale = 'fr' | 'ar' | 'en';

interface ProgressWidgetProps {
  locale: Locale;
  compact?: boolean;
  className?: string;
}

function getText(text: LocalizedText, locale: Locale): string {
  return text[locale] || text.fr;
}

export function ProgressWidget({ locale, compact = false, className }: ProgressWidgetProps) {
  const { progress, getLevelInfo, getTotalQuizzesCompleted, isLoading } = useQuizProgress();
  const isRtl = locale === 'ar';

  if (isLoading) {
    return (
      <div className={cn('animate-pulse bg-gray-200 dark:bg-gray-700 rounded-xl', className)}>
        <div className="h-20" />
      </div>
    );
  }

  const levelInfo = getLevelInfo();
  const totalQuizzes = getTotalQuizzesCompleted();

  if (compact) {
    return (
      <div
        className={cn(
          'flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 border border-primary-200 dark:border-primary-800',
          className
        )}
        dir={isRtl ? 'rtl' : 'ltr'}
      >
        {/* Level badge */}
        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-500 text-white flex items-center justify-center font-bold text-lg">
          {levelInfo.level}
        </div>

        {/* Info */}
        <div className="flex-1 min-w-0">
          <div className="font-medium text-gray-900 dark:text-white truncate">
            {getText(levelInfo.title, locale)}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            {progress.totalXp} XP
          </div>
        </div>

        {/* Streak */}
        {progress.currentStreak > 0 && (
          <div className="flex items-center gap-1 text-orange-500">
            <span className="text-lg">🔥</span>
            <span className="font-bold">{progress.currentStreak}</span>
          </div>
        )}
      </div>
    );
  }

  return (
    <div
      className={cn(
        'p-6 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm',
        className
      )}
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        {/* Level circle */}
        <div className="relative">
          <svg className="w-20 h-20 transform -rotate-90">
            <circle
              cx="40"
              cy="40"
              r="36"
              stroke="currentColor"
              strokeWidth="6"
              fill="none"
              className="text-gray-200 dark:text-gray-700"
            />
            <circle
              cx="40"
              cy="40"
              r="36"
              stroke="currentColor"
              strokeWidth="6"
              fill="none"
              strokeLinecap="round"
              className="text-primary-500"
              strokeDasharray={`${(levelInfo.progressPercent / 100) * 226} 226`}
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-2xl font-bold text-gray-900 dark:text-white">
              {levelInfo.level}
            </span>
          </div>
        </div>

        {/* Title and XP */}
        <div>
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">
            {getText(levelInfo.title, locale)}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {progress.totalXp} XP
            {levelInfo.xpToNext && (
              <span className="text-gray-400 dark:text-gray-500">
                {' '}• {levelInfo.xpToNext}{' '}
                {locale === 'ar' ? 'للمستوى التالي' : locale === 'en' ? 'to next level' : 'pour le prochain niveau'}
              </span>
            )}
          </p>
        </div>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <StatItem
          icon="📝"
          value={totalQuizzes}
          label={{ fr: 'Quizzes', ar: 'اختبارات', en: 'Quizzes' }[locale]}
        />
        <StatItem
          icon="🔥"
          value={progress.currentStreak}
          label={{ fr: 'Série', ar: 'متتالية', en: 'Streak' }[locale]}
        />
        <StatItem
          icon="🏆"
          value={progress.badges.length}
          label={{ fr: 'Badges', ar: 'شارات', en: 'Badges' }[locale]}
        />
      </div>

      {/* Badges */}
      {progress.badges.length > 0 && (
        <div>
          <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
            {locale === 'ar' ? 'الشارات' : locale === 'en' ? 'Badges' : 'Badges'}
          </h4>
          <div className="flex flex-wrap gap-2">
            {progress.badges.slice(0, 6).map((badge) => (
              <div
                key={badge.id}
                className="group relative"
                title={getText(badge.name, locale)}
              >
                <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-xl cursor-pointer hover:scale-110 transition-transform">
                  {badge.icon}
                </div>
                {/* Tooltip */}
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                  {getText(badge.name, locale)}
                </div>
              </div>
            ))}
            {progress.badges.length > 6 && (
              <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-sm text-gray-600 dark:text-gray-400">
                +{progress.badges.length - 6}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

interface StatItemProps {
  icon: string;
  value: number;
  label: string;
}

function StatItem({ icon, value, label }: StatItemProps) {
  return (
    <div className="text-center">
      <div className="text-xl mb-1">{icon}</div>
      <div className="text-xl font-bold text-gray-900 dark:text-white">{value}</div>
      <div className="text-xs text-gray-500 dark:text-gray-400">{label}</div>
    </div>
  );
}

export default ProgressWidget;
