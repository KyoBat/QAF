/**
 * Examen Global de Placement
 * 
 * 80 questions aléatoires couvrant TOUTES les matières islamiques
 * pour évaluer le niveau global de l'élève et recommander des cours.
 * 
 * Puise dans les pools de questions de tous les examens existants.
 */

import { ExamConfig, ExamQuestion } from '../types';

// Import des questions depuis tous les examens
import { examAqeedahFinal } from '../aqeedah/exam-aqeedah-final';
import { examSalatFinal } from '../salat/exam-salat-final';
import { examSiyamFinal } from '../siyam/exam-siyam-final';
import { examZakatFinal } from '../zakat/exam-zakat-final';
import { examHajjFinal } from '../hajj/exam-hajj-final';
import { examHadithFinal } from '../hadith/exam-hadith-final';
import { examSeerahFinal } from '../seerah/exam-seerah-final';
import { examUsulFiqhFinal } from '../usul-fiqh/exam-usul-fiqh-final';
import { examFiqhMuamalatFinal } from '../fiqh-muamalat/exam-fiqh-muamalat-final';
import { examFiqhFamilleFinal } from '../fiqh-famille/exam-fiqh-famille-final';
import { examHistoryImamsFinal } from '../history/exam-history-imams-final';

// ============================================
// Préfixer les catégories pour identifier le domaine
// ============================================

function prefixCategory(questions: ExamQuestion[], domain: string): ExamQuestion[] {
  return questions.map(q => ({
    ...q,
    id: `placement-${domain}-${q.id}`,
    category: `${domain}`,
  }));
}

// Constituer le mega-pool avec toutes les questions
const allQuestions: ExamQuestion[] = [
  ...prefixCategory(examAqeedahFinal.questionPool || [], 'aqeedah'),
  ...prefixCategory(examSalatFinal.questionPool || [], 'salat'),
  ...prefixCategory(examSiyamFinal.questionPool || [], 'siyam'),
  ...prefixCategory(examZakatFinal.questionPool || [], 'zakat'),
  ...prefixCategory(examHajjFinal.questionPool || [], 'hajj'),
  ...prefixCategory(examHadithFinal.questionPool || [], 'hadith'),
  ...prefixCategory(examSeerahFinal.questionPool || [], 'seerah'),
  ...prefixCategory(examUsulFiqhFinal.questionPool || [], 'usul-fiqh'),
  ...prefixCategory(examFiqhMuamalatFinal.questionPool || [], 'muamalat'),
  ...prefixCategory(examFiqhFamilleFinal.questionPool || [], 'famille'),
  ...prefixCategory(examHistoryImamsFinal.questionPool || [], 'history'),
];

// ============================================
// Configuration de l'examen global
// ============================================

