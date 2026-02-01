'use client';

/**
 * Composant d'Examen Académique
 * 
 * Interface complète pour passer un examen avec :
 * - Chronomètre compte à rebours
 * - Navigation entre questions
 * - Sauvegarde des réponses
 * - Système de notation
 * - Résultats détaillés
 */

import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import {
  ExamConfig,
  ExamQuestion,
  ExamResult,
  ExamAnswer,
  GradeType,
  calculateGrade,
  formatTime,
  generateResultId,
  gradeLabels,
  gradeEmojis,
  gradeColors,
  prepareExamQuestions,
  saveSeenQuestionIds,
} from '@/lib/data/exams/types';

// ============================================
// Types
// ============================================

type Language = 'fr' | 'ar' | 'en';
type ExamStep = 'intro' | 'exam' | 'review' | 'results';

interface AcademicExamProps {
  exam: ExamConfig;
  language?: Language;
  onComplete?: (result: ExamResult) => void;
}

// ============================================
// Hook pour le chronomètre
// ============================================

function useCountdown(initialSeconds: number, onComplete: () => void) {
  const [seconds, setSeconds] = useState(initialSeconds);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning || seconds <= 0) return;

    const interval = setInterval(() => {
      setSeconds((prev) => {
        if (prev <= 1) {
          setIsRunning(false);
          onComplete();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning, seconds, onComplete]);

  const start = useCallback(() => setIsRunning(true), []);
  const pause = useCallback(() => setIsRunning(false), []);
  const reset = useCallback(() => setSeconds(initialSeconds), [initialSeconds]);

  return { seconds, isRunning, start, pause, reset, formatTime: () => formatTime(seconds) };
}

// ============================================
// Composant Principal
// ============================================

export default function AcademicExam({
  exam,
  language = 'fr',
  onComplete,
}: AcademicExamProps) {
  const [step, setStep] = useState<ExamStep>('intro');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Map<string, number>>(new Map());
  const [result, setResult] = useState<ExamResult | null>(null);
  const [startTime, setStartTime] = useState<Date | null>(null);
  const [questionStartTime, setQuestionStartTime] = useState<Date | null>(null);
  const [timePerQuestion, setTimePerQuestion] = useState<Map<string, number>>(new Map());

  // Préparer les questions avec sélection aléatoire depuis le pool
  // Cette fonction utilise le questionPool si disponible,
  // sélectionne aléatoirement les questions,
  // évite les questions déjà vues, et mélange l'ordre
  const questions = useMemo(() => {
    return prepareExamQuestions(exam);
  }, [exam]);

  const currentQuestion = questions[currentIndex];
  const totalQuestions = questions.length;
  const answeredCount = answers.size;

  // Chronomètre
  const countdown = useCountdown(exam.duration * 60, () => {
    handleSubmit();
  });

  // Démarrer l'examen
  const handleStart = useCallback(() => {
    setStep('exam');
    setStartTime(new Date());
    setQuestionStartTime(new Date());
    countdown.start();
  }, [countdown]);

  // Sélectionner une réponse
  const handleSelectAnswer = useCallback((optionIndex: number) => {
    setAnswers((prev) => new Map(prev).set(currentQuestion.id, optionIndex));
  }, [currentQuestion?.id]);

  // Navigation
  const handleNext = useCallback(() => {
    // Enregistrer le temps passé sur la question
    if (questionStartTime && currentQuestion) {
      const timeSpent = Math.round((new Date().getTime() - questionStartTime.getTime()) / 1000);
      setTimePerQuestion((prev) => new Map(prev).set(currentQuestion.id, timeSpent));
    }

    if (currentIndex < totalQuestions - 1) {
      setCurrentIndex((prev) => prev + 1);
      setQuestionStartTime(new Date());
    }
  }, [currentIndex, totalQuestions, questionStartTime, currentQuestion]);

  const handlePrevious = useCallback(() => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
      setQuestionStartTime(new Date());
    }
  }, [currentIndex]);

  const handleGoToQuestion = useCallback((index: number) => {
    setCurrentIndex(index);
    setQuestionStartTime(new Date());
  }, []);

  // Soumettre l'examen
  const handleSubmit = useCallback(() => {
    countdown.pause();

    // Calculer les résultats
    const examAnswers: ExamAnswer[] = questions.map((q) => {
      const selectedAnswer = answers.get(q.id);
      const isCorrect = selectedAnswer === q.correctAnswer;
      return {
        questionId: q.id,
        selectedAnswer: selectedAnswer ?? -1,
        isCorrect,
        points: isCorrect ? q.points : 0,
        timeSpent: timePerQuestion.get(q.id) ?? 0,
      };
    });

    const totalScore = examAnswers.reduce((sum, a) => sum + a.points, 0);
    const maxScore = questions.reduce((sum, q) => sum + q.points, 0);
    const percentage = Math.round((totalScore / maxScore) * 100);
    const grade = calculateGrade(percentage);

    // Analyse par catégorie
    const categoryScores: Record<string, { correct: number; total: number; percentage: number }> = {};
    for (const q of questions) {
      if (!categoryScores[q.category]) {
        categoryScores[q.category] = { correct: 0, total: 0, percentage: 0 };
      }
      categoryScores[q.category].total++;
      const answer = examAnswers.find((a) => a.questionId === q.id);
      if (answer?.isCorrect) {
        categoryScores[q.category].correct++;
      }
    }
    for (const cat of Object.keys(categoryScores)) {
      categoryScores[cat].percentage = Math.round(
        (categoryScores[cat].correct / categoryScores[cat].total) * 100
      );
    }

    const examResult: ExamResult = {
      id: generateResultId(),
      examId: exam.id,
      date: new Date().toISOString(),
      duration: startTime ? Math.round((new Date().getTime() - startTime.getTime()) / 1000) : 0,
      answers: examAnswers,
      totalScore,
      maxScore,
      percentage,
      grade,
      passed: percentage >= exam.passingScore,
      attemptNumber: 1, // À gérer avec le stockage
      categoryScores,
    };

    setResult(examResult);
    setStep('results');
    onComplete?.(examResult);

    // Sauvegarder les IDs des questions posées pour éviter répétition
    const questionIds = questions.map(q => q.id);
    saveSeenQuestionIds(exam.id, questionIds);

    // Sauvegarder dans localStorage
    saveResult(examResult);
  }, [answers, questions, exam, countdown, startTime, timePerQuestion, onComplete]);

  // Sauvegarder le résultat
  const saveResult = (examResult: ExamResult) => {
    try {
      const key = `rabbi-zidni-exam-${exam.id}`;
      const existing = localStorage.getItem(key);
      const results: ExamResult[] = existing ? JSON.parse(existing) : [];
      results.push(examResult);
      localStorage.setItem(key, JSON.stringify(results));
    } catch (e) {
      console.error('Erreur de sauvegarde:', e);
    }
  };

  // Aller à la révision
  const handleReview = useCallback(() => {
    setStep('review');
    setCurrentIndex(0);
  }, []);

  // Recommencer
  const handleRestart = useCallback(() => {
    setStep('intro');
    setCurrentIndex(0);
    setAnswers(new Map());
    setResult(null);
    setStartTime(null);
    setTimePerQuestion(new Map());
    countdown.reset();
  }, [countdown]);

  // Rendu conditionnel
  if (step === 'intro') {
    return <IntroScreen exam={exam} language={language} onStart={handleStart} />;
  }

  if (step === 'results' && result) {
    return (
      <ResultsScreen
        exam={exam}
        result={result}
        language={language}
        onReview={handleReview}
        onRestart={handleRestart}
      />
    );
  }

  if (step === 'review' && result) {
    return (
      <ReviewScreen
        exam={exam}
        questions={questions}
        result={result}
        language={language}
        currentIndex={currentIndex}
        onNavigate={handleGoToQuestion}
        onBack={() => setStep('results')}
      />
    );
  }

  // Écran d'examen
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="max-w-4xl mx-auto px-4 py-6">
        {/* Header avec chronomètre */}
        <div className="sticky top-0 z-10 bg-background/95 backdrop-blur-sm border-b pb-4 mb-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-lg font-semibold truncate">{exam.title[language]}</h1>
              <p className="text-sm text-muted-foreground">
                Question {currentIndex + 1} / {totalQuestions}
              </p>
            </div>

            {/* Chronomètre */}
            <div className={`flex items-center gap-2 px-4 py-2 rounded-xl font-mono text-lg ${
              countdown.seconds < 300 ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400' :
              countdown.seconds < 600 ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400' :
              'bg-muted'
            }`}>
              <span>⏱️</span>
              <span className="font-bold">{countdown.formatTime()}</span>
            </div>
          </div>

          {/* Barre de progression */}
          <div className="mt-3 h-2 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-primary transition-all duration-300"
              style={{ width: `${(answeredCount / totalQuestions) * 100}%` }}
            />
          </div>
        </div>

        {/* Navigation rapide */}
        <div className="flex flex-wrap gap-2 mb-6">
          {questions.map((q, idx) => (
            <button
              key={q.id}
              onClick={() => handleGoToQuestion(idx)}
              className={`w-8 h-8 rounded-lg text-sm font-medium transition-all ${
                idx === currentIndex
                  ? 'bg-primary text-primary-foreground'
                  : answers.has(q.id)
                  ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                  : 'bg-muted hover:bg-muted/80'
              }`}
            >
              {idx + 1}
            </button>
          ))}
        </div>

        {/* Question */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestion?.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.2 }}
          >
            <div className="bg-card rounded-2xl shadow-lg border p-6 mb-6">
              {/* Badge catégorie et difficulté */}
              <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                  {currentQuestion?.category}
                </span>
                <span className={`px-2 py-0.5 rounded text-xs ${
                  currentQuestion?.difficulty === 'easy' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' :
                  currentQuestion?.difficulty === 'medium' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400' :
                  'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
                }`}>
                  {currentQuestion?.points} pts
                </span>
              </div>

              {/* Question */}
              <h2 className="text-xl font-semibold mb-6 leading-relaxed">
                {currentQuestion?.question[language]}
              </h2>

              {/* Options */}
              <div className="space-y-3">
                {currentQuestion?.options.map((option, index) => (
                  <button
                    key={option.id}
                    onClick={() => handleSelectAnswer(index)}
                    className={`w-full p-4 rounded-xl border-2 text-left transition-all duration-200 ${
                      answers.get(currentQuestion.id) === index
                        ? 'border-primary bg-primary/5 shadow-md'
                        : 'border-border hover:border-primary/50 hover:bg-muted/50'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                        answers.get(currentQuestion.id) === index
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-muted text-muted-foreground'
                      }`}>
                        {String.fromCharCode(65 + index)}
                      </span>
                      <span className="flex-1 pt-1">{option.text[language]}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between">
              <button
                onClick={handlePrevious}
                disabled={currentIndex === 0}
                className={`px-6 py-3 rounded-xl font-medium transition-all ${
                  currentIndex === 0
                    ? 'bg-muted text-muted-foreground cursor-not-allowed'
                    : 'bg-muted hover:bg-muted/80'
                }`}
              >
                ← {language === 'fr' ? 'Précédent' : language === 'ar' ? 'السابق' : 'Previous'}
              </button>

              <div className="flex gap-3">
                {currentIndex < totalQuestions - 1 ? (
                  <button
                    onClick={handleNext}
                    className="px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:bg-primary/90"
                  >
                    {language === 'fr' ? 'Suivant' : language === 'ar' ? 'التالي' : 'Next'} →
                  </button>
                ) : (
                  <button
                    onClick={handleSubmit}
                    disabled={answeredCount < totalQuestions}
                    className={`px-8 py-3 rounded-xl font-semibold transition-all ${
                      answeredCount >= totalQuestions
                        ? 'bg-green-600 text-white hover:bg-green-700 shadow-lg'
                        : 'bg-muted text-muted-foreground cursor-not-allowed'
                    }`}
                  >
                    {language === 'fr' ? `Soumettre (${answeredCount}/${totalQuestions})` :
                     language === 'ar' ? `إرسال (${answeredCount}/${totalQuestions})` :
                     `Submit (${answeredCount}/${totalQuestions})`}
                  </button>
                )}
              </div>
            </div>

            {/* Bouton soumettre si pas toutes répondues */}
            {answeredCount > 0 && answeredCount < totalQuestions && (
              <div className="mt-4 text-center">
                <button
                  onClick={handleSubmit}
                  className="text-sm text-muted-foreground hover:text-foreground underline"
                >
                  {language === 'fr' ? 'Soumettre avec réponses partielles' :
                   language === 'ar' ? 'إرسال مع إجابات جزئية' :
                   'Submit with partial answers'}
                </button>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

// ============================================
// Écran d'Introduction
// ============================================

function IntroScreen({
  exam,
  language,
  onStart,
}: {
  exam: ExamConfig;
  language: Language;
  onStart: () => void;
}) {
  const content = {
    fr: {
      duration: 'Durée',
      minutes: 'minutes',
      questions: 'Questions',
      passingScore: 'Score requis',
      attempts: 'Tentatives max',
      certificate: 'Certificat',
      yes: 'Oui',
      no: 'Non',
      start: 'Commencer l\'examen',
      warning: 'Une fois commencé, le chronomètre ne peut pas être mis en pause.',
    },
    ar: {
      duration: 'المدة',
      minutes: 'دقيقة',
      questions: 'الأسئلة',
      passingScore: 'درجة النجاح',
      attempts: 'المحاولات',
      certificate: 'شهادة',
      yes: 'نعم',
      no: 'لا',
      start: 'ابدأ الامتحان',
      warning: 'بمجرد البدء، لا يمكن إيقاف المؤقت.',
    },
    en: {
      duration: 'Duration',
      minutes: 'minutes',
      questions: 'Questions',
      passingScore: 'Passing score',
      attempts: 'Max attempts',
      certificate: 'Certificate',
      yes: 'Yes',
      no: 'No',
      start: 'Start Exam',
      warning: 'Once started, the timer cannot be paused.',
    },
  };

  const c = content[language];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 via-background to-secondary/10 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-2xl w-full"
      >
        <div className="bg-card rounded-3xl shadow-2xl border overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground p-8 text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring' }}
              className="w-20 h-20 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center text-4xl"
            >
              📋
            </motion.div>
            <h1 className="text-2xl font-bold mb-2">{exam.title[language]}</h1>
            <p className="opacity-90">{exam.description[language]}</p>
          </div>

          {/* Infos */}
          <div className="p-8">
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-muted/50 rounded-xl p-4 text-center">
                <p className="text-2xl font-bold text-primary">{exam.duration}</p>
                <p className="text-sm text-muted-foreground">{c.duration} ({c.minutes})</p>
              </div>
              <div className="bg-muted/50 rounded-xl p-4 text-center">
                <p className="text-2xl font-bold text-primary">
                  {exam.questionsPerExam || (exam.questionPool?.length ?? exam.questions?.length ?? 0)}
                </p>
                <p className="text-sm text-muted-foreground">{c.questions}</p>
              </div>
              <div className="bg-muted/50 rounded-xl p-4 text-center">
                <p className="text-2xl font-bold text-primary">{exam.passingScore}%</p>
                <p className="text-sm text-muted-foreground">{c.passingScore}</p>
              </div>
              <div className="bg-muted/50 rounded-xl p-4 text-center">
                <p className="text-2xl font-bold text-primary">{exam.hasCertificate ? '✅' : '❌'}</p>
                <p className="text-sm text-muted-foreground">{c.certificate}</p>
              </div>
            </div>

            {/* Instructions */}
            <div className="bg-muted/30 rounded-xl p-4 mb-6">
              <p className="text-sm">{exam.instructions[language]}</p>
            </div>

            {/* Avertissement */}
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-xl p-4 mb-6">
              <p className="text-sm text-yellow-700 dark:text-yellow-400 flex items-center gap-2">
                <span>⚠️</span> {c.warning}
              </p>
            </div>

            {/* Bouton */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onStart}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-primary to-primary/80 text-primary-foreground font-semibold text-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              {c.start}
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

// ============================================
// Écran des Résultats
// ============================================

function ResultsScreen({
  exam,
  result,
  language,
  onReview,
  onRestart,
}: {
  exam: ExamConfig;
  result: ExamResult;
  language: Language;
  onReview: () => void;
  onRestart: () => void;
}) {
  const content = {
    fr: {
      title: 'Résultats de l\'examen',
      score: 'Score',
      time: 'Temps',
      minutes: 'min',
      passed: 'Félicitations ! Vous avez réussi !',
      failed: 'Vous n\'avez pas atteint le score requis.',
      review: 'Voir les réponses',
      restart: 'Refaire l\'examen',
      certificate: 'Télécharger le certificat',
      categoryResults: 'Résultats par catégorie',
      backToCourses: 'Retour aux cours',
    },
    ar: {
      title: 'نتائج الامتحان',
      score: 'النتيجة',
      time: 'الوقت',
      minutes: 'دقيقة',
      passed: 'تهانينا! لقد نجحت!',
      failed: 'لم تحقق الدرجة المطلوبة.',
      review: 'مراجعة الإجابات',
      restart: 'إعادة الامتحان',
      certificate: 'تحميل الشهادة',
      categoryResults: 'النتائج حسب الفئة',
      backToCourses: 'العودة للدورات',
    },
    en: {
      title: 'Exam Results',
      score: 'Score',
      time: 'Time',
      minutes: 'min',
      passed: 'Congratulations! You passed!',
      failed: 'You did not reach the required score.',
      review: 'Review answers',
      restart: 'Retake exam',
      certificate: 'Download certificate',
      categoryResults: 'Results by category',
      backToCourses: 'Back to courses',
    },
  };

  const c = content[language];
  const durationMinutes = Math.round(result.duration / 60);

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-8 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-2xl font-bold mb-6">{c.title}</h1>

          {/* Grade Card */}
          <div className={`inline-block bg-gradient-to-r ${gradeColors[result.grade]} rounded-3xl p-8 text-white shadow-2xl`}>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring' }}
              className="text-6xl mb-4"
            >
              {gradeEmojis[result.grade]}
            </motion.div>
            <h2 className="text-3xl font-bold mb-2">
              {gradeLabels[result.grade][language]}
            </h2>
            <p className="text-5xl font-bold mb-4">{result.percentage}%</p>
            <div className="flex justify-center gap-8 text-sm">
              <div>
                <p className="text-white/70">{c.score}</p>
                <p className="text-xl font-bold">{result.totalScore}/{result.maxScore}</p>
              </div>
              <div>
                <p className="text-white/70">{c.time}</p>
                <p className="text-xl font-bold">{durationMinutes} {c.minutes}</p>
              </div>
            </div>
          </div>

          {/* Message */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className={`mt-6 text-lg font-medium ${
              result.passed ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
            }`}
          >
            {result.passed ? c.passed : c.failed}
          </motion.p>
        </motion.div>

        {/* Category Results */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-card rounded-2xl border p-6 mb-8"
        >
          <h3 className="font-semibold mb-4">{c.categoryResults}</h3>
          <div className="space-y-3">
            {Object.entries(result.categoryScores).map(([category, scores]) => (
              <div key={category} className="flex items-center gap-4">
                <span className="w-24 text-sm font-medium capitalize">{category}</span>
                <div className="flex-1 h-3 bg-muted rounded-full overflow-hidden">
                  <div
                    className={`h-full transition-all duration-500 ${
                      scores.percentage >= 70 ? 'bg-green-500' :
                      scores.percentage >= 50 ? 'bg-yellow-500' :
                      'bg-red-500'
                    }`}
                    style={{ width: `${scores.percentage}%` }}
                  />
                </div>
                <span className="w-20 text-sm text-right">
                  {scores.correct}/{scores.total} ({scores.percentage}%)
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={onReview}
            className="px-6 py-3 rounded-xl border border-primary text-primary hover:bg-primary/5 transition-colors"
          >
            {c.review}
          </button>
          <button
            onClick={onRestart}
            className="px-6 py-3 rounded-xl bg-muted hover:bg-muted/80 transition-colors"
          >
            {c.restart}
          </button>
          {result.passed && exam.hasCertificate && (
            <button className="px-8 py-3 rounded-xl bg-gradient-to-r from-yellow-500 to-amber-500 text-white font-semibold shadow-lg hover:shadow-xl transition-shadow">
              🏆 {c.certificate}
            </button>
          )}
        </motion.div>

        <div className="mt-6 text-center">
          <Link href="/courses" className="text-sm text-muted-foreground hover:text-foreground">
            ← {c.backToCourses}
          </Link>
        </div>
      </div>
    </div>
  );
}

// ============================================
// Écran de Révision
// ============================================

function ReviewScreen({
  exam,
  questions,
  result,
  language,
  currentIndex,
  onNavigate,
  onBack,
}: {
  exam: ExamConfig;
  questions: ExamQuestion[];
  result: ExamResult;
  language: Language;
  currentIndex: number;
  onNavigate: (index: number) => void;
  onBack: () => void;
}) {
  const question = questions[currentIndex];
  const answer = result.answers.find((a) => a.questionId === question.id);

  const content = {
    fr: {
      review: 'Révision des réponses',
      yourAnswer: 'Votre réponse',
      correctAnswer: 'Réponse correcte',
      explanation: 'Explication',
      back: 'Retour aux résultats',
    },
    ar: {
      review: 'مراجعة الإجابات',
      yourAnswer: 'إجابتك',
      correctAnswer: 'الإجابة الصحيحة',
      explanation: 'التفسير',
      back: 'العودة للنتائج',
    },
    en: {
      review: 'Answer Review',
      yourAnswer: 'Your answer',
      correctAnswer: 'Correct answer',
      explanation: 'Explanation',
      back: 'Back to results',
    },
  };

  const c = content[language];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-xl font-bold">{c.review}</h1>
          <button
            onClick={onBack}
            className="text-sm text-primary hover:underline"
          >
            ← {c.back}
          </button>
        </div>

        {/* Navigation */}
        <div className="flex flex-wrap gap-2 mb-6">
          {questions.map((q, idx) => {
            const a = result.answers.find((ans) => ans.questionId === q.id);
            return (
              <button
                key={q.id}
                onClick={() => onNavigate(idx)}
                className={`w-8 h-8 rounded-lg text-sm font-medium transition-all ${
                  idx === currentIndex
                    ? 'ring-2 ring-primary ring-offset-2'
                    : ''
                } ${
                  a?.isCorrect
                    ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                    : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
                }`}
              >
                {idx + 1}
              </button>
            );
          })}
        </div>

        {/* Question */}
        <div className="bg-card rounded-2xl border p-6">
          <div className="flex items-center gap-2 mb-4">
            {answer?.isCorrect ? (
              <span className="px-3 py-1 rounded-full text-sm bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                ✓ Correct
              </span>
            ) : (
              <span className="px-3 py-1 rounded-full text-sm bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400">
                ✗ Incorrect
              </span>
            )}
            <span className="text-sm text-muted-foreground">
              {question.points} pts
            </span>
          </div>

          <h2 className="text-xl font-semibold mb-6">{question.question[language]}</h2>

          <div className="space-y-3 mb-6">
            {question.options.map((option, index) => {
              const isSelected = answer?.selectedAnswer === index;
              const isCorrect = question.correctAnswer === index;

              return (
                <div
                  key={option.id}
                  className={`p-4 rounded-xl border-2 ${
                    isCorrect
                      ? 'border-green-500 bg-green-50 dark:bg-green-900/20'
                      : isSelected
                      ? 'border-red-500 bg-red-50 dark:bg-red-900/20'
                      : 'border-border'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                      isCorrect
                        ? 'bg-green-500 text-white'
                        : isSelected
                        ? 'bg-red-500 text-white'
                        : 'bg-muted'
                    }`}>
                      {isCorrect ? '✓' : isSelected ? '✗' : String.fromCharCode(65 + index)}
                    </span>
                    <span className="flex-1 pt-1">{option.text[language]}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Explanation */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-4">
            <h4 className="font-medium text-blue-700 dark:text-blue-400 mb-2">
              💡 {c.explanation}
            </h4>
            <p className="text-sm">{question.explanation[language]}</p>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between mt-6">
          <button
            onClick={() => onNavigate(Math.max(0, currentIndex - 1))}
            disabled={currentIndex === 0}
            className={`px-6 py-2 rounded-xl ${
              currentIndex === 0
                ? 'bg-muted text-muted-foreground cursor-not-allowed'
                : 'bg-muted hover:bg-muted/80'
            }`}
          >
            ← Précédent
          </button>
          <button
            onClick={() => onNavigate(Math.min(questions.length - 1, currentIndex + 1))}
            disabled={currentIndex === questions.length - 1}
            className={`px-6 py-2 rounded-xl ${
              currentIndex === questions.length - 1
                ? 'bg-muted text-muted-foreground cursor-not-allowed'
                : 'bg-primary text-primary-foreground hover:bg-primary/90'
            }`}
          >
            Suivant →
          </button>
        </div>
      </div>
    </div>
  );
}
