/**
 * Page d'Examen de Placement
 * 
 * Route: /placement
 * Évalue le niveau de l'étudiant et recommande un parcours personnalisé.
 */

import { Metadata } from 'next';
import PlacementPageClient from './PlacementPageClient';

export const metadata: Metadata = {
  title: 'Test de Niveau | TahaLearn - Parcours Personnalisé',
  description: 'Évaluez gratuitement votre niveau en sciences islamiques et recevez un parcours d\'apprentissage personnalisé. Test adaptatif couvrant Tajweed, Fiqh, Aqeedah et Seerah.',
  keywords: ['Test niveau Islam', 'Évaluation sciences islamiques', 'Parcours personnalisé', 'Test placement TahaLearn', 'Niveau connaissance islamique'],
  alternates: {
    canonical: 'https://www.tahalearn.com/placement',
  },
  openGraph: {
    title: 'Test de Niveau | TahaLearn',
    description: 'Évaluez votre niveau en sciences islamiques et recevez un parcours d\'apprentissage personnalisé.',
    url: 'https://www.tahalearn.com/placement',
    siteName: 'TahaLearn',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'TahaLearn - Test de niveau',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Test de Niveau | TahaLearn',
    description: 'Évaluez votre niveau en sciences islamiques.',
    images: ['/og-image.png'],
  },
};

export default function PlacementPage() {
  return <PlacementPageClient />;
}