export const examPlacementGlobal: ExamConfig = {
  id: 'exam-placement-global',
  type: 'certification',
  level: 'intermediate',
  title: {
    fr: 'Examen Global de Placement',
    ar: 'الامتحان الشامل لتحديد المستوى',
    en: 'Global Placement Exam',
  },
  description: {
    fr: '80 questions aléatoires couvrant toutes les sciences islamiques. Évaluez votre niveau et découvrez vos points forts et vos axes d\'amélioration.',
    ar: '80 سؤالاً عشوائياً تغطي جميع العلوم الإسلامية. قيّم مستواك واكتشف نقاط قوتك ومجالات تحسينك.',
    en: '80 random questions covering all Islamic sciences. Assess your level and discover your strengths and areas for improvement.',
  },
  instructions: {
    fr: `Cet examen évalue vos connaissances dans 11 domaines des sciences islamiques.

📋 CONTENU :
• Aqeedah (Croyance) - 12 questions
• Fiqh Salat (Prière) - 10 questions  
• Fiqh Siyam (Jeûne) - 8 questions
• Fiqh Zakat - 6 questions
• Fiqh Hajj - 6 questions
• Fiqh Muamalat (Transactions) - 6 questions
• Fiqh Famille - 5 questions
• Usul al-Fiqh (Fondements) - 5 questions
• Sciences du Hadith - 6 questions
• Seerah (Biographie) - 8 questions
• Histoire (4 Imams) - 8 questions

⏱️ DURÉE : 90 minutes
🎯 OBJECTIF : Évaluer votre niveau global et identifier les domaines à approfondir.

À la fin, vous recevrez un rapport détaillé par domaine avec des recommandations de cours personnalisées.`,
    ar: `هذا الامتحان يقيّم معرفتك في 11 مجالاً من العلوم الإسلامية.

📋 المحتوى:
• العقيدة - 12 سؤالاً
• فقه الصلاة - 10 أسئلة
• فقه الصيام - 8 أسئلة
• فقه الزكاة - 6 أسئلة
• فقه الحج - 6 أسئلة
• فقه المعاملات - 6 أسئلة
• فقه الأسرة - 5 أسئلة
• أصول الفقه - 5 أسئلة
• علوم الحديث - 6 أسئلة
• السيرة النبوية - 8 أسئلة
• تاريخ الأئمة الأربعة - 8 أسئلة

⏱️ المدة: 90 دقيقة
🎯 الهدف: تقييم مستواك العام وتحديد المجالات التي تحتاج لتعميقها.`,
    en: `This exam evaluates your knowledge in 11 areas of Islamic sciences.

📋 CONTENT:
• Aqeedah (Creed) - 12 questions
• Fiqh Salat (Prayer) - 10 questions
• Fiqh Siyam (Fasting) - 8 questions
• Fiqh Zakat - 6 questions
• Fiqh Hajj - 6 questions
• Fiqh Muamalat (Transactions) - 6 questions
• Fiqh Family - 5 questions
• Usul al-Fiqh (Foundations) - 5 questions
• Hadith Sciences - 6 questions
• Seerah (Biography) - 8 questions
• History (4 Imams) - 8 questions

⏱️ DURATION: 90 minutes
🎯 OBJECTIVE: Assess your overall level and identify areas to deepen.

At the end, you'll receive a detailed report by domain with personalized course recommendations.`,
  },
  questionPool: allQuestions,
  questionsPerExam: 80,
  categoryConfig: [
    { category: 'aqeedah', count: 12 },
    { category: 'salat', count: 10 },
    { category: 'siyam', count: 8 },
    { category: 'zakat', count: 6 },
    { category: 'hajj', count: 6 },
    { category: 'muamalat', count: 6 },
    { category: 'famille', count: 5 },
    { category: 'usul-fiqh', count: 5 },
    { category: 'hadith', count: 6 },
    { category: 'seerah', count: 8 },
    { category: 'history', count: 8 },
  ],
  questions: [],
  duration: 90,
  passingScore: 60,
  maxAttempts: 3,
  shuffleQuestions: true,
  shuffleOptions: true,
  showAnswersAfter: 'complete',
  hasCertificate: true,
  certificateName: {
    fr: 'Certificat d\'Évaluation Globale en Sciences Islamiques',
    ar: 'شهادة التقييم الشامل في العلوم الإسلامية',
    en: 'Global Assessment Certificate in Islamic Sciences',
  },
  createdAt: '2026-01-31',
};

// ============================================
// Système de notation par niveau
// ============================================

export interface PlacementResult {
  globalScore: number;
  globalLevel: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  domainScores: {
    domain: string;
    domainName: { fr: string; ar: string; en: string };
    score: number;
    level: 'weak' | 'average' | 'good' | 'excellent';
    recommendation: { fr: string; ar: string; en: string };
  }[];
  strongestDomains: string[];
  weakestDomains: string[];
  recommendedCourses: string[];
}

const domainNames: Record<string, { fr: string; ar: string; en: string }> = {
  'aqeedah': { fr: 'Aqeedah (Croyance)', ar: 'العقيدة', en: 'Aqeedah (Creed)' },
  'salat': { fr: 'Fiqh - Salat', ar: 'فقه الصلاة', en: 'Fiqh - Prayer' },
  'siyam': { fr: 'Fiqh - Siyam', ar: 'فقه الصيام', en: 'Fiqh - Fasting' },
  'zakat': { fr: 'Fiqh - Zakat', ar: 'فقه الزكاة', en: 'Fiqh - Zakat' },
  'hajj': { fr: 'Fiqh - Hajj', ar: 'فقه الحج', en: 'Fiqh - Hajj' },
  'muamalat': { fr: 'Fiqh - Muamalat', ar: 'فقه المعاملات', en: 'Fiqh - Transactions' },
  'famille': { fr: 'Fiqh - Famille', ar: 'فقه الأسرة', en: 'Fiqh - Family' },
  'usul-fiqh': { fr: 'Usul al-Fiqh', ar: 'أصول الفقه', en: 'Usul al-Fiqh' },
  'hadith': { fr: 'Sciences du Hadith', ar: 'علوم الحديث', en: 'Hadith Sciences' },
  'seerah': { fr: 'Seerah', ar: 'السيرة النبوية', en: 'Prophetic Biography' },
  'history': { fr: 'Histoire des Imams', ar: 'تاريخ الأئمة', en: 'History of Imams' },
};

