'use client';

/**
 * Composant d'Examen de Placement
 * 
 * Interface utilisateur élégante et intuitive pour évaluer
 * le niveau de l'étudiant et recommander des cours.
 */

import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { 
  quizPlacement, 
  allPlacementQuestions 
} from '@/lib/data/quizzes/placement/quiz-placement';
import { 
  analyzeResults, 
  PlacementResult, 
  QuizAnswer,
  levelLabels,
  categoryLabels 
} from '@/lib/data/quizzes/placement/recommendation-engine';
import { Question } from '@/lib/data/quizzes/types';

// ============================================
// Types locaux
// ============================================

type Language = 'fr' | 'ar' | 'en';

interface PlacementExamProps {
  language?: Language;
  onComplete?: (result: PlacementResult) => void;
}

type ExamStep = 'intro' | 'exam' | 'results';

// ============================================
// Hook pour sélectionner des questions aléatoires
// ============================================

function useRandomQuestions(count: number = 18): Question[] {
  return useMemo(() => {
    const categories = ['aqeedah', 'fiqh', 'seerah', 'quran', 'hadith', 'history'];
    const selected: Question[] = [];

    // Sélectionner 3 questions par catégorie (1 easy, 1 medium, 1 hard)
    for (const category of categories) {
      const catQuestions = allPlacementQuestions.filter(q => q.category === category);
      
      const easy = catQuestions.filter(q => q.difficulty === 'easy');
      const medium = catQuestions.filter(q => q.difficulty === 'medium');
      const hard = catQuestions.filter(q => q.difficulty === 'hard');

      // Ajouter une question de chaque niveau
      if (easy.length > 0) selected.push(easy[Math.floor(Math.random() * easy.length)]);
      if (medium.length > 0) selected.push(medium[Math.floor(Math.random() * medium.length)]);
      if (hard.length > 0) selected.push(hard[Math.floor(Math.random() * hard.length)]);
    }

    // Mélanger les questions
    return selected.sort(() => Math.random() - 0.5);
  }, [count]);
}

// ============================================
// Composant Principal
// ============================================

