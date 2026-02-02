'use client';

/**
 * Tableau de Bord des Résultats d'Examens
 * 
 * Affiche l'historique des examens passés,
 * les statistiques et les certificats obtenus.
 */

import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  ExamResult,
  ExamConfig,
  gradeLabels,
  gradeEmojis,
  gradeColors,
  GradeType,
} from '@/lib/data/exams/types';
import { getAllExamsLight, getExamById } from '@/lib/data/exams';

// ============================================
// Types
// ============================================

type Language = 'fr' | 'ar' | 'en';

interface ExamDashboardProps {
  language?: Language;
}

interface StoredResults {
  [examId: string]: ExamResult[];
}

// ============================================
// Composant Principal
// ============================================

export default function ExamDashboard({ language = 'fr' }: ExamDashboardProps) {
  const [results, setResults] = useState<StoredResults>({});
  const [selectedExam, setSelectedExam] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  // Utiliser la version light (sans les questions) pour le dashboard
  const allExamsLight = useMemo(() => getAllExamsLight(), []);

  // Charger les résultats depuis localStorage
  useEffect(() => {
    const loadResults = () => {
      const storedResults: StoredResults = {};
      
      // Charger de manière asynchrone pour ne pas bloquer le rendu
      const loadExamResults = (index: number) => {
        if (index >= allExamsLight.length) {
          setResults(storedResults);
          setLoading(false);
          return;
        }

        const exam = allExamsLight[index];
        const key = `rabbi-zidni-exam-${exam.id}`;
        
        try {
          const data = localStorage.getItem(key);
          if (data) {
            storedResults[exam.id] = JSON.parse(data);
          }
        } catch (e) {
          console.error(`Erreur chargement ${key}:`, e);
        }

        // Charger le suivant de manière non-bloquante
        if ('requestIdleCallback' in window) {
          requestIdleCallback(() => loadExamResults(index + 1));
        } else {
          setTimeout(() => loadExamResults(index + 1), 0);
        }
      };

      loadExamResults(0);
    };

    loadResults();
  }, [allExamsLight]);

  // Statistiques globales
  const stats = useMemo(() => {
    const allResults = Object.values(results).flat();
    const passed = allResults.filter(r => r.passed);
    const certificates = passed.filter(r => {
      const exam = getExamById(r.examId);
      return exam?.hasCertificate;
    });

    const avgScore = allResults.length > 0
      ? Math.round(allResults.reduce((sum, r) => sum + r.percentage, 0) / allResults.length)
      : 0;

    const gradeDistribution: Record<GradeType, number> = {
      gold: 0,
      silver: 0,
      bronze: 0,
      pass: 0,
      fail: 0,
    };

    for (const r of allResults) {
      gradeDistribution[r.grade]++;
    }

    return {
      totalExams: allResults.length,
      passed: passed.length,
      failed: allResults.length - passed.length,
      certificates: certificates.length,
      avgScore,
      gradeDistribution,
      bestScore: allResults.length > 0 ? Math.max(...allResults.map(r => r.percentage)) : 0,
    };
  }, [results]);

  const content = {
    fr: {
      title: 'Tableau de Bord des Examens',
      subtitle: 'Suivez votre progression et vos certifications',
      stats: {
        totalExams: 'Examens passés',
        passed: 'Réussis',
        failed: 'Échoués',
        certificates: 'Certificats',
        avgScore: 'Score moyen',
        bestScore: 'Meilleur score',
      },
      availableExams: 'Examens disponibles',
      myResults: 'Mes résultats',
      noResults: 'Vous n\'avez pas encore passé d\'examen.',
      startExam: 'Passer l\'examen',
      viewDetails: 'Voir les détails',
      attempt: 'Tentative',
      date: 'Date',
      score: 'Score',
      time: 'Temps',
      grade: 'Note',
      certificate: 'Certificat',
      download: 'Télécharger',
    },
    ar: {
      title: 'لوحة تحكم الامتحانات',
      subtitle: 'تابع تقدمك وشهاداتك',
      stats: {
        totalExams: 'الامتحانات المُجتازة',
        passed: 'ناجح',
        failed: 'راسب',
        certificates: 'الشهادات',
        avgScore: 'متوسط النتيجة',
        bestScore: 'أفضل نتيجة',
      },
      availableExams: 'الامتحانات المتاحة',
      myResults: 'نتائجي',
      noResults: 'لم تجتز أي امتحان بعد.',
      startExam: 'ابدأ الامتحان',
      viewDetails: 'عرض التفاصيل',
      attempt: 'المحاولة',
      date: 'التاريخ',
      score: 'النتيجة',
      time: 'الوقت',
      grade: 'الدرجة',
      certificate: 'الشهادة',
      download: 'تحميل',
    },
    en: {
      title: 'Exam Dashboard',
      subtitle: 'Track your progress and certifications',
      stats: {
        totalExams: 'Exams taken',
        passed: 'Passed',
        failed: 'Failed',
        certificates: 'Certificates',
        avgScore: 'Average score',
        bestScore: 'Best score',
      },
      availableExams: 'Available Exams',
      myResults: 'My Results',
      noResults: 'You haven\'t taken any exams yet.',
      startExam: 'Take Exam',
      viewDetails: 'View Details',
      attempt: 'Attempt',
      date: 'Date',
      score: 'Score',
      time: 'Time',
      grade: 'Grade',
      certificate: 'Certificate',
      download: 'Download',
    },
  };

  const c = content[language];

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl font-bold mb-2">{c.title}</h1>
          <p className="text-muted-foreground">{c.subtitle}</p>
        </motion.div>

        {/* Statistiques */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8"
        >
          <StatCard
            value={stats.totalExams}
            label={c.stats.totalExams}
            icon="📋"
            color="bg-blue-500"
          />
          <StatCard
            value={stats.passed}
            label={c.stats.passed}
            icon="✅"
            color="bg-green-500"
          />
          <StatCard
            value={stats.failed}
            label={c.stats.failed}
            icon="❌"
            color="bg-red-500"
          />
          <StatCard
            value={stats.certificates}
            label={c.stats.certificates}
            icon="🏆"
            color="bg-yellow-500"
          />
          <StatCard
            value={`${stats.avgScore}%`}
            label={c.stats.avgScore}
            icon="📊"
            color="bg-purple-500"
          />
          <StatCard
            value={`${stats.bestScore}%`}
            label={c.stats.bestScore}
            icon="⭐"
            color="bg-amber-500"
          />
        </motion.div>

        {/* Grade Distribution */}
        {stats.totalExams > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-card rounded-2xl border p-6 mb-8"
          >
            <h3 className="font-semibold mb-4">Distribution des notes</h3>
            <div className="flex items-end justify-around h-32">
              {Object.entries(stats.gradeDistribution).map(([grade, count]) => (
                <div key={grade} className="flex flex-col items-center">
                  <div
                    className={`w-12 rounded-t-lg bg-gradient-to-t ${gradeColors[grade as GradeType]} transition-all`}
                    style={{ height: `${stats.totalExams > 0 ? (count / stats.totalExams) * 100 : 0}%`, minHeight: count > 0 ? '20px' : '0' }}
                  />
                  <span className="text-2xl mt-2">{gradeEmojis[grade as GradeType]}</span>
                  <span className="text-xs text-muted-foreground">{count}</span>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Examens disponibles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-8"
        >
          <h2 className="text-xl font-semibold mb-4">{c.availableExams}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {allExamsLight.map((exam) => {
              const examResults = results[exam.id] || [];
              const bestResult = examResults.length > 0
                ? examResults.reduce((best, r) => r.percentage > best.percentage ? r : best, examResults[0])
                : null;

              return (
                <ExamCard
                  key={exam.id}
                  exam={exam as any}
                  language={language}
                  bestResult={bestResult}
                  attempts={examResults.length}
                  labels={c}
                />
              );
            })}
          </div>
        </motion.div>

        {/* Historique des résultats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-xl font-semibold mb-4">{c.myResults}</h2>
          
          {Object.keys(results).length === 0 ? (
            <div className="bg-card rounded-2xl border p-8 text-center">
              <p className="text-muted-foreground">{c.noResults}</p>
            </div>
          ) : (
            <div className="bg-card rounded-2xl border overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-muted/50">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-medium">Examen</th>
                      <th className="px-4 py-3 text-center text-sm font-medium">{c.attempt}</th>
                      <th className="px-4 py-3 text-center text-sm font-medium">{c.date}</th>
                      <th className="px-4 py-3 text-center text-sm font-medium">{c.score}</th>
                      <th className="px-4 py-3 text-center text-sm font-medium">{c.grade}</th>
                      <th className="px-4 py-3 text-center text-sm font-medium">{c.certificate}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    {Object.entries(results).flatMap(([examId, examResults]) =>
                      examResults.map((result, idx) => {
                        const exam = getExamById(examId);
                        if (!exam) return null;

                        return (
                          <tr key={result.id} className="hover:bg-muted/30">
                            <td className="px-4 py-3">
                              <span className="font-medium">{exam.title[language]}</span>
                            </td>
                            <td className="px-4 py-3 text-center">
                              #{idx + 1}
                            </td>
                            <td className="px-4 py-3 text-center text-sm text-muted-foreground">
                              {new Date(result.date).toLocaleDateString(language === 'ar' ? 'ar-SA' : language === 'en' ? 'en-US' : 'fr-FR')}
                            </td>
                            <td className="px-4 py-3 text-center">
                              <span className={`font-bold ${result.passed ? 'text-green-600' : 'text-red-600'}`}>
                                {result.percentage}%
                              </span>
                            </td>
                            <td className="px-4 py-3 text-center">
                              <span className="text-xl">{gradeEmojis[result.grade]}</span>
                            </td>
                            <td className="px-4 py-3 text-center">
                              {result.passed && exam.hasCertificate ? (
                                <button className="text-sm text-primary hover:underline">
                                  🏆 {c.download}
                                </button>
                              ) : (
                                <span className="text-muted-foreground">—</span>
                              )}
                            </td>
                          </tr>
                        );
                      })
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}

// ============================================
// Composants auxiliaires
// ============================================

function StatCard({
  value,
  label,
  icon,
  color,
}: {
  value: string | number;
  label: string;
  icon: string;
  color: string;
}) {
  return (
    <div className="bg-card rounded-xl border p-4 text-center">
      <div className={`w-10 h-10 ${color} rounded-full flex items-center justify-center text-white mx-auto mb-2`}>
        <span>{icon}</span>
      </div>
      <p className="text-2xl font-bold">{value}</p>
      <p className="text-xs text-muted-foreground">{label}</p>
    </div>
  );
}

function ExamCard({
  exam,
  language,
  bestResult,
  attempts,
  labels,
}: {
  exam: ExamConfig;
  language: Language;
  bestResult: ExamResult | null;
  attempts: number;
  labels: { startExam: string; viewDetails: string };
}) {
  const levelColors = {
    beginner: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
    intermediate: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400',
    advanced: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
  };

  return (
    <div className="bg-card rounded-xl border p-5 hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between mb-3">
        <div>
          <span className={`inline-block px-2 py-0.5 rounded text-xs font-medium ${levelColors[exam.level]}`}>
            {exam.level}
          </span>
          {exam.hasCertificate && (
            <span className="ml-2 text-yellow-500">🏆</span>
          )}
        </div>
        {bestResult && (
          <span className="text-2xl">{gradeEmojis[bestResult.grade]}</span>
        )}
      </div>

      <h3 className="font-semibold mb-2">{exam.title[language]}</h3>
      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
        {exam.description[language]}
      </p>

      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
        <span>⏱️ {exam.duration} min</span>
        <span>📝 {exam.questionsPerExam || (exam as any).questionsCount || 0} Q</span>
        <span>🎯 {exam.passingScore}%</span>
      </div>

      {bestResult && (
        <div className="bg-muted/50 rounded-lg p-3 mb-4">
          <div className="flex items-center justify-between text-sm">
            <span>Meilleur score:</span>
            <span className={`font-bold ${bestResult.passed ? 'text-green-600' : 'text-red-600'}`}>
              {bestResult.percentage}%
            </span>
          </div>
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>Tentatives: {attempts}/{exam.maxAttempts}</span>
          </div>
        </div>
      )}

      <Link
        href={`/exams/${exam.id}`}
        className="block w-full py-2 rounded-lg bg-primary text-primary-foreground text-center font-medium hover:bg-primary/90 transition-colors"
      >
        {bestResult ? labels.viewDetails : labels.startExam}
      </Link>
    </div>
  );
}
