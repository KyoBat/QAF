'use client';

import { useState } from 'react';
import { Question, QuizOption, LocalizedText } from '@/lib/data/quizzes/types';
import { cn } from '@/lib/utils';

type Locale = 'fr' | 'ar' | 'en';

interface QuestionCardProps {
  question: Question;
  locale: Locale;
  onAnswer: (answer: number | number[] | boolean | string | string[][]) => void;
  showResult?: boolean;
  userAnswer?: number | number[] | boolean | string | string[][];
  disabled?: boolean;
}

function getText(text: LocalizedText, locale: Locale): string {
  return text[locale] || text.fr;
}

export function QuestionCard({
  question,
  locale,
  onAnswer,
  showResult = false,
  userAnswer,
  disabled = false,
}: QuestionCardProps) {
  const [selectedOptions, setSelectedOptions] = useState<number[]>(
    Array.isArray(userAnswer) && typeof userAnswer[0] === 'number'
      ? (userAnswer as number[])
      : typeof userAnswer === 'number'
      ? [userAnswer]
      : []
  );

  const isRtl = locale === 'ar';

  const handleSingleSelect = (index: number) => {
    if (disabled) return;
    setSelectedOptions([index]);
    onAnswer(index);
  };

  const handleMultipleSelect = (index: number) => {
    if (disabled) return;
    const newSelection = selectedOptions.includes(index)
      ? selectedOptions.filter((i) => i !== index)
      : [...selectedOptions, index];
    setSelectedOptions(newSelection);
    onAnswer(newSelection);
  };

  const handleBooleanSelect = (value: boolean) => {
    if (disabled) return;
    setSelectedOptions([value ? 0 : 1]);
    onAnswer(value);
  };

  const getOptionStyle = (index: number, option: QuizOption) => {
    if (!showResult) {
      return selectedOptions.includes(index)
        ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20'
        : 'border-gray-200 dark:border-gray-700 hover:border-primary-300';
    }

    const isCorrect =
      question.type === 'single'
        ? question.correctAnswer === index
        : question.type === 'multiple'
        ? (question.correctAnswer as number[]).includes(index)
        : false;

    const isSelected = selectedOptions.includes(index);

    if (isCorrect) {
      return 'border-green-500 bg-green-50 dark:bg-green-900/20';
    }
    if (isSelected && !isCorrect) {
      return 'border-red-500 bg-red-50 dark:bg-red-900/20';
    }
    return 'border-gray-200 dark:border-gray-700 opacity-60';
  };

  const renderOptions = () => {
    if (!question.options) return null;

    return (
      <div className="space-y-3">
        {question.options.map((option, index) => (
          <button
            key={option.id}
            onClick={() =>
              question.type === 'multiple'
                ? handleMultipleSelect(index)
                : handleSingleSelect(index)
            }
            disabled={disabled}
            className={cn(
              'w-full p-4 rounded-xl border-2 text-start transition-all',
              'flex items-center gap-3',
              getOptionStyle(index, option),
              disabled ? 'cursor-not-allowed' : 'cursor-pointer'
            )}
            dir={isRtl ? 'rtl' : 'ltr'}
          >
            <span
              className={cn(
                'flex-shrink-0 w-8 h-8 rounded-full border-2 flex items-center justify-center text-sm font-medium',
                selectedOptions.includes(index)
                  ? 'border-primary-500 bg-primary-500 text-white'
                  : 'border-gray-300 dark:border-gray-600'
              )}
            >
              {question.type === 'multiple' ? (
                selectedOptions.includes(index) ? (
                  <CheckIcon />
                ) : null
              ) : (
                String.fromCharCode(65 + index)
              )}
            </span>
            <span className="flex-1">{getText(option.text, locale)}</span>
            {showResult && (
              <>
                {question.type === 'single' && question.correctAnswer === index && (
                  <CheckCircleIcon className="text-green-500" />
                )}
                {question.type === 'multiple' &&
                  (question.correctAnswer as number[]).includes(index) && (
                    <CheckCircleIcon className="text-green-500" />
                  )}
                {selectedOptions.includes(index) &&
                  ((question.type === 'single' && question.correctAnswer !== index) ||
                    (question.type === 'multiple' &&
                      !(question.correctAnswer as number[]).includes(index))) && (
                    <XCircleIcon className="text-red-500" />
                  )}
              </>
            )}
          </button>
        ))}
      </div>
    );
  };

  const renderBooleanOptions = () => (
    <div className="grid grid-cols-2 gap-4">
      {[true, false].map((value) => {
        const isSelected = selectedOptions.includes(value ? 0 : 1);
        const isCorrect = question.correctAnswer === value;

        let style = 'border-gray-200 dark:border-gray-700 hover:border-primary-300';
        if (showResult) {
          if (isCorrect) {
            style = 'border-green-500 bg-green-50 dark:bg-green-900/20';
          } else if (isSelected && !isCorrect) {
            style = 'border-red-500 bg-red-50 dark:bg-red-900/20';
          } else {
            style = 'border-gray-200 dark:border-gray-700 opacity-60';
          }
        } else if (isSelected) {
          style = 'border-primary-500 bg-primary-50 dark:bg-primary-900/20';
        }

        return (
          <button
            key={value ? 'true' : 'false'}
            onClick={() => handleBooleanSelect(value)}
            disabled={disabled}
            className={cn(
              'p-6 rounded-xl border-2 text-center transition-all font-medium text-lg',
              style,
              disabled ? 'cursor-not-allowed' : 'cursor-pointer'
            )}
          >
            {value
              ? locale === 'ar'
                ? 'صحيح'
                : locale === 'en'
                ? 'True'
                : 'Vrai'
              : locale === 'ar'
              ? 'خطأ'
              : locale === 'en'
              ? 'False'
              : 'Faux'}
          </button>
        );
      })}
    </div>
  );

  const renderOrderItems = () => {
    // Simplified order implementation - in production, use drag-and-drop
    if (!question.orderItems) return null;

    return (
      <div className="space-y-2">
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
          {locale === 'ar'
            ? 'رتب العناصر بالترتيب الصحيح'
            : locale === 'en'
            ? 'Arrange items in the correct order'
            : 'Arrangez les éléments dans le bon ordre'}
        </p>
        {question.orderItems.map((item, index) => (
          <div
            key={index}
            className="p-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800"
            dir={isRtl ? 'rtl' : 'ltr'}
          >
            <span className="font-medium text-primary-600 dark:text-primary-400 mr-2">
              {index + 1}.
            </span>
            {getText(item, locale)}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="space-y-6">
      {/* Question */}
      <div
        className={cn(
          'text-xl font-medium text-gray-900 dark:text-white',
          isRtl && 'text-right'
        )}
        dir={isRtl ? 'rtl' : 'ltr'}
      >
        {getText(question.question, locale)}
      </div>

      {/* Difficulty badge */}
      <div className="flex items-center gap-2">
        <span
          className={cn(
            'px-3 py-1 rounded-full text-xs font-medium',
            question.difficulty === 'easy'
              ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
              : question.difficulty === 'medium'
              ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400'
              : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
          )}
        >
          {question.difficulty === 'easy'
            ? locale === 'ar'
              ? 'سهل'
              : locale === 'en'
              ? 'Easy'
              : 'Facile'
            : question.difficulty === 'medium'
            ? locale === 'ar'
              ? 'متوسط'
              : locale === 'en'
              ? 'Medium'
              : 'Moyen'
            : locale === 'ar'
            ? 'صعب'
            : locale === 'en'
            ? 'Hard'
            : 'Difficile'}
        </span>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {question.points} {locale === 'ar' ? 'نقطة' : locale === 'en' ? 'pts' : 'pts'}
        </span>
      </div>

      {/* Options */}
      {(question.type === 'single' || question.type === 'multiple') && renderOptions()}
      {question.type === 'boolean' && renderBooleanOptions()}
      {question.type === 'order' && renderOrderItems()}

      {/* Explanation (when showing result) */}
      {showResult && (
        <div
          className="mt-6 p-4 rounded-xl bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800"
          dir={isRtl ? 'rtl' : 'ltr'}
        >
          <h4 className="font-medium text-blue-800 dark:text-blue-300 mb-2">
            {locale === 'ar' ? 'التوضيح' : locale === 'en' ? 'Explanation' : 'Explication'}
          </h4>
          <p className="text-blue-700 dark:text-blue-400">
            {getText(question.explanation, locale)}
          </p>
        </div>
      )}
    </div>
  );
}

// Icons
function CheckIcon() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
    </svg>
  );
}

function CheckCircleIcon({ className }: { className?: string }) {
  return (
    <svg className={cn('w-6 h-6', className)} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
}

function XCircleIcon({ className }: { className?: string }) {
  return (
    <svg className={cn('w-6 h-6', className)} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
}

export default QuestionCard;