export default function PlacementExam({ 
  language = 'fr',
  onComplete 
}: PlacementExamProps) {
  const [step, setStep] = useState<ExamStep>('intro');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswer[]>([]);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [result, setResult] = useState<PlacementResult | null>(null);
  const [startTime, setStartTime] = useState<Date | null>(null);

  const questions = useRandomQuestions(18);
  const currentQuestion = questions[currentIndex];
  const progress = ((currentIndex) / questions.length) * 100;

  // Démarrer le chronomètre
  const handleStart = useCallback(() => {
    setStep('exam');
    setStartTime(new Date());
  }, []);

  // Soumettre une réponse
  const handleAnswer = useCallback(() => {
    if (selectedOption === null || !currentQuestion) return;

    const isCorrect = selectedOption === currentQuestion.correctAnswer;
    
    const answer: QuizAnswer = {
      questionId: currentQuestion.id,
      selectedAnswer: selectedOption,
      isCorrect,
      points: isCorrect ? currentQuestion.points : 0,
      category: currentQuestion.category,
    };

    setAnswers(prev => [...prev, answer]);
    setSelectedOption(null);

    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      // Fin de l'examen
      const allAnswers = [...answers, answer];
      const analysisResult = analyzeResults(allAnswers);
      setResult(analysisResult);
      setStep('results');
      onComplete?.(analysisResult);
    }
  }, [selectedOption, currentQuestion, currentIndex, questions.length, answers, onComplete]);

  // Recommencer
  const handleRestart = useCallback(() => {
    setStep('intro');
    setCurrentIndex(0);
    setAnswers([]);
    setSelectedOption(null);
    setResult(null);
    setStartTime(null);
  }, []);

  // Rendu conditionnel selon l'étape
  if (step === 'intro') {
    return <IntroScreen language={language} onStart={handleStart} />;
  }

  if (step === 'results' && result) {
    return (
      <ResultsScreen 
        language={language} 
        result={result} 
        onRestart={handleRestart}
        duration={startTime ? Math.round((new Date().getTime() - startTime.getTime()) / 60000) : 0}
      />
    );
  }

  // Écran d'examen
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="max-w-3xl mx-auto px-4 py-8">
        {/* Header avec progression */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-muted-foreground">
              Question {currentIndex + 1} / {questions.length}
            </span>
            <span className="text-sm font-medium text-primary">
              {Math.round(progress)}%
            </span>
          </div>
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-primary to-primary/80"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>

        {/* Catégorie */}
        <div className="mb-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
            {categoryLabels[currentQuestion?.category as keyof typeof categoryLabels]?.[language] || currentQuestion?.category}
          </span>
          <span className={`ml-2 inline-flex items-center px-2 py-0.5 rounded text-xs ${
            currentQuestion?.difficulty === 'easy' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' :
            currentQuestion?.difficulty === 'medium' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400' :
            'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
          }`}>
            {currentQuestion?.difficulty === 'easy' ? '⭐' : currentQuestion?.difficulty === 'medium' ? '⭐⭐' : '⭐⭐⭐'}
          </span>
        </div>

        {/* Question */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestion?.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-card rounded-2xl shadow-lg border p-6 mb-6">
              <h2 className="text-xl font-semibold mb-6 leading-relaxed">
                {currentQuestion?.question[language]}
              </h2>

              {/* Options */}
              <div className="space-y-3">
                {currentQuestion?.options?.map((option, index) => (
                  <button
                    key={option.id}
                    onClick={() => setSelectedOption(index)}
                    className={`w-full p-4 rounded-xl border-2 text-left transition-all duration-200 ${
                      selectedOption === index
                        ? 'border-primary bg-primary/5 shadow-md'
                        : 'border-border hover:border-primary/50 hover:bg-muted/50'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                        selectedOption === index
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-muted text-muted-foreground'
                      }`}>
                        {String.fromCharCode(65 + index)}
                      </span>
                      <span className="flex-1 pt-1">
                        {option.text[language]}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Bouton Suivant */}
            <div className="flex justify-end">
              <button
                onClick={handleAnswer}
                disabled={selectedOption === null}
                className={`px-8 py-3 rounded-xl font-medium transition-all duration-200 ${
                  selectedOption !== null
                    ? 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg'
                    : 'bg-muted text-muted-foreground cursor-not-allowed'
                }`}
              >
                {currentIndex < questions.length - 1 ? (
                  language === 'fr' ? 'Suivant →' : 
                  language === 'ar' ? 'التالي ←' : 'Next →'
                ) : (
                  language === 'fr' ? 'Terminer ✓' : 
                  language === 'ar' ? 'إنهاء ✓' : 'Finish ✓'
                )}
              </button>
            </div>
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
  language, 
  onStart 
}: { 
  language: Language; 
  onStart: () => void;
}) {
  const content = {
    fr: {
      title: 'Évaluation de Niveau',
      subtitle: 'Sciences Islamiques',
      description: 'Ce test évalue vos connaissances dans 6 domaines pour vous proposer un parcours d\'apprentissage personnalisé.',
      categories: [
        { icon: '🕌', name: 'Croyance (Aqeedah)' },
        { icon: '📜', name: 'Jurisprudence (Fiqh)' },
        { icon: '🌙', name: 'Biographie Prophétique' },
        { icon: '📖', name: 'Coran & Tajweed' },
        { icon: '📚', name: 'Sciences du Hadith' },
        { icon: '🏛️', name: 'Histoire Islamique' },
      ],
      info: [
        '18 questions (3 par catégorie)',
        'Environ 15-20 minutes',
        'Pas de limite de temps',
        'Répondez honnêtement',
      ],
      start: 'Commencer l\'évaluation',
    },
    ar: {
      title: 'تقييم المستوى',
      subtitle: 'العلوم الإسلامية',
      description: 'هذا الاختبار يقيّم معلوماتك في 6 مجالات لاقتراح مسار تعليمي مخصص.',
      categories: [
        { icon: '🕌', name: 'العقيدة' },
        { icon: '📜', name: 'الفقه' },
        { icon: '🌙', name: 'السيرة النبوية' },
        { icon: '📖', name: 'القرآن والتجويد' },
        { icon: '📚', name: 'علوم الحديث' },
        { icon: '🏛️', name: 'التاريخ الإسلامي' },
      ],
      info: [
        '18 سؤالاً (3 لكل مجال)',
        'حوالي 15-20 دقيقة',
        'لا حد زمني',
        'أجب بصدق',
      ],
      start: 'ابدأ التقييم',
    },
    en: {
      title: 'Level Assessment',
      subtitle: 'Islamic Sciences',
      description: 'This test evaluates your knowledge in 6 areas to suggest a personalized learning path.',
      categories: [
        { icon: '🕌', name: 'Creed (Aqeedah)' },
        { icon: '📜', name: 'Jurisprudence (Fiqh)' },
        { icon: '🌙', name: 'Prophetic Biography' },
        { icon: '📖', name: 'Quran & Tajweed' },
        { icon: '📚', name: 'Hadith Sciences' },
        { icon: '🏛️', name: 'Islamic History' },
      ],
      info: [
        '18 questions (3 per category)',
        'About 15-20 minutes',
        'No time limit',
        'Answer honestly',
      ],
      start: 'Start Assessment',
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
              📝
            </motion.div>
            <h1 className="text-3xl font-bold mb-1">{c.title}</h1>
            <p className="text-lg opacity-90">{c.subtitle}</p>
          </div>

          {/* Content */}
          <div className="p-8">
            <p className="text-muted-foreground text-center mb-8">
              {c.description}
            </p>

            {/* Catégories */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8">
              {c.categories.map((cat, index) => (
                <motion.div
                  key={cat.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="flex items-center gap-2 p-3 rounded-xl bg-muted/50"
                >
                  <span className="text-xl">{cat.icon}</span>
                  <span className="text-sm font-medium">{cat.name}</span>
                </motion.div>
              ))}
            </div>

            {/* Infos */}
            <div className="bg-muted/30 rounded-xl p-4 mb-8">
              <div className="grid grid-cols-2 gap-2">
                {c.info.map((info, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm">
                    <span className="text-primary">✓</span>
                    <span>{info}</span>
                  </div>
                ))}
              </div>
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
  language, 
  result,
  onRestart,
  duration
}: { 
  language: Language; 
  result: PlacementResult;
  onRestart: () => void;
  duration: number;
}) {
  const [showDetails, setShowDetails] = useState(false);

  const levelColors = {
    beginner: 'from-blue-500 to-blue-600',
    intermediate: 'from-yellow-500 to-orange-500',
    advanced: 'from-green-500 to-emerald-600',
  };

  const levelEmojis = {
    beginner: '🌱',
    intermediate: '🌿',
    advanced: '🌳',
  };

  const content = {
    fr: {
      title: 'Résultats de votre Évaluation',
      level: 'Votre niveau global',
      score: 'Score',
      duration: 'Durée',
      minutes: 'min',
      strengths: 'Vos points forts',
      weaknesses: 'À améliorer',
      categoryResults: 'Résultats par catégorie',
      recommendedPath: 'Parcours recommandé',
      recommendedCourses: 'Cours recommandés',
      priority: { high: 'Priorité haute', medium: 'Priorité moyenne', low: 'Priorité basse' },
      showDetails: 'Voir les détails',
      hideDetails: 'Masquer les détails',
      restart: 'Refaire le test',
      startLearning: 'Commencer mon parcours',
    },
    ar: {
      title: 'نتائج تقييمك',
      level: 'مستواك العام',
      score: 'النتيجة',
      duration: 'المدة',
      minutes: 'دقيقة',
      strengths: 'نقاط قوتك',
      weaknesses: 'للتحسين',
      categoryResults: 'النتائج حسب المجال',
      recommendedPath: 'المسار المقترح',
      recommendedCourses: 'الدورات المقترحة',
      priority: { high: 'أولوية عالية', medium: 'أولوية متوسطة', low: 'أولوية منخفضة' },
      showDetails: 'عرض التفاصيل',
      hideDetails: 'إخفاء التفاصيل',
      restart: 'إعادة الاختبار',
      startLearning: 'ابدأ مساري',
    },
    en: {
      title: 'Your Assessment Results',
      level: 'Your overall level',
      score: 'Score',
      duration: 'Duration',
      minutes: 'min',
      strengths: 'Your strengths',
      weaknesses: 'To improve',
      categoryResults: 'Results by category',
      recommendedPath: 'Recommended path',
      recommendedCourses: 'Recommended courses',
      priority: { high: 'High priority', medium: 'Medium priority', low: 'Low priority' },
      showDetails: 'Show details',
      hideDetails: 'Hide details',
      restart: 'Retake test',
      startLearning: 'Start my path',
    },
  };

  const c = content[language];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header avec niveau */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-2xl font-bold mb-6">{c.title}</h1>

          {/* Carte du niveau */}
          <div className={`inline-block bg-gradient-to-r ${levelColors[result.overallLevel]} rounded-3xl p-8 text-white shadow-2xl`}>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring' }}
              className="text-6xl mb-4"
            >
              {levelEmojis[result.overallLevel]}
            </motion.div>
            <p className="text-white/80 mb-1">{c.level}</p>
            <h2 className="text-3xl font-bold mb-4">
              {levelLabels[result.overallLevel][language]}
            </h2>
            <div className="flex justify-center gap-8 text-sm">
              <div>
                <p className="text-white/70">{c.score}</p>
                <p className="text-xl font-bold">{Math.round(result.overallPercentage)}%</p>
              </div>
              <div>
                <p className="text-white/70">{c.duration}</p>
                <p className="text-xl font-bold">{duration} {c.minutes}</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Forces et Faiblesses */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid md:grid-cols-2 gap-4 mb-8"
        >
          {/* Forces */}
          <div className="bg-green-50 dark:bg-green-900/20 rounded-2xl p-6 border border-green-200 dark:border-green-800">
            <h3 className="font-semibold text-green-700 dark:text-green-400 mb-3 flex items-center gap-2">
              <span>💪</span> {c.strengths}
            </h3>
            <div className="space-y-2">
              {result.strengths.length > 0 ? result.strengths.map(s => (
                <div key={s} className="flex items-center gap-2 text-sm">
                  <span className="text-green-500">✓</span>
                  <span>{categoryLabels[s as keyof typeof categoryLabels]?.[language] || s}</span>
                </div>
              )) : (
                <p className="text-sm text-muted-foreground">
                  {language === 'fr' ? 'Continuez à apprendre !' : 
                   language === 'ar' ? 'واصل التعلم!' : 'Keep learning!'}
                </p>
              )}
            </div>
          </div>

          {/* Faiblesses */}
          <div className="bg-orange-50 dark:bg-orange-900/20 rounded-2xl p-6 border border-orange-200 dark:border-orange-800">
            <h3 className="font-semibold text-orange-700 dark:text-orange-400 mb-3 flex items-center gap-2">
              <span>📈</span> {c.weaknesses}
            </h3>
            <div className="space-y-2">
              {result.weaknesses.length > 0 ? result.weaknesses.map(w => (
                <div key={w} className="flex items-center gap-2 text-sm">
                  <span className="text-orange-500">→</span>
                  <span>{categoryLabels[w as keyof typeof categoryLabels]?.[language] || w}</span>
                </div>
              )) : (
                <p className="text-sm text-muted-foreground">
                  {language === 'fr' ? 'Excellent travail !' : 
                   language === 'ar' ? 'عمل ممتاز!' : 'Excellent work!'}
                </p>
              )}
            </div>
          </div>
        </motion.div>

        {/* Bouton détails */}
        <div className="text-center mb-6">
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="text-primary hover:underline text-sm font-medium"
          >
            {showDetails ? c.hideDetails : c.showDetails}
          </button>
        </div>

        {/* Détails par catégorie */}
        <AnimatePresence>
          {showDetails && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mb-8"
            >
              <h3 className="font-semibold mb-4">{c.categoryResults}</h3>
              <div className="grid gap-3">
                {result.categoryScores.map((cat) => (
                  <div key={cat.category} className="bg-card rounded-xl p-4 border">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">
                        {categoryLabels[cat.category as keyof typeof categoryLabels]?.[language] || cat.category}
                      </span>
                      <span className={`text-sm px-2 py-0.5 rounded ${
                        cat.level === 'advanced' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' :
                        cat.level === 'intermediate' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400' :
                        'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
                      }`}>
                        {levelLabels[cat.level][language]}
                      </span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                        <div 
                          className={`h-full transition-all duration-500 ${
                            cat.percentage >= 70 ? 'bg-green-500' :
                            cat.percentage >= 40 ? 'bg-yellow-500' :
                            'bg-blue-500'
                          }`}
                          style={{ width: `${cat.percentage}%` }}
                        />
                      </div>
                      <span className="text-sm font-medium w-12 text-right">
                        {Math.round(cat.percentage)}%
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      {cat.correctAnswers}/{cat.questionsAnswered} {language === 'fr' ? 'correct' : language === 'ar' ? 'صحيح' : 'correct'}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Parcours recommandé */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-card rounded-2xl border p-6 mb-8"
        >
          <h3 className="font-semibold mb-4 flex items-center gap-2">
            <span>🎯</span> {c.recommendedPath}
          </h3>
          <div className="mb-4 p-4 bg-primary/5 rounded-xl">
            <h4 className="font-medium text-primary mb-1">
              {result.learningPath.name[language]}
            </h4>
            <p className="text-sm text-muted-foreground">
              {result.learningPath.description[language]}
            </p>
          </div>

          {/* Phases */}
          <div className="space-y-4">
            {result.learningPath.phases.map((phase) => (
              <div key={phase.order} className="relative pl-8">
                <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center font-bold">
                  {phase.order}
                </div>
                <div className="bg-muted/30 rounded-xl p-4">
                  <h5 className="font-medium mb-1">{phase.name[language]}</h5>
                  <p className="text-xs text-muted-foreground mb-2">⏱️ {phase.duration}</p>
                  <div className="flex flex-wrap gap-2">
                    {phase.courses.map(slug => (
                      <span key={slug} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                        {slug}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Cours prioritaires */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-8"
        >
          <h3 className="font-semibold mb-4 flex items-center gap-2">
            <span>📚</span> {c.recommendedCourses}
          </h3>
          <div className="grid md:grid-cols-2 gap-3">
            {result.recommendedCourses
              .filter(course => course.priority === 'high')
              .slice(0, 6)
              .map((course) => (
                <div 
                  key={course.courseSlug}
                  className="bg-card rounded-xl p-4 border hover:border-primary/50 transition-colors cursor-pointer"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-medium">{course.title[language]}</h4>
                    <span className={`text-xs px-2 py-0.5 rounded ${
                      course.priority === 'high' ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400' :
                      course.priority === 'medium' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400' :
                      'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400'
                    }`}>
                      {c.priority[course.priority]}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    {course.reason[language]}
                  </p>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span>⏱️ {course.estimatedDuration}</span>
                    <span>•</span>
                    <span>{levelLabels[course.difficulty][language]}</span>
                  </div>
                </div>
              ))}
          </div>
        </motion.div>

        {/* Boutons d'action */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={onRestart}
            className="px-6 py-3 rounded-xl border border-primary text-primary hover:bg-primary/5 transition-colors"
          >
            {c.restart}
          </button>
          <Link
            href={result.recommendedCourses.length > 0 
              ? `/courses/${result.recommendedCourses[0].courseSlug}` 
              : '/courses'}
            className="px-8 py-3 rounded-xl bg-gradient-to-r from-primary to-primary/80 text-primary-foreground font-semibold shadow-lg hover:shadow-xl transition-shadow text-center"
          >
            {c.startLearning}
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
