'use client';

import { QuizResult as QuizResultType, Quiz, MedalType, LocalizedText } from '@/lib/data/quizzes/types';
import { cn } from '@/lib/utils';

type Locale = 'fr' | 'ar' | 'en';

interface QuizResultProps {
  result: QuizResultType;
  quiz: Quiz;
  locale: Locale;
  onRetry?: () => void;
  onContinue?: () => void;
}

function getText(text: LocalizedText, locale: Locale): string {
  return text[locale] || text.fr;
}

export function QuizResult({
  result,
  quiz,
  locale,
  onRetry,
  onContinue,
}: QuizResultProps) {
  const isRtl = locale === 'ar';

  const getMedalEmoji = (medal: MedalType) => {
    switch (medal) {
      case 'gold':
        return '🥇';
      case 'silver':
        return '🥈';
      case 'bronze':
        return '🥉';
      default:
        return '';
    }
  };

  const getMedalText = (medal: MedalType) => {
    const texts = {
      gold: { fr: 'Or', ar: 'ذهبية', en: 'Gold' },
      silver: { fr: 'Argent', ar: 'فضية', en: 'Silver' },
      bronze: { fr: 'Bronze', ar: 'برونزية', en: 'Bronze' },
      none: { fr: '', ar: '', en: '' },
    };
    return texts[medal][locale];
  };

  const getResultMessage = () => {
    if (result.percentage >= 95) {
      return {
        fr: 'Excellent ! Maîtrise parfaite !',
        ar: 'ممتاز! إتقان تام!',
        en: 'Excellent! Perfect mastery!',
      };
    }
    if (result.percentage >= 85) {
      return {
        fr: 'Très bien ! Excellente compréhension !',
        ar: 'جيد جداً! فهم ممتاز!',
        en: 'Very good! Excellent understanding!',
      };
    }
    if (result.percentage >= 70) {
      return {
        fr: 'Bien ! Vous avez réussi !',
        ar: 'جيد! لقد نجحت!',
        en: 'Good! You passed!',
      };
    }
    if (result.percentage >= 50) {
      return {
        fr: 'Continuez vos efforts !',
        ar: 'واصل مجهودك!',
        en: 'Keep up your efforts!',
      };
    }
    return {
      fr: 'Révisez et réessayez !',
      ar: 'راجع وحاول مرة أخرى!',
      en: 'Review and try again!',
    };
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const correctAnswers = result.answers.filter((a) => a.isCorrect).length;
  const totalQuestions = result.answers.length;

  return (
    <div className="max-w-2xl mx-auto" dir={isRtl ? 'rtl' : 'ltr'}>
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          {locale === 'ar' ? 'نتيجة الاختبار' : locale === 'en' ? 'Quiz Result' : 'Résultat du Quiz'}
        </h2>
        <p className="text-gray-600 dark:text-gray-400">{getText(quiz.title, locale)}</p>
      </div>

      {/* Score Circle */}
      <div className="flex justify-center mb-8">
        <div
          className={cn(
            'relative w-48 h-48 rounded-full flex items-center justify-center',
            result.passed
              ? 'bg-gradient-to-br from-green-100 to-green-200 dark:from-green-900/30 dark:to-green-800/30'
              : 'bg-gradient-to-br from-red-100 to-red-200 dark:from-red-900/30 dark:to-red-800/30'
          )}
        >
          <div className="text-center">
            <div
              className={cn(
                'text-5xl font-bold',
                result.passed
                  ? 'text-green-600 dark:text-green-400'
                  : 'text-red-600 dark:text-red-400'
              )}
            >
              {result.percentage}%
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              {result.score}/{result.maxScore}{' '}
              {locale === 'ar' ? 'نقطة' : locale === 'en' ? 'pts' : 'pts'}
            </div>
          </div>

          {/* Medal */}
          {result.medal !== 'none' && (
            <div className="absolute -top-4 -right-4 text-5xl">{getMedalEmoji(result.medal)}</div>
          )}
        </div>
      </div>

      {/* Result Message */}
      <div
        className={cn(
          'text-center text-xl font-medium mb-8',
          result.passed ? 'text-green-600 dark:text-green-400' : 'text-orange-600 dark:text-orange-400'
        )}
      >
        {getResultMessage()[locale]}
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <StatCard
          label={{ fr: 'Bonnes réponses', ar: 'إجابات صحيحة', en: 'Correct answers' }[locale]}
          value={`${correctAnswers}/${totalQuestions}`}
          icon="✓"
          color="green"
        />
        <StatCard
          label={{ fr: 'Temps', ar: 'الوقت', en: 'Time' }[locale]}
          value={formatTime(result.timeSpent)}
          icon="⏱"
          color="blue"
        />
        <StatCard
          label={{ fr: 'XP gagnés', ar: 'نقاط الخبرة', en: 'XP earned' }[locale]}
          value={`+${result.xpEarned}`}
          icon="⭐"
          color="yellow"
        />
        <StatCard
          label={{ fr: 'Médaille', ar: 'ميدالية', en: 'Medal' }[locale]}
          value={result.medal !== 'none' ? getMedalText(result.medal) : '-'}
          icon={getMedalEmoji(result.medal) || '🎯'}
          color="purple"
        />
      </div>

      {/* Passing threshold info */}
      <div className="text-center text-sm text-gray-500 dark:text-gray-400 mb-8">
        {locale === 'ar'
          ? `الحد الأدنى للنجاح: ${quiz.passingScore}%`
          : locale === 'en'
          ? `Passing score: ${quiz.passingScore}%`
          : `Score de passage : ${quiz.passingScore}%`}
      </div>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        {!result.passed && result.attemptNumber < quiz.maxAttempts && onRetry && (
          <button
            onClick={onRetry}
            className="px-8 py-3 rounded-xl bg-primary-600 text-white font-medium hover:bg-primary-700 transition-colors"
          >
            {locale === 'ar' ? 'إعادة المحاولة' : locale === 'en' ? 'Try Again' : 'Réessayer'}
          </button>
        )}
        {onContinue && (
          <button
            onClick={onContinue}
            className={cn(
              'px-8 py-3 rounded-xl font-medium transition-colors',
              result.passed
                ? 'bg-green-600 text-white hover:bg-green-700'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300'
            )}
          >
            {locale === 'ar' ? 'متابعة' : locale === 'en' ? 'Continue' : 'Continuer'}
          </button>
        )}
      </div>

      {/* Attempts info */}
      {result.attemptNumber < quiz.maxAttempts && (
        <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-4">
          {locale === 'ar'
            ? `المحاولة ${result.attemptNumber} من ${quiz.maxAttempts}`
            : locale === 'en'
            ? `Attempt ${result.attemptNumber} of ${quiz.maxAttempts}`
            : `Tentative ${result.attemptNumber} sur ${quiz.maxAttempts}`}
        </p>
      )}
    </div>
  );
}

interface StatCardProps {
  label: string;
  value: string;
  icon: string;
  color: 'green' | 'blue' | 'yellow' | 'purple';
}

function StatCard({ label, value, icon, color }: StatCardProps) {
  const colorClasses = {
    green: 'bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400',
    blue: 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400',
    yellow: 'bg-yellow-50 dark:bg-yellow-900/20 text-yellow-600 dark:text-yellow-400',
    purple: 'bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400',
  };

  return (
    <div className={cn('p-4 rounded-xl text-center', colorClasses[color])}>
      <div className="text-2xl mb-1">{icon}</div>
      <div className="font-bold text-lg">{value}</div>
      <div className="text-xs opacity-80">{label}</div>
    </div>
  );
}

export default QuizResult;
