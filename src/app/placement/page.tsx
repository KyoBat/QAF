/**
 * Page d'Examen de Placement
 * 
 * Route: /placement
 * Évalue le niveau de l'étudiant et recommande un parcours personnalisé.
 */

import { Metadata } from 'next';
import PlacementPageClient from './PlacementPageClient';

export const metadata: Metadata = {
  title: 'Évaluation de Niveau | Rabbi Zidni Ilma',
  description: 'Évaluez votre niveau en sciences islamiques et recevez un parcours d\'apprentissage personnalisé adapté à vos connaissances.',
  openGraph: {
    title: 'Évaluation de Niveau | Rabbi Zidni Ilma',
    description: 'Évaluez votre niveau en sciences islamiques et recevez un parcours d\'apprentissage personnalisé.',
    type: 'website',
  },
};

export default function PlacementPage() {
  return <PlacementPageClient />;
}
