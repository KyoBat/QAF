# 🏠 Charte UX - Écran d'Accueil Rabbi Zidni Ilma

> **Date:** 25 janvier 2026  
> **Objectif:** Standardiser et améliorer l'expérience utilisateur de la page d'accueil  
> **Portée:** HomePage, HomePageClient, composants UI associés

---

## 📋 Table des Matières

1. [Analyse État Actuel](#-analyse-état-actuel)
2. [Principes de Design](#-principes-de-design)
3. [Architecture Visuelle](#-architecture-visuelle)
4. [Charte des Composants](#-charte-des-composants)
5. [Animations & Interactions](#-animations--interactions)
6. [Accessibilité & Performance](#-accessibilité--performance)
7. [Standards de Code](#-standards-de-code)
8. [Roadmap d'Amélioration](#-roadmap-damélioration)

---

## 🔍 Analyse État Actuel

### ✅ Points Forts
- **Architecture propre** : Séparation Server/Client Components (Next.js 14)
- **Multilingue natif** : Support AR, FR, EN avec RTL automatique
- **Performance** : Lazy loading des icônes, composants optimisés
- **Accessibilité** : Utilisation de composants shadcn/ui accessibles
- **Responsive** : Grid adaptatif et breakpoints cohérents
- **Dark mode** : Support complet avec variables CSS

### ⚠️ Points d'Amélioration Identifiés

#### 1. Hero Section
**Problème:** Design trop statique et classique
```tsx
// Actuel : Gradient simple + Badge + Titre
<div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary/10" />
```

**Impact:** Manque d'engagement émotionnel immédiat

#### 2. Absence de Preuve Sociale
**Problème:** Aucun témoignage, statistique d'engagement ou social proof
**Impact:** Faible crédibilité perçue pour nouveaux visiteurs

#### 3. Featured Course Peu Attractif
**Problème:** Emoji géant (⚖️) et layout statique
```tsx
<div className="text-8xl mb-4">⚖️</div>
```

**Impact:** Manque de professionnalisme et d'attractivité visuelle

#### 4. Pas de CTA Newsletter
**Problème:** Aucune capture d'email sur la page d'accueil
**Impact:** Perte d'opportunités de conversion

#### 5. Micro-interactions Limitées
**Problème:** Pas d'animations au scroll ni d'effets de parallaxe
**Impact:** Expérience statique et peu engageante

#### 6. Visuels Génériques
**Problème:** Utilisation d'emojis au lieu d'icônes SVG personnalisées
**Impact:** Manque d'identité visuelle forte

---

## 🎨 Principes de Design

### Identité Visuelle de la Marque

#### Palette de Couleurs
```css
/* Primaire - Vert Islamique */
--primary: 160 84% 39%        /* #0FA971 */
--primary-hover: 160 84% 35%   /* Plus foncé au hover */

/* Accents */
--success: 142 76% 36%         /* Validation */
--warning: 38 92% 50%          /* Coming soon */
--info: 199 89% 48%            /* Informations */

/* Gradients Recommandés */
--gradient-hero: linear-gradient(135deg, hsl(160 84% 39% / 0.1) 0%, hsl(160 84% 50% / 0.05) 100%)
--gradient-card: linear-gradient(to bottom right, hsl(160 84% 39% / 0.05), hsl(160 84% 39% / 0.1))
```

#### Typographie
```tsx
// Hiérarchie des titres
h1: text-4xl sm:text-5xl lg:text-6xl font-bold     // Hero principal
h2: text-3xl sm:text-4xl font-bold                 // Titres de sections
h3: text-2xl sm:text-3xl font-semibold             // Sous-titres
h4: text-xl font-semibold                           // Card titles

// Support multilingue
{isRTL && 'font-arabic leading-relaxed'}
```

#### Espacements Standard
```tsx
// Sections
py-20 lg:py-32    // Hero section
py-20             // Sections standards
py-16             // Sections secondaires

// Conteneurs
max-w-7xl mx-auto px-4 sm:px-6 lg:px-8

// Grids
gap-4   // Cards compactes
gap-6   // Features
gap-8   // Stats
```

### Principes d'Interaction

#### 1. **Progressive Disclosure**
- Afficher l'essentiel en premier
- Révéler les détails au scroll ou au hover
- Utiliser des animations pour guider l'attention

#### 2. **Feedback Immédiat**
- Hover states sur tous les éléments interactifs
- Transitions fluides (300ms duration)
- États de loading clairs

#### 3. **Hiérarchie Visuelle Claire**
- CTA primaire toujours visible
- Contraste élevé pour les actions importantes
- Utilisation stratégique des couleurs

#### 4. **Cohérence Multilingue**
- Mêmes espacements en AR/FR/EN
- RTL automatique et naturel
- Émojis/icônes universels

---

## 🏗️ Architecture Visuelle

### Structure de la Page

```
┌─────────────────────────────────────┐
│  Hero Section (py-20 lg:py-32)     │
│  - Badge tagline                    │
│  - Titre principal + sous-titre     │
│  - CTA primaire + secondaire        │
│  - Stats (3 colonnes)               │
│  - [NOUVEAU] Floating badges        │
└─────────────────────────────────────┘
┌─────────────────────────────────────┐
│  [NOUVEAU] Trust Section (py-16)   │
│  - Social proof numbers             │
│  - Micro-testimonials               │
└─────────────────────────────────────┘
┌─────────────────────────────────────┐
│  Features Section (py-20)           │
│  - Feature principale (Gratuit)     │
│  - 4 features secondaires (grid)    │
└─────────────────────────────────────┘
┌─────────────────────────────────────┐
│  Featured Course (py-20)            │
│  - [AMÉLIORER] Visuel attractif     │
│  - Informations cours               │
│  - Preview leçons                   │
│  - CTA "Commencer"                  │
└─────────────────────────────────────┘
┌─────────────────────────────────────┐
│  [NOUVEAU] Newsletter CTA (py-16)  │
│  - Illustration moderne             │
│  - Formulaire inline                │
│  - Incentive (PDF gratuit)          │
└─────────────────────────────────────┘
┌─────────────────────────────────────┐
│  Categories Preview (py-20)         │
│  - Header avec CTA "Voir tout"      │
│  - Grid 2x4 des catégories          │
└─────────────────────────────────────┘
┌─────────────────────────────────────┐
│  [NOUVEAU] Why Choose RZI (py-20)  │
│  - Storytelling mission             │
│  - Différenciation                  │
│  - CTA émotionnel                   │
└─────────────────────────────────────┘
```

---

## 🧩 Charte des Composants

### Hero Section

#### Badge Tagline
```tsx
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full 
                bg-primary/10 text-primary text-sm font-medium mb-6 
                animate-fade-in">
  <Star className="h-4 w-4" />
  <span>{t('app.tagline')}</span>
</div>
```

**Standards:**
- Toujours centré
- Animation fade-in au chargement
- Icône + texte
- Couleur primary
- Padding cohérent

#### Stats Cards
```tsx
<div className="text-3xl sm:text-4xl font-bold text-primary mb-1">
  {stat.value}
</div>
<div className="text-sm text-muted-foreground">
  {stat.label}
</div>
```

**Standards:**
- 3 stats maximum
- Nombres en bold + primary color
- Label en muted-foreground
- Grid de 3 colonnes
- Responsive (text-3xl → text-4xl)

### Feature Cards

#### Card Standard
```tsx
<Card className="relative overflow-hidden group 
                 hover:border-primary/30 transition-all duration-300">
  <CardContent className="pt-6">
    <div className="w-14 h-14 rounded-xl bg-primary/10 
                    flex items-center justify-center mb-4 
                    group-hover:bg-primary/20 transition-colors">
      <Icon className="h-7 w-7 text-primary" />
    </div>
    <h3 className="text-xl font-semibold text-foreground mb-2">
      {title}
    </h3>
    <p className="text-muted-foreground text-sm">
      {description}
    </p>
  </CardContent>
</Card>
```

**Standards:**
- Icône 14x14 dans un carré arrondi
- Hover effect sur border + background icône
- Titre xl, description sm
- Toujours centré
- Transition 300ms

#### Feature Principale (Gratuit)
```tsx
<Card className="relative overflow-hidden border-2 border-primary/30 
                 bg-gradient-to-br from-primary/5 to-primary/10 
                 hover:border-primary/50 transition-all duration-300">
  {/* Badge ✨ obligatoire */}
  <Badge variant="secondary" className="bg-primary/20 text-primary border-0">
    ✨
  </Badge>
</Card>
```

**Standards:**
- Border 2px (plus épais)
- Gradient de fond
- Badge décoratif
- Layout horizontal sur desktop
- Icône 16x16 (plus grande)

### Featured Course Card

#### Structure Recommandée
```tsx
<Card className="overflow-hidden border-2 border-primary/20 
                 hover:border-primary/40 transition-all duration-300">
  <div className="grid md:grid-cols-2 gap-0">
    {/* Partie visuelle */}
    <div className="relative bg-gradient-to-br from-primary/20 
                    via-primary/10 to-primary/5 p-8">
      {/* [À AMÉLIORER] Remplacer emoji par illustration/vidéo */}
    </div>
    
    {/* Partie contenu */}
    <CardContent className="p-8">
      {/* Badge + Titre + Description + Meta + Leçons + CTA */}
    </CardContent>
  </div>
</Card>
```

**Standards:**
- Grid 2 colonnes sur desktop
- Partie gauche : visuel (illustration/vidéo)
- Partie droite : informations structurées
- Hover effect sur border
- Badge "Nouveau" si featured

### Category Cards

```tsx
<Card className="p-6 text-center transition-all duration-300 
                 hover:border-primary/30 hover:shadow-md">
  <div className="text-4xl mb-3">{emoji}</div>
  <h3 className="font-semibold text-foreground mb-1 
                 group-hover:text-primary transition-colors">
    {title}
  </h3>
  <p className="text-sm text-muted-foreground">
    {count} {t('courses.courses')}
  </p>
</Card>
```

**Standards:**
- Emoji 4xl (ou icône SVG 48x48)
- Titre change de couleur au hover (→ primary)
- Compteur de cours
- Grid 2x4 responsive (2 cols mobile, 4 desktop)
- Coming soon : opacity-60 + border-dashed

---

## ✨ Animations & Interactions

### Animations CSS Recommandées

```css
/* Fade in au chargement */
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 0.6s ease-out;
}

/* Pulse subtil pour attirer l'attention */
@keyframes pulse-subtle {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.8;
  }
}

.animate-pulse-subtle {
  animation: pulse-subtle 2s ease-in-out infinite;
}

/* Slide up pour sections au scroll */
@keyframes slide-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Gradient animé pour hero */
@keyframes gradient-shift {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

.animate-gradient {
  background-size: 200% 200%;
  animation: gradient-shift 8s ease infinite;
}
```

### Transitions Standards

```tsx
// Hover effects sur cards
className="transition-all duration-300 hover:border-primary/30 hover:shadow-md"

// Hover effects sur boutons
className="transition-colors duration-200 hover:bg-primary/90"

// Hover effects sur icônes
className="transition-transform duration-300 group-hover:scale-110"

// Smooth scroll
<Button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>

// Stagger animations pour listes
{items.map((item, idx) => (
  <div 
    key={item.id}
    style={{ animationDelay: `${idx * 100}ms` }}
    className="animate-fade-in"
  >
    {/* content */}
  </div>
))}
```

### Micro-interactions à Implémenter

#### 1. **Hover Effects Sophistiqués**
```tsx
// Card avec glow effect
<Card className="relative group">
  <div className="absolute inset-0 bg-gradient-to-r from-primary/0 
                  via-primary/5 to-primary/0 opacity-0 
                  group-hover:opacity-100 transition-opacity duration-500" />
  {/* content */}
</Card>
```

#### 2. **Ripple Effect sur Boutons**
```tsx
// À implémenter avec lib ou CSS custom
<Button className="relative overflow-hidden">
  <span className="relative z-10">{text}</span>
  {/* Ripple overlay */}
</Button>
```

#### 3. **Parallax Subtil**
```tsx
// Utiliser transform: translateY(-${scrollY * 0.1}px)
// Sur les éléments décoratifs du hero
```

#### 4. **Count Up Animation pour Stats**
```tsx
// Animer les nombres de 0 à valeur finale
// Utiliser Intersection Observer + requestAnimationFrame
```

---

## ♿ Accessibilité & Performance

### Checklist Accessibilité

- [ ] **Contraste suffisant** : Ratio 4.5:1 minimum (texte/background)
- [ ] **Navigation clavier** : Tab order logique
- [ ] **ARIA labels** : Sur tous les boutons d'icône
- [ ] **Alt text** : Sur toutes les images/illustrations
- [ ] **Focus visible** : Outline claire sur focus
- [ ] **Semantic HTML** : `<section>`, `<article>`, `<nav>`
- [ ] **Screen reader friendly** : Textes descriptifs
- [ ] **RTL support** : Direction automatique pour l'arabe

### Standards Accessibilité

```tsx
// Bouton icône TOUJOURS avec aria-label
<Button aria-label={t('common.startCourse')} size="icon">
  <PlayIcon />
</Button>

// Links avec texte descriptif
<Link href="/courses" aria-label="Voir tous les cours disponibles">
  {t('courses.viewAll')}
</Link>

// Images décoratives
<img src="..." alt="" role="presentation" />

// Images informatives
<img src="..." alt="Illustration du cours de Fiqh" />

// Skip to content
<a href="#main-content" className="sr-only focus:not-sr-only">
  Aller au contenu principal
</a>
```

### Performance Checklist

- [ ] **Images optimisées** : Next.js Image component
- [ ] **Lazy loading** : Composants below the fold
- [ ] **Code splitting** : Dynamic imports pour icônes
- [ ] **Préchargement** : Critical resources
- [ ] **Compression** : Minification CSS/JS
- [ ] **Cache stratégique** : Static assets
- [ ] **Monitoring** : Core Web Vitals

### Standards Performance

```tsx
// Images TOUJOURS via next/image
import Image from 'next/image'

<Image 
  src="/images/hero.jpg"
  alt="..."
  width={1200}
  height={600}
  priority={isAboveFold}
  placeholder="blur"
/>

// Lazy load composants lourds
const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <Skeleton />,
  ssr: false
})

// Lazy load icônes (déjà fait)
const Icon = dynamic(() => import('lucide-react').then(mod => ({ 
  default: mod.IconName 
})), { ssr: false })
```

---

## 💻 Standards de Code

### Architecture des Composants

```tsx
// ✅ CORRECT : Server Component (page.tsx)
export default function HomePage() {
  // Calculs côté serveur
  const data = fetchData()
  
  return <HomePageClient data={data} />
}

// ✅ CORRECT : Client Component (HomePageClient.tsx)
'use client'

export default function HomePageClient({ data }: Props) {
  const { locale, t, isRTL } = useLocale()
  
  return (
    // JSX avec hooks et interactivité
  )
}

// ❌ INCORRECT : Tout dans un seul composant client
'use client'
export default function HomePage() {
  const data = fetchData() // ❌ Pas de fetch côté client
  // ...
}
```

### Conventions de Nommage

```tsx
// Composants
- PascalCase : HomePageClient, FeatureCard
- Suffixe explicite : ...Client, ...Server, ...Skeleton

// Props
- Interface explicite : HomePageClientProps
- Type strict : Course | null (pas any)

// Fonctions
- camelCase : getFeaturedCourses, calculateStats
- Préfixes : get, fetch, calculate, handle, on

// CSS Classes
- kebab-case : .hero-section, .feature-card
- Tailwind uniquement (pas de CSS modules)

// Fichiers
- PascalCase : HomePageClient.tsx
- kebab-case : course-card.tsx
- Extension : .tsx (pas .jsx)
```

### Structure des Sections

```tsx
// Template de section
<section className="py-20 bg-muted/30">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Header */}
    <div className={cn('text-center mb-12', isRTL && 'font-arabic')}>
      <h2 className="text-3xl sm:text-4xl font-bold mb-4">
        {t('section.title')}
      </h2>
      <p className="text-muted-foreground max-w-2xl mx-auto">
        {t('section.subtitle')}
      </p>
    </div>

    {/* Content */}
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map(item => (
        <ItemCard key={item.id} {...item} />
      ))}
    </div>
  </div>
</section>
```

### Gestion RTL

```tsx
// ✅ TOUJOURS utiliser isRTL
const { isRTL } = useLocale()

// Direction du texte
<div className={cn('text-left', isRTL && 'text-right font-arabic')}>

// Flex direction
<div className={cn('flex flex-row', isRTL && 'flex-row-reverse')}>

// Icônes directionnelles
<ChevronRight className={cn('h-5 w-5', isRTL && 'rotate-180')} />

// Padding/Margin asymétriques
<div className={cn('pl-4', isRTL && 'pr-4 pl-0')}>
```

### Gestion des Traductions

```tsx
// ✅ CORRECT : Clés structurées
t('home.hero.title')
t('home.features.free.description')
t('courses.categories.fiqh')

// ✅ CORRECT : Pluralization
{count > 1 ? t('courses.courses') : t('courses.course')}

// ✅ CORRECT : Interpolation
t('home.stats.students', { count: 2500 })

// ❌ INCORRECT : Texte en dur
<h1>Bienvenue sur Rabbi Zidni Ilma</h1>
```

---

## 🚀 Roadmap d'Amélioration

### Phase 1 : Quick Wins (Priorité Haute) ⚡
**Temps estimé : 2-3 heures**

#### 1.1 Animations CSS
- [ ] Créer fichier `animations.css` avec keyframes standards
- [ ] Ajouter fade-in sur tous les éléments au chargement
- [ ] Hover effects sophistiqués sur cards
- [ ] Micro-animations sur CTAs (pulse subtil)

#### 1.2 Hero Section Amélioré
- [ ] Gradient animé en arrière-plan
- [ ] Floating badges avec animations
- [ ] Badge tagline avec animation d'entrée
- [ ] CTA primaire avec effet hover

#### 1.3 Featured Course Visuel
- [ ] Remplacer emoji géant par illustration SVG
- [ ] Ajouter preview visuelle du contenu
- [ ] Améliorer le layout de la card
- [ ] Ajouter badges de difficulté colorés

#### 1.4 Newsletter CTA Section
- [ ] Créer composant Newsletter inline
- [ ] Design avec illustration moderne
- [ ] Formulaire avec validation
- [ ] Incentive (PDF gratuit)
- [ ] Social proof ("2,500+ étudiants")

**Livrable :** Page d'accueil plus dynamique et engageante

---

### Phase 2 : Impact Moyen (Priorité Moyenne) 🎯
**Temps estimé : 4-5 heures**

#### 2.1 Section Témoignages
```tsx
<section className="py-20">
  <TestimonialsCarousel>
    {testimonials.map(testimonial => (
      <TestimonialCard 
        avatar={testimonial.avatar}
        name={testimonial.name}
        course={testimonial.course}
        quote={testimonial.quote}
        rating={testimonial.rating}
      />
    ))}
  </TestimonialsCarousel>
</section>
```

#### 2.2 Section "Pourquoi RZI"
- [ ] Storytelling de la mission
- [ ] 3-4 différenciateurs clés
- [ ] Visuels illustratifs
- [ ] CTA émotionnel

#### 2.3 Stats Dynamiques
- [ ] Count-up animation avec Intersection Observer
- [ ] Stats plus impactantes (avec contexte)
- [ ] Icônes personnalisées
- [ ] Tooltips explicatifs

#### 2.4 Icônes SVG Personnalisées
- [ ] Créer bibliothèque d'icônes SVG custom
- [ ] Style cohérent (géométrie islamique)
- [ ] Remplacer tous les emojis
- [ ] Animations sur les icônes

**Livrable :** Identité visuelle renforcée et crédibilité accrue

---

### Phase 3 : Impact Long Terme (Priorité Basse) 🌟
**Temps estimé : 6-8 heures**

#### 3.1 Système d'Animation au Scroll
```bash
npm install framer-motion
```

```tsx
import { motion } from 'framer-motion'

<motion.section
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>
  {/* content */}
</motion.section>
```

#### 3.2 Vidéo Hero Background
- [ ] Vidéo optimisée (WebM + MP4)
- [ ] Autoplay muté en arrière-plan
- [ ] Overlay avec contrôle opacité
- [ ] Lazy load si below the fold
- [ ] Fallback image pour mobile

#### 3.3 Dashboard Stats Temps Réel
- [ ] Intégration API analytics
- [ ] WebSocket ou polling
- [ ] Compteurs animés en temps réel
- [ ] Cache stratégique

#### 3.4 Illustrations Personnalisées
- [ ] Commander/créer illustrations custom
- [ ] Style cohérent (flat, geometric)
- [ ] Optimisation SVG
- [ ] Animations Lottie (optionnel)

#### 3.5 A/B Testing Framework
- [ ] Setup Vercel Analytics
- [ ] Variants de CTAs
- [ ] Tracking conversions
- [ ] Heatmaps (Hotjar/Clarity)

**Livrable :** Expérience premium et différenciation forte

---

## 📊 Métriques de Succès

### KPIs à Suivre

#### Engagement
- **Bounce rate** : < 40% (objectif)
- **Time on page** : > 2 min (objectif)
- **Scroll depth** : > 75% des visiteurs atteignent le footer
- **Click-through rate** sur CTA primaire : > 15%

#### Conversion
- **Newsletter signup rate** : > 5% des visiteurs
- **Course enrollment** : > 10% des visiteurs cliquent sur un cours
- **Return visitors** : > 30% dans les 7 jours

#### Performance
- **Lighthouse Score** : > 90 (Performance, Accessibility, SEO)
- **LCP (Largest Contentful Paint)** : < 2.5s
- **FID (First Input Delay)** : < 100ms
- **CLS (Cumulative Layout Shift)** : < 0.1

#### Accessibilité
- **WCAG 2.1 Level AA** : 100% compliance
- **Keyboard navigation** : Tous les éléments accessibles
- **Screen reader** : Navigation fluide

---

## 🔄 Process de Validation

### Avant Chaque Modification

1. **Lire cette charte** et vérifier conformité
2. **Tester en local** sur les 3 langues (AR, FR, EN)
3. **Vérifier responsive** (mobile, tablet, desktop)
4. **Tester dark mode** et light mode
5. **Valider accessibilité** (keyboard, screen reader)
6. **Mesurer performance** (Lighthouse)
7. **Code review** avant merge

### Checklist de Commit

```bash
# Avant de commit
- [ ] Code formaté (Prettier)
- [ ] Pas d'erreurs ESLint
- [ ] Types TypeScript corrects
- [ ] Tests passent (si applicable)
- [ ] Pas de console.log oubliés
- [ ] Traductions ajoutées dans les 3 langues
- [ ] Documentation mise à jour (si nécessaire)
```

### Template de PR

```markdown
## 🎨 UX Improvement: [Titre]

### 📋 Description
[Décrivez la modification en référençant cette charte]

### ✅ Checklist
- [ ] Conforme à la charte UX-HOME-SCREEN-CHARTER
- [ ] Testé sur AR, FR, EN
- [ ] Responsive (mobile, tablet, desktop)
- [ ] Dark mode validé
- [ ] Accessibilité vérifiée (keyboard, ARIA)
- [ ] Performance maintenue (Lighthouse > 90)
- [ ] Traductions complètes

### 📸 Screenshots
[Before/After screenshots]

### 🔗 Références
- Charte: docs/UX-HOME-SCREEN-CHARTER.md
- Section: [Phase X.Y]
```

---

## 📚 Ressources

### Documentation Interne
- [UX-ADIA-CHARTE.md](./UX-ADIA-CHARTE.md) - Charte invocations
- [CONTRIBUTING.md](./CONTRIBUTING.md) - Guide de contribution
- [MARKETING-KIT.md](./MARKETING-KIT.md) - Assets marketing

### Outils Recommandés
- **Design** : Figma, Adobe XD
- **Illustrations** : unDraw, Storyset, DrawKit
- **Icônes** : Lucide Icons (déjà utilisé), Heroicons
- **Animations** : Framer Motion, GSAP
- **Testing** : React Testing Library, Playwright
- **Analytics** : Vercel Analytics, Google Analytics 4

### Références UX
- [Material Design](https://material.io/design)
- [Apple HIG](https://developer.apple.com/design/human-interface-guidelines/)
- [Tailwind UI](https://tailwindui.com)
- [shadcn/ui](https://ui.shadcn.com)

---

## 🤝 Contributeurs

Cette charte est un document vivant. Toute amélioration doit être proposée via PR avec justification UX.

**Dernière mise à jour :** 25 janvier 2026  
**Version :** 1.0.0  
**Statut :** 🟢 Active

---

## 📝 Notes Importantes

### ⚠️ Ne Jamais Faire

- ❌ Modifier les couleurs primary sans validation
- ❌ Ignorer le support RTL
- ❌ Ajouter du texte sans traductions
- ❌ Utiliser des images non optimisées
- ❌ Créer des composants clients inutilement
- ❌ Dupliquer du code au lieu de factoriser
- ❌ Oublier l'accessibilité
- ❌ Négliger les performances

### ✅ Toujours Faire

- ✅ Référencer cette charte dans les PRs
- ✅ Tester les 3 langues
- ✅ Valider responsive
- ✅ Vérifier dark mode
- ✅ Penser mobile-first
- ✅ Optimiser les performances
- ✅ Documenter les nouveaux patterns
- ✅ Demander feedback UX

---

**🎯 Objectif Final :** Créer la meilleure expérience d'apprentissage islamique en ligne, accessible, performante et esthétique.
