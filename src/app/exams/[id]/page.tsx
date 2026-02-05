/**
 * Page d'un examen spécifique
 */

import { Metadata } from 'next';
import { getExamById, getAllExamsLight } from '@/lib/data/exams';
import ExamPageClient from './ExamPageClient';

// ISR: Regénérer la page toutes les 24h
export const revalidate = 86400;

interface PageProps {
  params: { id: string };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const exam = getExamById(params.id);
  
  if (!exam) {
    return {
      title: 'Examen Introuvable | TahaLearn',
      description: 'L\'examen demandé n\'existe pas ou n\'est pas disponible.',
    };
  }

  return {
    title: `${exam.title.fr} | TahaLearn`,
    description: `${exam.description.fr} - Testez vos connaissances et obtenez votre certificat.`,
    keywords: ['examen', exam.title.fr, 'certificat', 'sciences islamiques', 'quiz', 'test', 'TahaLearn'],
    openGraph: {
      title: `${exam.title.fr} | TahaLearn`,
      description: exam.description.fr,
      url: `https://www.tahalearn.com/exams/${params.id}`,
      siteName: 'TahaLearn',
      type: 'article',
      images: [
        {
          url: '/og-image.png',
          width: 1200,
          height: 630,
          alt: exam.title.fr,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${exam.title.fr} | TahaLearn`,
      description: exam.description.fr,
      images: ['/og-image.png'],
    },
  };
}

export async function generateStaticParams() {
  // Utiliser la version light pour la génération statique (plus rapide)
  const exams = getAllExamsLight();
  return exams.map((exam) => ({
    id: exam.id,
  }));
}

export default function ExamPage() {
  return <ExamPageClient />;
}