const courseRecommendations: Record<string, string> = {
  'aqeedah': 'aqeedah',
  'salat': 'fiqh',
  'siyam': 'siyam',
  'zakat': 'zakat',
  'hajj': 'hajj',
  'muamalat': 'fiqh-muamalat',
  'famille': 'fiqh-famille',
  'usul-fiqh': 'usul-al-fiqh',
  'hadith': 'hadith',
  'seerah': 'seerah-module-1',
  'history': 'history',
};

export function calculatePlacementResult(
  answers: { questionId: string; isCorrect: boolean }[]
): PlacementResult {
  // Calculer les scores par domaine
  const domainStats: Record<string, { correct: number; total: number }> = {};
  
  for (const answer of answers) {
    // Extraire le domaine du questionId (format: placement-{domain}-...)
    const parts = answer.questionId.split('-');
    const domain = parts[1]; // Le domaine est après "placement-"
    
    if (!domainStats[domain]) {
      domainStats[domain] = { correct: 0, total: 0 };
    }
    domainStats[domain].total++;
    if (answer.isCorrect) {
      domainStats[domain].correct++;
    }
  }
  
  // Calculer les scores et niveaux par domaine
  const domainScores = Object.entries(domainStats).map(([domain, stats]) => {
    const score = Math.round((stats.correct / stats.total) * 100);
    let level: 'weak' | 'average' | 'good' | 'excellent';
    let recommendation: { fr: string; ar: string; en: string };
    
    if (score < 40) {
      level = 'weak';
      recommendation = {
        fr: `Recommandé : Suivre le cours complet`,
        ar: `موصى به: متابعة الدورة الكاملة`,
        en: `Recommended: Take the full course`,
      };
    } else if (score < 60) {
      level = 'average';
      recommendation = {
        fr: `Conseillé : Réviser les fondamentaux`,
        ar: `يُنصح: مراجعة الأساسيات`,
        en: `Advised: Review the fundamentals`,
      };
    } else if (score < 80) {
      level = 'good';
      recommendation = {
        fr: `Optionnel : Approfondir les sujets avancés`,
        ar: `اختياري: التعمق في المواضيع المتقدمة`,
        en: `Optional: Deepen advanced topics`,
      };
    } else {
      level = 'excellent';
      recommendation = {
        fr: `Excellent ! Passez au niveau supérieur`,
        ar: `ممتاز! انتقل إلى المستوى التالي`,
        en: `Excellent! Move to the next level`,
      };
    }
    
    return {
      domain,
      domainName: domainNames[domain] || { fr: domain, ar: domain, en: domain },
      score,
      level,
      recommendation,
    };
  });
  
  // Trier par score
  domainScores.sort((a, b) => b.score - a.score);
  
  // Calculer le score global
  const totalCorrect = answers.filter(a => a.isCorrect).length;
  const globalScore = Math.round((totalCorrect / answers.length) * 100);
  
  // Déterminer le niveau global
  let globalLevel: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  if (globalScore < 40) {
    globalLevel = 'beginner';
  } else if (globalScore < 60) {
    globalLevel = 'intermediate';
  } else if (globalScore < 80) {
    globalLevel = 'advanced';
  } else {
    globalLevel = 'expert';
  }
  
  // Identifier les points forts et faibles
  const strongestDomains = domainScores
    .filter(d => d.level === 'excellent' || d.level === 'good')
    .slice(0, 3)
    .map(d => d.domain);
    
  const weakestDomains = domainScores
    .filter(d => d.level === 'weak' || d.level === 'average')
    .slice(-3)
    .map(d => d.domain);
  
  // Recommandations de cours
  const recommendedCourses = weakestDomains
    .map(d => courseRecommendations[d])
    .filter(Boolean);
  
  return {
    globalScore,
    globalLevel,
    domainScores,
    strongestDomains,
    weakestDomains,
    recommendedCourses,
  };
}

export default examPlacementGlobal;
