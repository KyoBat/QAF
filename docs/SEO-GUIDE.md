# Guide SEO - TahaLearn

## 🎯 Checklist pour Nouvelles Pages

Lors de la création d'une nouvelle page, assurez-vous d'inclure :

### 1. Metadata Minimale Requise

```typescript
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Titre de la Page | TahaLearn',
  description: 'Description de 120-160 caractères décrivant le contenu de la page.',
  keywords: ['mot-clé 1', 'mot-clé 2', 'mot-clé 3'],
  openGraph: {
    title: 'Titre pour OpenGraph',
    description: 'Description pour réseaux sociaux',
    url: 'https://www.tahalearn.com/chemin/page',
    siteName: 'TahaLearn',
    type: 'website', // ou 'article' pour contenu
    images: [{
      url: '/og-image.png',
      width: 1200,
      height: 630,
      alt: 'Description de l\'image',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Titre pour Twitter',
    description: 'Description pour Twitter',
    images: ['/og-image.png'],
  },
}
```

### 2. Images avec ALT

❌ **Mauvais** :
```tsx
<img src="/image.jpg" />
```

✅ **Bon** :
```tsx
import Image from 'next/image'

<Image 
  src="/image.jpg" 
  alt="Description précise de l'image"
  width={800}
  height={600}
/>
```

### 3. Liens Internes

✅ **Toujours utiliser Next.js Link** :
```tsx
import Link from 'next/link'

<Link href="/courses/tajweed">Cours de Tajweed</Link>
```

### 4. Structure Heading Hiérarchique

```tsx
<h1>Titre Principal (1 seul par page)</h1>
<h2>Section</h2>
<h3>Sous-section</h3>
<h4>Détail</h4>
```

---

## 📐 Bonnes Pratiques

### Longueur des Textes

- **Title** : 50-60 caractères maximum
- **Meta Description** : 120-160 caractères
- **Alt Text** : Concis mais descriptif (< 125 caractères)

### URLs

✅ **Bon** :
- `/courses/tajweed-basics`
- `/exams/fiqh-salat-exam`

❌ **Mauvais** :
- `/cours?id=123`
- `/page-1`

### Keywords

- Utiliser des mots-clés naturels
- Inclure des variantes (singulier/pluriel)
- Éviter le keyword stuffing
- 5-10 keywords pertinents par page

---

## 🔄 Mettre à Jour le Sitemap

Lorsque vous ajoutez de nouvelles pages statiques :

1. Ouvrir `src/app/sitemap.ts`
2. Ajouter l'entrée dans le tableau approprié :

```typescript
{
  url: `${baseUrl}/nouvelle-page`,
  lastModified: currentDate,
  changeFrequency: 'monthly', // ou 'weekly', 'daily'
  priority: 0.7, // 0.0 à 1.0
}
```

---

## 🤖 Pages à Exclure de l'Indexation

Pour les pages de test, démo ou administratives :

```typescript
export const metadata = {
  robots: {
    index: false,
    follow: false,
  },
}
```

Ou dans `robots.ts` :
```typescript
disallow: ['/api/', '/admin/', '/test/']
```

---

## 📊 Outils de Vérification

### Avant Déploiement

1. **Build local** :
   ```bash
   npm run build
   ```

2. **Vérifier erreurs** : Aucune erreur dans la console

3. **Lighthouse** :
   ```bash
   npm run build && npm run start
   # Puis ouvrir DevTools > Lighthouse > SEO
   ```

### Après Déploiement

1. **Google Search Console** : https://search.google.com/search-console
   - Soumettre sitemap
   - Vérifier indexation
   - Voir erreurs d'exploration

2. **Meta Tags Preview** : https://metatags.io/
   - Tester rendu OpenGraph
   - Vérifier Twitter Cards

3. **Schema Markup** : https://validator.schema.org/
   - Valider JSON-LD

4. **PageSpeed Insights** : https://pagespeed.web.dev/
   - Score de performance
   - Core Web Vitals

---

## 🚨 Erreurs Communes à Éviter

### 1. Titres Dupliqués
❌ Deux pages avec le même `<title>`  
✅ Chaque page a un titre unique

### 2. Meta Description Manquante
❌ Pas de description  
✅ Toujours inclure une description

### 3. Images Sans ALT
❌ `<Image src="..." />`  
✅ `<Image src="..." alt="Description" />`

### 4. Canonical URL Manquant
❌ Plusieurs URLs pour même contenu  
✅ Définir `alternates.canonical`

### 5. Page Test Indexée
❌ `/test` indexé par Google  
✅ Ajouter `robots: { index: false }`

---

## 📈 Suivi des Performances

### Métriques à Surveiller (Google Search Console)

1. **Impressions** : Nombre d'apparitions dans résultats
2. **Clics** : Nombre de visites depuis Google
3. **CTR** (Click-Through Rate) : % de clics/impressions
4. **Position Moyenne** : Rang dans résultats de recherche

### Objectifs

- CTR > 3% (augmenter avec meilleurs titres/descriptions)
- Position moyenne < 10 (première page Google)
- 0 erreur d'indexation
- Couverture : 100% pages soumises indexées

---

## 🎓 Ressources

### Documentation Officielle

- [Next.js Metadata](https://nextjs.org/docs/app/building-your-application/optimizing/metadata)
- [Google Search Central](https://developers.google.com/search)
- [Schema.org](https://schema.org/)

### Guides SEO

- [Moz Beginner's Guide](https://moz.com/beginners-guide-to-seo)
- [Ahrefs SEO Basics](https://ahrefs.com/blog/seo-basics/)

### Outils Gratuits

- Google Search Console
- Google PageSpeed Insights
- Bing Webmaster Tools
- Schema Markup Validator

---

## ✅ Checklist Pré-Déploiement

Avant chaque déploiement majeur :

- [ ] Toutes les nouvelles pages ont metadata complète
- [ ] Images ont attributs ALT
- [ ] Pas d'erreurs TypeScript
- [ ] Build réussit sans warnings
- [ ] Sitemap à jour
- [ ] Robots.txt correct
- [ ] Test Lighthouse SEO > 90
- [ ] Liens internes vérifiés
- [ ] Pas de contenu dupliqué

---

**Maintenu par** : Équipe TahaLearn  
**Dernière mise à jour** : 5 février 2026
