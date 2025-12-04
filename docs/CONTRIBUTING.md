# 📘 Guide de Contribution - Qaf (Rabbi Zidni Ilma)

> **« وَقُل رَّبِّ زِدْنِي عِلْمًا »** - "Et dis : Seigneur, augmente ma science" (Sourate Ta-Ha, 114)

Ce document définit les standards et conventions à respecter pour toute contribution au projet Qaf. L'objectif est de maintenir une cohérence technique, une identité visuelle claire et une qualité irréprochable.

---

## 📋 Table des Matières

1. [Identité du Projet](#-identité-du-projet)
2. [Architecture & Structure](#-architecture--structure)
3. [Ajouter un Nouveau Cours](#-ajouter-un-nouveau-cours)
4. [Ajouter une Nouvelle Leçon](#-ajouter-une-nouvelle-leçon)
5. [Conventions de Code](#-conventions-de-code)
6. [Design System](#-design-system)
7. [Internationalisation (i18n)](#-internationalisation-i18n)
8. [Tests](#-tests)
9. [Git & Commits](#-git--commits)
10. [Créer des MindMaps Interactives](#-créer-des-mindmaps-interactives)
11. [Checklist de Validation](#-checklist-de-validation)

---

## 🕌 Identité du Projet

### Mission
Fournir une plateforme **gratuite** d'apprentissage des sciences islamiques, accessible à tous, dans le respect des sources authentiques.

### Valeurs
- **Authenticité** : Sources islamiques vérifiées (Coran, Hadith Sahih)
- **Accessibilité** : Gratuit, multilingue (FR/AR/EN), responsive
- **Qualité** : Code propre, UX soignée, contenu vérifié
- **Humilité** : "Sadaqa Jariya" - projet pour l'agrément d'Allah

### Nom & Branding
| Élément | Valeur |
|---------|--------|
| Nom complet | Rabbi Zidni Ilma |
| Nom court | Qaf (ق) |
| Couleur primaire | Emerald `#10b981` (HSL: 160 84% 39%) |
| Police latine | Inter |
| Police arabe | Amiri |
| Icône | Livre ouvert (BookOpen) sur fond emerald |

### Stack Technique

| Technologie | Version | Usage |
|-------------|---------|-------|
| **Next.js** | 14.2.x | Framework React avec App Router, SSG |
| **React** | 18.x | Bibliothèque UI |
| **TypeScript** | 5.x | Typage statique (mode strict) |
| **Tailwind CSS** | 3.4.x | Styling utility-first |
| **Zustand** | 4.x | State management (locale, theme, progress) |
| **Radix UI** | - | Composants accessibles (Dialog, Select, Tabs) |
| **Lucide React** | - | Icônes SVG |
| **React Markdown** | - | Rendu Markdown avec remark-gfm |
| **ReactFlow** | 11.x | Visualisation mindmaps |
| **Vitest** | 2.x | Tests unitaires |
| **Zod** | 3.x | Validation de schémas |

### Dépendances clés

```bash
# Core
next react react-dom typescript

# Styling
tailwindcss postcss autoprefixer
class-variance-authority  # Variants de composants
clsx tailwind-merge       # Utilitaires classes

# UI
@radix-ui/react-dialog
@radix-ui/react-select
@radix-ui/react-tabs
@radix-ui/react-accordion
@radix-ui/react-slot
lucide-react

# State & Data
zustand                   # State management
zod                       # Validation

# Content
react-markdown
remark-gfm               # GitHub Flavored Markdown
reactflow                # Mindmaps

# Testing
vitest
@testing-library/react
jsdom
```

---

## 🏗️ Architecture & Structure

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx          # Layout global (fonts, providers)
│   ├── page.tsx            # Homepage
│   ├── globals.css         # Styles globaux + CSS variables
│   └── courses/
│       ├── page.tsx        # Liste des cours (SSG)
│       └── [slug]/
│           ├── page.tsx    # Détail cours (SSG)
│           └── lessons/
│               └── [lessonId]/
│                   └── page.tsx  # Contenu leçon (SSG)
│
├── components/
│   ├── ui/                 # Composants UI génériques (Button, Card, etc.)
│   ├── course/             # Composants spécifiques aux cours
│   ├── mindmap/            # Composants de visualisation
│   ├── layout.tsx          # Header, Footer
│   └── providers.tsx       # Context providers (Theme, Locale, Toast)
│
├── lib/
│   ├── data/
│   │   └── courses/        # 📚 DONNÉES DES COURS
│   │       ├── index.ts    # Export centralisé
│   │       ├── courses-list.ts  # Liste légère pour /courses
│   │       └── [category]/
│   │           └── [course-slug]/
│   │               ├── meta.ts      # Métadonnées du cours
│   │               └── lessons/
│   │                   └── lesson-XXX.ts  # Contenu des leçons
│   ├── schemas/            # Zod schemas pour validation
│   ├── store.ts            # Zustand store (locale, theme, progress)
│   └── utils.ts            # Utilitaires (cn, formatters)
│
├── locales/                # Traductions (ar.json, en.json, fr.json)
├── styles/
│   └── theme.ts            # Design tokens exportés
└── types/
    └── index.ts            # Types TypeScript globaux
```

---

## 📚 Ajouter un Nouveau Cours

### 1. Créer la structure

```bash
# Remplacer [category] et [course-slug] par les valeurs appropriées
mkdir -p src/lib/data/courses/[category]/[course-slug]/lessons
```

### 2. Créer le fichier `meta.ts`

```typescript
// src/lib/data/courses/fiqh/mon-nouveau-cours/meta.ts

import type { Course } from '@/types'

// Importer les leçons
import { lesson001 } from './lessons/lesson-001'
import { lesson002 } from './lessons/lesson-002'

export const monNouveauCours: Course = {
  id: 'mon-nouveau-cours',
  slug: 'mon-nouveau-cours',
  
  // Titres multilingues (OBLIGATOIRE)
  title: {
    fr: 'Mon Nouveau Cours',
    ar: 'الدورة الجديدة',
    en: 'My New Course',
  },
  
  // Descriptions multilingues (OBLIGATOIRE)
  description: {
    fr: 'Description en français...',
    ar: 'الوصف بالعربية...',
    en: 'Description in English...',
  },
  
  // Catégorie (OBLIGATOIRE) - voir liste ci-dessous
  category: 'fiqh',
  
  // Niveau (OBLIGATOIRE)
  level: 'beginner', // 'beginner' | 'intermediate' | 'advanced'
  
  // Durée estimée en minutes (OBLIGATOIRE)
  duration: 120,
  
  // Image du cours (OPTIONNEL - sinon emoji par défaut)
  image: '/images/courses/fiqh.svg',
  
  // Tags pour la recherche (OBLIGATOIRE - minimum 3)
  tags: ['fiqh', 'ibadat', 'pratique'],
  
  // Leçons (OBLIGATOIRE - minimum 1)
  lessons: [lesson001, lesson002],
  
  // Source/Auteur (OPTIONNEL mais recommandé)
  source: 'Zad Academy - Niveau 1',
}
```

### 3. Catégories disponibles

| Catégorie | Description | Emoji |
|-----------|-------------|-------|
| `quran` | Sciences du Coran | 📖 |
| `tajweed` | Règles de récitation | 🎙️ |
| `tafsir` | Exégèse coranique | 📜 |
| `hadith` | Sciences du Hadith | 📚 |
| `fiqh` | Jurisprudence islamique | ⚖️ |
| `aqeedah` | Croyance islamique | 💫 |
| `seerah` | Biographie prophétique | 🌙 |
| `arabic` | Langue arabe | ✏️ |

### 4. Enregistrer le cours

```typescript
// src/lib/data/courses/index.ts
import { monNouveauCours } from './fiqh/mon-nouveau-cours/meta'

export const coursesData: Course[] = [
  // ... cours existants
  monNouveauCours,
]
```

```typescript
// src/lib/data/courses/courses-list.ts (liste légère)
// Ajouter l'entrée correspondante pour la page /courses
```

---

## 📝 Ajouter une Nouvelle Leçon

### 1. Créer le fichier de leçon

```typescript
// src/lib/data/courses/fiqh/mon-cours/lessons/lesson-001.ts

import type { Lesson } from '@/types'

export const lesson001: Lesson = {
  id: 'lesson-001',
  
  // Titres multilingues (OBLIGATOIRE)
  title: {
    fr: 'Leçon 1 : Introduction',
    ar: 'الدرس الأول: المقدمة',
    en: 'Lesson 1: Introduction',
  },
  
  // Durée en minutes (OBLIGATOIRE)
  duration: 15,
  
  // Type de contenu (OBLIGATOIRE)
  type: 'text', // 'text' | 'video' | 'quiz'
  
  // Contenu Markdown (OBLIGATOIRE pour type: 'text')
  content: {
    fr: `
# Introduction

Contenu de la leçon en **Markdown**...

## Section 1

- Point 1
- Point 2

> Citation ou hadith

## Section 2

Texte avec terme arabe : **الصلاة** (as-salat).
    `,
    ar: `
# المقدمة

محتوى الدرس...
    `,
    en: `
# Introduction

Lesson content...
    `,
  },
  
  // Vidéo YouTube (OPTIONNEL)
  videoUrl: 'https://www.youtube.com/watch?v=XXXXXXXXXXX',
  
  // Mindmap (OPTIONNEL mais RECOMMANDÉ)
  mindmap: {
    central: 'Concept Central',
    branches: [
      {
        id: 'branch-1',
        label: 'Branche 1',
        children: [
          { id: 'child-1', label: 'Sous-concept 1' },
          { id: 'child-2', label: 'Sous-concept 2' },
        ],
      },
    ],
  },
  
  // Ressources complémentaires (OPTIONNEL)
  resources: [
    {
      id: 'res-1',
      title: { fr: 'PDF du cours', ar: 'ملف PDF', en: 'Course PDF' },
      type: 'pdf',
      url: '/resources/mon-cours.pdf',
    },
  ],
}
```

### 2. Conventions de nommage des leçons

| Format | Exemple | Usage |
|--------|---------|-------|
| `lesson-XXX` | `lesson-001` | ID standard (3 chiffres) |
| Titre FR | `Leçon X : Titre` | Avec numéro |
| Titre AR | `الدرس X: العنوان` | Avec numéro arabe ou hindou |

### 3. Structure Markdown recommandée

```markdown
# Titre Principal

Introduction du sujet...

## 1. Première Section

Contenu avec **termes importants** en gras.

### Définition

> Définition ou citation avec source

### Points clés

1. Premier point
2. Deuxième point
3. Troisième point

## 2. Deuxième Section

### Sous-section

- Élément de liste
- Avec détails

## Résumé

Points essentiels à retenir...
```

---

## 💻 Conventions de Code

### TypeScript

```typescript
// ✅ BON - Types explicites pour les props
interface CourseCardProps {
  course: Course
  showProgress?: boolean
}

// ❌ MAUVAIS - any ou types implicites
const CourseCard = (props: any) => { }
```

### Composants React

```typescript
// ✅ BON - Composant fonctionnel avec FC implicite
export function CourseCard({ course, showProgress = false }: CourseCardProps) {
  return (...)
}

// ✅ BON - forwardRef pour les composants UI
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, ...props }, ref) => (...)
)
Button.displayName = 'Button'
```

### Imports

```typescript
// 1. React/Next
import { useState, useEffect } from 'react'
import Link from 'next/link'

// 2. Librairies externes
import { BookOpen, ChevronRight } from 'lucide-react'

// 3. Composants internes (alias @/)
import { Button } from '@/components/ui/button'
import { useLocale } from '@/components/providers'

// 4. Types
import type { Course, Lesson } from '@/types'
```

### Nommage

| Type | Convention | Exemple |
|------|------------|---------|
| Composants | PascalCase | `CourseCard.tsx` |
| Hooks | camelCase avec `use` | `useLocale()` |
| Utilitaires | camelCase | `formatDuration()` |
| Constantes | UPPER_SNAKE_CASE | `API_BASE_URL` |
| Fichiers data | kebab-case | `lesson-001.ts` |

---

## 🎨 Design System

### Couleurs (CSS Variables)

```css
/* Utiliser UNIQUEMENT les variables */
.element {
  background: hsl(var(--primary));      /* ✅ */
  background: #10b981;                   /* ❌ */
  
  color: hsl(var(--foreground));         /* ✅ */
  color: black;                          /* ❌ */
}
```

| Variable | Usage |
|----------|-------|
| `--primary` | Actions principales, liens, accents |
| `--secondary` | Éléments secondaires |
| `--muted` | Backgrounds subtils |
| `--muted-foreground` | Texte secondaire |
| `--destructive` | Erreurs, suppressions |
| `--success` | Validations, succès |

### Composants UI

Toujours utiliser les composants du design system :

```typescript
// ✅ BON
import { Button } from '@/components/ui/button'
<Button variant="default" size="lg">Action</Button>

// ❌ MAUVAIS
<button className="bg-emerald-500 px-4 py-2">Action</button>
```

### Espacements

Utiliser les classes Tailwind standard :

| Classe | Valeur | Usage |
|--------|--------|-------|
| `gap-2` | 8px | Entre icône et texte |
| `gap-4` | 16px | Entre éléments de liste |
| `gap-6` | 24px | Entre sections |
| `p-4` | 16px | Padding cards |
| `py-8` | 32px | Sections verticales |

### Responsive

```typescript
// Mobile-first approach
<div className="
  grid 
  grid-cols-1          // Mobile: 1 colonne
  sm:grid-cols-2       // ≥640px: 2 colonnes
  lg:grid-cols-3       // ≥1024px: 3 colonnes
  gap-6
">
```

### RTL Support

```typescript
import { cn } from '@/lib/utils'
import { useLocale } from '@/components/providers'

function MyComponent() {
  const { isRTL } = useLocale()
  
  return (
    <div className={cn(
      'flex gap-2',
      isRTL && 'flex-row-reverse'  // Inverser pour RTL
    )}>
      <Icon className={cn(isRTL && 'rotate-180')} />
      <span>{text}</span>
    </div>
  )
}
```

---

## 🌍 Internationalisation (i18n)

### Structure des fichiers

```
src/locales/
├── ar.json    # Arabe
├── en.json    # Anglais
├── fr.json    # Français (langue par défaut)
└── index.ts   # Export et helpers
```

### Ajouter une traduction

```json
// fr.json
{
  "courses": {
    "newSection": {
      "title": "Nouveau titre",
      "description": "Nouvelle description"
    }
  }
}
```

```json
// ar.json
{
  "courses": {
    "newSection": {
      "title": "العنوان الجديد",
      "description": "الوصف الجديد"
    }
  }
}
```

### Utilisation

```typescript
const { t, locale } = useLocale()

// Traduction simple
<h1>{t('courses.newSection.title')}</h1>

// Avec interpolation
<p>{t('courses.count', { count: 5 })}</p>
// fr.json: "courses.count": "{count} cours disponibles"

// Contenu multilingue (courses/lessons)
<h2>{course.title[locale]}</h2>
```

---

## 🧪 Tests

### Lancer les tests

```bash
npm run test          # Mode watch
npm run test:ui       # Interface Vitest UI
npm run test:coverage # Avec couverture
```

### Écrire un test

```typescript
// src/__tests__/lib/my-function.test.ts
import { describe, it, expect } from 'vitest'
import { myFunction } from '@/lib/my-function'

describe('myFunction', () => {
  it('should return expected result', () => {
    expect(myFunction('input')).toBe('expected')
  })
  
  it('should handle edge cases', () => {
    expect(myFunction('')).toBeNull()
  })
})
```

### Ce qui doit être testé

- ✅ Fonctions utilitaires (`lib/utils/`)
- ✅ Logique de données (`lib/data/`)
- ✅ Hooks personnalisés
- ⚠️ Composants critiques (optionnel)

---

## 📝 Git & Commits

### Format des commits

```
type(scope): description courte

[corps optionnel]

[footer optionnel]
```

### Types

| Type | Usage |
|------|-------|
| `feat` | Nouvelle fonctionnalité |
| `fix` | Correction de bug |
| `docs` | Documentation |
| `style` | Formatage (pas de changement logique) |
| `refactor` | Refactoring |
| `test` | Ajout/modification de tests |
| `chore` | Maintenance, dépendances |
| `content` | Ajout/modification de contenu (cours, leçons) |

### Exemples

```bash
# Nouveau cours
git commit -m "content(fiqh): add course on prayer (salat)

- Add 10 lessons covering basics to advanced
- Include mindmaps for each lesson
- Add video resources"

# Nouvelle feature
git commit -m "feat(ui): add course progress indicator

- Show completion percentage on CourseCard
- Persist progress in localStorage
- Add animation on completion"

# Bug fix
git commit -m "fix(rtl): correct icon direction in breadcrumb"
```

### Branches

```bash
main              # Production
feat/xxx          # Nouvelles features
fix/xxx           # Corrections
content/xxx       # Nouveau contenu
```

---

## 🗺️ Créer des MindMaps Interactives

Les mindmaps sont des visualisations pédagogiques interactives basées sur **ReactFlow**. Elles permettent aux étudiants de visualiser les concepts clés d'une leçon de manière structurée.

### 1. Architecture des MindMaps

```
src/
├── components/
│   └── mindmap/
│       ├── MindMap.tsx           # Composant ReactFlow principal
│       ├── CollapsibleMindMap.tsx # Wrapper avec toggle
│       └── index.ts              # Export public
│
└── lib/
    └── data/
        └── mindmaps/
            └── index.ts          # 📌 Registre central des mindmaps
```

### 2. Structure des données MindMap

Les mindmaps utilisent un format **multilingue** (AR/EN/FR) avec une structure hiérarchique :

```typescript
// src/lib/data/mindmaps/index.ts

import type { MindMapData } from '@/components/mindmap';

// Type pour les labels multilingues
interface MultiLangLabel {
  ar: string;
  en: string;
  fr: string;
}

// Type pour les données MindMap avec traductions
export interface MindMapDataMultiLang {
  id: string;                        // ID unique du nœud
  label: MultiLangLabel;             // Texte dans les 3 langues
  children?: MindMapDataMultiLang[]; // Sous-nœuds (optionnel)
  color?: string;                    // Couleur hex (optionnel)
  icon?: string;                     // Emoji (optionnel)
}
```

### 3. Créer une nouvelle MindMap

#### Étape 1 : Définir les données

Ajoutez votre mindmap dans `src/lib/data/mindmaps/index.ts` :

```typescript
// ============================================
// NOM_DU_COURS - Titre de la leçon (lesson-XXX)
// ============================================
export const maNouvelleMindMap: MindMapDataMultiLang = {
  id: 'root',
  label: { 
    ar: 'العنوان الرئيسي',     // Arabe (obligatoire)
    en: 'Main Title',          // Anglais (obligatoire)
    fr: 'Titre Principal'      // Français (obligatoire)
  },
  icon: '📚',                   // Emoji représentatif
  color: '#1e3a5f',            // Couleur du nœud racine
  children: [
    {
      id: 'branch-1',
      label: { ar: 'الفرع الأول', en: 'First Branch', fr: 'Première Branche' },
      icon: '🔹',
      color: '#2d6a4f',
      children: [
        { 
          id: 'child-1-1', 
          label: { ar: 'العنصر ١', en: 'Item 1', fr: 'Élément 1' },
          icon: '•'
        },
        { 
          id: 'child-1-2', 
          label: { ar: 'العنصر ٢', en: 'Item 2', fr: 'Élément 2' },
          icon: '•'
        },
      ],
    },
    {
      id: 'branch-2',
      label: { ar: 'الفرع الثاني', en: 'Second Branch', fr: 'Deuxième Branche' },
      icon: '🔸',
      color: '#7b2cbf',
      children: [
        // ... sous-éléments
      ],
    },
  ],
};
```

#### Étape 2 : Enregistrer dans le mapping

Ajoutez la mindmap au registre `lessonMindMapsMultiLang` :

```typescript
// Format: 'cours-slug:lesson-id'
export const lessonMindMapsMultiLang: Record<string, MindMapDataMultiLang> = {
  // Cours Aqeedah
  'aqeedah:lesson-001': introductionAqeedahData,
  'aqeedah:lesson-009': qadarData,
  
  // Cours Fiqh
  'fiqh:lesson-001': introductionFiqhData,
  'fiqh:lesson-002': taharaData,
  
  // ➕ Votre nouvelle mindmap
  'mon-cours:lesson-XXX': maNouvelleMindMap,
};
```

### 4. Palette de couleurs recommandée

| Couleur | Hex | Usage |
|---------|-----|-------|
| 🔵 Bleu foncé | `#1e3a5f` | Nœud racine |
| 🟢 Vert foncé | `#2d6a4f` | Définitions, bases |
| 🟣 Violet | `#7b2cbf` | Piliers, fondamentaux |
| 🔴 Rouge rosé | `#c9184a` | Avertissements, erreurs |
| 🟤 Marron | `#9c6644` | Applications pratiques |
| 🔵 Cyan | `#0891b2` | Preuves, évidences |
| 💚 Émeraude | `#059669` | Recommandations, vertus |
| 💜 Violet clair | `#7c3aed` | Cas particuliers |

### 5. Bonnes pratiques pédagogiques

#### Structure hiérarchique
```
📌 Concept Central (1 seul)
├── 📂 Branche 1 (3-6 branches max)
│   ├── 📄 Sous-concept 1.1
│   ├── 📄 Sous-concept 1.2
│   └── 📄 Sous-concept 1.3
├── 📂 Branche 2
│   └── ...
```

#### Règles de contenu

| Règle | ✅ Bon | ❌ Mauvais |
|-------|--------|-----------|
| Longueur | `الصلاة` / `Prayer` | `The act of praying to Allah five times daily` |
| Précision | `الركوع` / `Ruku` | `Bending` |
| Cohérence | Termes techniques AR | Translittération uniquement |
| Icônes | 1 emoji par nœud | 3+ emojis |

#### Quand créer une MindMap ?

| Leçon | MindMap recommandée |
|-------|---------------------|
| Introduction à un sujet | ✅ Oui (vue d'ensemble) |
| Liste de conditions/piliers | ✅ Oui (mémorisation) |
| Règles détaillées | ✅ Oui (structure) |
| Histoire/récit | ❌ Non (timeline mieux) |
| Exercices pratiques | ❌ Non (texte suffit) |

### 6. Exemple complet : MindMap du Wudu

```typescript
export const wuduData: MindMapDataMultiLang = {
  id: 'root',
  label: { ar: 'الوضوء', en: 'Wudu (Ablution)', fr: 'Le Wudu (Ablutions)' },
  icon: '🚿',
  color: '#1e3a5f',
  children: [
    {
      id: 'conditions',
      label: { ar: 'شروط الصحة', en: 'Conditions', fr: 'Conditions de Validité' },
      icon: '✅',
      color: '#2d6a4f',
      children: [
        { id: 'islam', label: { ar: 'الإسلام', en: 'Islam', fr: 'Islam' }, icon: '☪️' },
        { id: 'sanity', label: { ar: 'العقل', en: 'Sanity', fr: 'Raison' }, icon: '🧠' },
        { id: 'intention', label: { ar: 'النية', en: 'Intention', fr: 'Intention' }, icon: '❤️' },
        { id: 'pure-water', label: { ar: 'الماء الطهور', en: 'Pure Water', fr: 'Eau Pure' }, icon: '💧' },
      ],
    },
    {
      id: 'obligatory',
      label: { ar: 'الفرائض', en: 'Obligatory Acts', fr: 'Actes Obligatoires' },
      icon: '⭐',
      color: '#7b2cbf',
      children: [
        { id: 'face', label: { ar: 'غسل الوجه', en: 'Wash face', fr: 'Laver le visage' }, icon: '😊' },
        { id: 'arms', label: { ar: 'غسل اليدين', en: 'Wash arms', fr: 'Laver les bras' }, icon: '💪' },
        { id: 'head', label: { ar: 'مسح الرأس', en: 'Wipe head', fr: 'Essuyer la tête' }, icon: '👤' },
        { id: 'feet', label: { ar: 'غسل الرجلين', en: 'Wash feet', fr: 'Laver les pieds' }, icon: '🦶' },
      ],
    },
    {
      id: 'nullifiers',
      label: { ar: 'النواقض', en: 'Nullifiers', fr: 'Annulatifs' },
      icon: '❌',
      color: '#c9184a',
      children: [
        { id: 'exit', label: { ar: 'الخارج من السبيلين', en: 'What exits passages', fr: 'Ce qui sort des 2 voies' }, icon: '🚽' },
        { id: 'sleep', label: { ar: 'النوم المستغرق', en: 'Deep sleep', fr: 'Sommeil profond' }, icon: '😴' },
      ],
    },
  ],
};
```

### 7. Tester votre MindMap

```bash
# 1. Vérifier la compilation
npm run build

# 2. Lancer en local
npm run dev

# 3. Naviguer vers la leçon avec la mindmap
# http://localhost:3000/courses/[cours]/lessons/[lesson-id]
```

### 8. Fonction utilitaire

Pour récupérer une mindmap dans un composant :

```typescript
import { getMindMapForLesson } from '@/lib/data/mindmaps';

// Dans un composant de leçon
const mindmapData = getMindMapForLesson('lesson-001', 'ar', 'fiqh');

if (mindmapData) {
  return <MindMap data={mindmapData} title="خريطة المفاهيم" />;
}
```

### 9. Checklist MindMap

Avant de commit une nouvelle mindmap :

- [ ] Nœud racine avec `id: 'root'`
- [ ] Labels en 3 langues (ar, en, fr)
- [ ] Icône emoji pour chaque branche principale
- [ ] Couleurs distinctes par niveau
- [ ] Maximum 6 branches au niveau 1
- [ ] Maximum 6 sous-éléments par branche
- [ ] IDs uniques pour tous les nœuds
- [ ] Enregistrée dans `lessonMindMapsMultiLang`
- [ ] Build passant (`npm run build`)

---

## ✅ Checklist de Validation

### Avant de soumettre un nouveau cours

- [ ] Titres en 3 langues (FR, AR, EN)
- [ ] Descriptions en 3 langues
- [ ] Catégorie valide
- [ ] Niveau défini
- [ ] Durée estimée réaliste
- [ ] Minimum 3 tags pertinents
- [ ] Au moins 1 leçon
- [ ] Cours enregistré dans `index.ts` et `courses-list.ts`

### Avant de soumettre une leçon

- [ ] Contenu en 3 langues
- [ ] Durée estimée
- [ ] Type défini (text/video/quiz)
- [ ] Markdown valide et bien formaté
- [ ] Termes arabes avec translittération
- [ ] Mindmap si applicable
- [ ] Sources citées pour hadiths/citations

### Avant de soumettre du code

- [ ] `npm run build` passe sans erreur
- [ ] `npm run test` passe
- [ ] Pas de `any` TypeScript
- [ ] Composants UI du design system utilisés
- [ ] Support RTL vérifié
- [ ] Responsive testé (mobile/desktop)
- [ ] Traductions ajoutées si texte UI

### Avant le commit

- [ ] Message de commit au bon format
- [ ] Fichiers non nécessaires exclus (.DS_Store, etc.)
- [ ] Pas de console.log oubliés
- [ ] Pas de clés API/secrets

---

## 🤲 Rappel

> Ce projet est une **Sadaqa Jariya** (aumône continue). 
> Chaque contribution, aussi petite soit-elle, peut être une source de récompense.
> 
> **« اللَّهُمَّ انْفَعْنِي بِمَا عَلَّمْتَنِي، وَعَلِّمْنِي مَا يَنْفَعُنِي، وَزِدْنِي عِلْمًا »**
> 
> *"Ô Allah, fais-moi bénéficier de ce que Tu m'as enseigné, enseigne-moi ce qui me sera utile, et augmente ma science."*

---

**Maintenu par** : Équipe Qaf / Zad Academy  
**Dernière mise à jour** : Décembre 2024
