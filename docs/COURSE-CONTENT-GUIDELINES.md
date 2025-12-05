# 📖 Guide de Rédaction des Contenus de Cours

> **« طَلَبُ الْعِلْمِ فَرِيضَةٌ عَلَى كُلِّ مُسْلِمٍ »** - "La recherche du savoir est une obligation pour tout musulman" (Ibn Majah)

Ce document définit les standards de rédaction pour les contenus pédagogiques de Qaf (Rabbi Zidni Ilma). L'objectif est de garantir une **qualité uniforme**, une **authenticité vérifiable** et une **expérience d'apprentissage optimale**.

---

## 📋 Table des Matières

1. [Principes Fondamentaux](#-principes-fondamentaux)
2. [Structure d'une Leçon](#-structure-dune-leçon)
3. [Authenticité des Sources](#-authenticité-des-sources)
4. [Approche Multi-Madhhab](#-approche-multi-madhhab)
5. [Rédaction Markdown](#-rédaction-markdown)
6. [Mindmaps Pédagogiques](#-mindmaps-pédagogiques)
7. [Internationalisation](#-internationalisation-fraren)
8. [Exemples Pratiques](#-exemples-pratiques)
9. [Checklist de Validation](#-checklist-de-validation)

---

## 🕌 Principes Fondamentaux

### Les 5 Piliers du Contenu Qaf

| # | Pilier | Description |
|---|--------|-------------|
| 1 | **Authenticité (التوثيق)** | Chaque hadith et citation doit être sourcé avec son degré d'authenticité |
| 2 | **Clarté (الوضوح)** | Langage accessible, structure logique, progression pédagogique |
| 3 | **Complétude (الشمولية)** | Couvrir le sujet de manière exhaustive avec les divergences |
| 4 | **Praticité (التطبيق)** | Exemples concrets, cas modernes, applications quotidiennes |
| 5 | **Respect (الأدب)** | Mentionner les divergences sans dénigrer aucune école |

### Public Cible

| Niveau | Description | Vocabulaire |
|--------|-------------|-------------|
| **Débutant** | Nouveau musulman ou personne sans formation | Éviter le jargon, expliquer chaque terme |
| **Intermédiaire** | Pratiquant avec bases | Termes techniques avec rappels |
| **Avancé** | Étudiant en sciences islamiques | Terminologie spécialisée |

### Ton et Style

```markdown
✅ À FAIRE :
- Ton respectueux et humble
- "Selon les savants..." au lieu de "Il est vrai que..."
- "Allah sait mieux" (والله أعلم) en conclusion
- Formules de révérence (ﷺ, رضي الله عنه, رحمه الله)

❌ À ÉVITER :
- Ton catégorique sur les divergences
- Dénigrer une école juridique
- Moderniser le texte au détriment du sens
- Omettre les sources
```

---

## 📐 Structure d'une Leçon

### Template Standard

Chaque leçon DOIT suivre cette structure :

```markdown
# [Titre de la Leçon] ([Titre en Arabe])

[Introduction : 2-3 phrases de contexte + verset ou hadith introductif]

> [Verset coranique ou Hadith d'introduction avec source]

---

## 1. Définition et Importance

### 📌 Définition linguistique et terminologique
[Racine arabe + sens littéral + sens technique]

### 📌 Importance / Sagesse
[Pourquoi ce sujet est important + bienfaits]

---

## 2. Les Fondements (Preuves)

### 📖 Preuves du Coran
> [Verset avec référence]

### 📚 Preuves de la Sunna
> [Hadith avec source complète et degré]

### 📜 Consensus (si applicable)
[Ijma' des savants si existant]

---

## 3. Les Règles Détaillées

### 📋 [Sous-section 1]

| Élément | Règle |
|---------|-------|
| Point 1 | Description |
| Point 2 | Description |

### ⚠️ Divergences entre les Écoles

| École | Avis | Preuve |
|-------|------|--------|
| 🟡 **Maliki** | [Avis] | [Preuve] |
| 🟢 Hanafi | [Avis] | [Preuve] |
| 🔵 Shafi'i | [Avis] | [Preuve] |
| 🟣 Hanbali | [Avis] | [Preuve] |

> 💡 **Position Malikite :** [Explication détaillée de l'avis prioritaire]

---

## 4. Applications Pratiques

### 📌 Cas concrets
[Situations de la vie quotidienne]

### 📌 Cas modernes
[Situations contemporaines : avion, hôpital, etc.]

---

## 5. Erreurs Courantes à Éviter

### ❌ Ce qu'il ne faut pas faire

| Erreur | Correction |
|--------|------------|
| Erreur 1 | Comment corriger |
| Erreur 2 | Comment corriger |

---

## 🎯 Résumé

| Point | Règle |
|-------|-------|
| Point 1 | Résumé |
| Point 2 | Résumé |

---

## 📚 Sources

1. [Source 1 avec numéro de hadith]
2. [Source 2]
3. [Ouvrages de référence]
```

### Sections Obligatoires vs Optionnelles

| Section | Statut | Quand l'inclure |
|---------|--------|-----------------|
| Introduction avec verset/hadith | ✅ **Obligatoire** | Toujours |
| Définition | ✅ **Obligatoire** | Toujours |
| Preuves (Coran/Sunna) | ✅ **Obligatoire** | Toujours |
| Divergences Madhhab | ✅ **Obligatoire** | Pour le Fiqh |
| Applications pratiques | ✅ **Obligatoire** | Toujours |
| Erreurs courantes | ⚡ **Recommandé** | Si pertinent |
| Mindmap | ⚡ **Recommandé** | Sujets complexes |
| Vidéo YouTube | ⭐ Optionnel | Si disponible |
| Ressources PDF | ⭐ Optionnel | Si disponible |

---

## 🔐 Authenticité des Sources

### Classification des Hadiths

| Degré | Arabe | Utilisation |
|-------|-------|-------------|
| **Sahih** | صحيح | ✅ Base pour les règles |
| **Hasan** | حسن | ✅ Acceptable pour les règles |
| **Da'if** | ضعيف | ⚠️ Seulement pour les vertus (avec mention) |
| **Mawdu'** | موضوع | ❌ INTERDIT - Ne jamais citer |

### Format de Citation des Hadiths

```markdown
✅ FORMAT CORRECT :
> Le Prophète ﷺ a dit : **« [Texte du hadith] »** — Al-Bukhari (1234), Muslim (567)

> [Compagnon] رضي الله عنه a rapporté : **« [Texte] »** — Abu Dawud (890), authentifié par Al-Albani

✅ AVEC CONTEXTE :
> Dans le hadith de [Compagnon] رضي الله عنه, le Prophète ﷺ a dit à propos de [sujet] : 
> **« [Texte du hadith] »** — [Source] ([Numéro])

❌ FORMAT INCORRECT :
> Le Prophète a dit : "texte du hadith"  ← Manque ﷺ, source, numéro
> D'après un hadith...  ← Trop vague
```

### Ouvrages de Référence Approuvés

#### Sources Primaires (Hadiths)
| Ouvrage | Abréviation | Fiabilité |
|---------|-------------|-----------|
| Sahih Al-Bukhari | Al-Bukhari | ⭐⭐⭐ |
| Sahih Muslim | Muslim | ⭐⭐⭐ |
| Sunan Abu Dawud | Abu Dawud | ⭐⭐ |
| Sunan At-Tirmidhi | At-Tirmidhi | ⭐⭐ |
| Sunan An-Nasa'i | An-Nasa'i | ⭐⭐ |
| Sunan Ibn Majah | Ibn Majah | ⭐⭐ |
| Muwatta Malik | Malik | ⭐⭐⭐ |
| Musnad Ahmad | Ahmad | ⭐⭐ |

#### Sources Secondaires (Fiqh)
| École | Ouvrages de Référence |
|-------|----------------------|
| 🟡 Maliki | Al-Mudawwana, Mukhtasar Khalil, Al-Risala, Al-Kafi |
| 🟢 Hanafi | Al-Hidaya, Radd Al-Muhtar, Badai' As-Sanai' |
| 🔵 Shafi'i | Al-Umm, Al-Majmu', Minhaj At-Talibin |
| 🟣 Hanbali | Al-Mughni, Zad Al-Mustaqni', Al-Insaf |
| ⚪ Comparatif | Bidayat Al-Mujtahid (Ibn Rushd), Al-Fiqh Al-Islami (Zuhayli) |

### Vérification des Hadiths

Avant d'inclure un hadith, vérifier :

1. **Existence** : Le hadith existe-t-il dans les recueils ?
2. **Texte** : Le texte est-il exact (pas de paraphrase) ?
3. **Source** : La référence est-elle correcte ?
4. **Authenticité** : Quel est le degré selon les muhaddithun ?

**Outils de vérification :**
- Dorar.net (الدرر السنية)
- Islamweb.net
- Sunnah.com
- Al-Maktaba Al-Shamila

---

## ⚖️ Approche Multi-Madhhab

### Priorité : École Malikite

Le projet cible principalement les francophones d'Afrique du Nord et de l'Ouest, où le Madhhab Malikite prédomine. La priorité est donc :

1. **🟡 Malikite** : Avis principal, développé en détail
2. **🟢🔵🟣 Autres** : Mentionnés pour comparaison

### Codes Couleur des Écoles

| École | Emoji | Couleur | Usage |
|-------|-------|---------|-------|
| Malikite | 🟡 | Jaune/Or | **Prioritaire** |
| Hanafite | 🟢 | Vert | Comparaison |
| Shafiite | 🔵 | Bleu | Comparaison |
| Hanbalite | 🟣 | Violet | Comparaison |

### Template de Divergence

```markdown
### ⚠️ Divergence sur [Sujet]

| École | Avis | Argument |
|-------|------|----------|
| 🟡 **Maliki** | **[Avis prioritaire]** | [Preuve] |
| 🟢 Hanafi | [Avis] | [Preuve] |
| 🔵 Shafi'i | [Avis] | [Preuve] |
| 🟣 Hanbali | [Avis] | [Preuve] |

> 💡 **Position Malikite :** [Explication détaillée avec nuances]
```

### Ton pour les Divergences

```markdown
✅ À FAIRE :
- "Les Malikites considèrent que... tandis que les Hanafites optent pour..."
- "Selon l'école Malikite, majoritaire dans notre région..."
- "Cette divergence est légitime, chaque école ayant ses preuves"

❌ À ÉVITER :
- "L'avis correct est..."
- "Les autres écoles se trompent..."
- "Il est évident que..."
```

---

## ✍️ Rédaction Markdown

### Éléments de Mise en Forme

| Élément | Syntaxe | Usage |
|---------|---------|-------|
| **Gras** | `**texte**` | Termes clés, mots arabes |
| *Italique* | `*texte*` | Translittération, nuances |
| Citation | `> texte` | Versets, hadiths |
| Tableau | `\| col1 \| col2 \|` | Comparaisons, listes |
| Liste | `- item` ou `1. item` | Énumérations |
| Titre | `## Titre` | Sections |
| Ligne | `---` | Séparation de sections |

### Formules de Révérence

| Personnage | Formule | Arabe |
|------------|---------|-------|
| Prophète Muhammad | ﷺ | صلى الله عليه وسلم |
| Compagnon (homme) | رضي الله عنه | (qu'Allah l'agrée) |
| Compagnonne (femme) | رضي الله عنها | (qu'Allah l'agrée) |
| Compagnons (pluriel) | رضي الله عنهم | (qu'Allah les agrée) |
| Savant décédé | رحمه الله | (qu'Allah lui fasse miséricorde) |
| Allah | تعالى | (exalté soit-Il) |

### Emojis Pédagogiques

| Emoji | Usage |
|-------|-------|
| 📌 | Point clé, définition |
| 📋 | Liste, tableau récapitulatif |
| 📖 | Verset coranique |
| 📚 | Hadith, source |
| ⚠️ | Attention, divergence |
| 💡 | Astuce, conseil, position recommandée |
| ✅ | Correct, permis |
| ❌ | Incorrect, interdit |
| 🎯 | Résumé |

### Termes Arabes dans le Texte

```markdown
✅ CORRECT :
Le **Wudu** (الوضوء) est l'ablution mineure...

La **Tahara** (الطهارة - la purification) comprend...

✅ AVEC TRANSLITTÉRATION :
Le **Ghusl** (*ghousl* - الغسل) désigne le bain rituel...

❌ INCORRECT :
Le wudu est...  ← Pas de mise en évidence
```

---

## 🗺️ Mindmaps Pédagogiques

### Quand Créer une Mindmap ?

| Situation | Mindmap ? | Raison |
|-----------|-----------|--------|
| Sujet avec hiérarchie (piliers, conditions...) | ✅ Oui | Visualisation de la structure |
| Sujet avec nombreuses branches | ✅ Oui | Aide à la mémorisation |
| Sujet linéaire simple | ❌ Non | Pas de valeur ajoutée |
| Comparaison multi-madhhab | ⚠️ Optionnel | Peut complexifier |

### Structure Recommandée

```typescript
mindmap: {
  central: 'Concept Principal',  // 1 seul nœud central
  branches: [
    {
      id: 'branch-1',
      label: 'Catégorie 1',      // 3-5 branches principales max
      children: [
        { id: 'child-1', label: 'Élément 1.1' },  // 2-5 enfants max
        { id: 'child-2', label: 'Élément 1.2' },
      ],
    },
    // ...
  ],
}
```

### Exemple : Mindmap des Annulants du Wudu

```typescript
mindmap: {
  central: 'نواقض الوضوء',
  branches: [
    {
      id: 'sortie',
      label: 'Sorties naturelles',
      children: [
        { id: 'urine', label: 'Urine' },
        { id: 'selles', label: 'Selles' },
        { id: 'gaz', label: 'Gaz' },
      ],
    },
    {
      id: 'sommeil',
      label: 'Perte de conscience',
      children: [
        { id: 'sommeil-profond', label: 'Sommeil profond' },
        { id: 'evanouissement', label: 'Évanouissement' },
      ],
    },
    {
      id: 'toucher',
      label: 'Toucher',
      children: [
        { id: 'parties', label: 'Parties intimes (divergence)' },
        { id: 'femme', label: 'Femme avec désir (Maliki)' },
      ],
    },
  ],
}
```

### Bonnes Pratiques

| ✅ À faire | ❌ À éviter |
|-----------|------------|
| Termes courts (2-4 mots) | Phrases longues |
| 3-5 branches principales | Plus de 7 branches |
| 2-5 enfants par branche | Arbre trop profond |
| Texte bilingue (FR/AR) | Seulement une langue |

---

## 🌍 Internationalisation (FR/AR/EN)

### Fichiers par Langue

Chaque leçon a 4 fichiers :

```
lessons/
├── 001-titre-lecon/
│   ├── index.ts      # Agrégateur + métadonnées
│   ├── fr.ts         # Contenu français
│   ├── ar.ts         # Contenu arabe
│   └── en.ts         # Contenu anglais
```

### Template `index.ts`

> ⚠️ **IMPORTANT** : Respecter strictement le format des types pour éviter les erreurs de build.

```typescript
/**
 * Fiqh - Lesson XXX: [Titre arabe]
 * [Description courte]
 */

import type { Lesson } from '@/lib/schemas/course';
import { content as contentFr } from './fr';
import { content as contentAr } from './ar';
import { content as contentEn } from './en';

export const lessonXXX: Lesson = {
  id: 'lesson-XXX',           // Format: 'lesson-XXX' (ex: 'lesson-028')
  title: {
    fr: 'Titre en français',
    ar: 'العنوان بالعربية',
    en: 'Title in English',
  },
  duration: '30 min',         // ⚠️ STRING obligatoire (ex: '25 min', '1h 30min')
  content: {
    fr: contentFr,
    ar: contentAr,
    en: contentEn,
  },
  order: 1,                   // ⚠️ NUMBER obligatoire (position dans le cours)
};

export default lessonXXX;
```

### ⚠️ Erreurs Courantes à Éviter dans `index.ts`

| ❌ Erreur | ✅ Correct | Explication |
|-----------|-----------|-------------|
| `duration: 30` | `duration: '30 min'` | Duration doit être une **string** |
| `order: '1'` | `order: 1` | Order doit être un **number** |
| `id: 'fiqh-028-zakat'` | `id: 'lesson-028'` | Format standard : `lesson-XXX` |
| `import { Lesson } from '@/types'` | `import type { Lesson } from '@/lib/schemas/course'` | Import correct du type |
| Pas de `order` | `order: 5` | Propriété obligatoire |
| `export const lesson028ZakatIntro` | `export const lesson028` | Nom court : `lessonXXX` |

### Correspondance `lessonIds` dans les Sections

Les `lessonIds` dans la définition du cours doivent correspondre aux `id` des leçons :

```typescript
// Dans fiqh/index.ts - Définition du cours
export const fiqhZakatCourse: Course = {
  ...fiqhZakatMeta,
  lessons: [lesson028, lesson029, ...],
  sections: [
    {
      id: 'bab-zakat',
      title: { fr: 'Chapitre : Zakat', ... },
      lessonIds: [
        'lesson-028',    // ✅ Doit correspondre à lesson028.id
        'lesson-029',    // ✅ Doit correspondre à lesson029.id
        // ...
      ],
    },
  ],
}
```

### Priorité des Langues

| Langue | Priorité | Remarques |
|--------|----------|-----------|
| 🇫🇷 Français | 1️⃣ Principale | Contenu le plus détaillé |
| 🇸🇦 Arabe | 2️⃣ Référence | Textes originaux préservés |
| 🇬🇧 Anglais | 3️⃣ Accessibilité | Traduction du français |

### Spécificités par Langue

#### Français (`fr.ts`)
- Style académique accessible
- Termes arabes en gras avec traduction
- Translittération entre parenthèses

#### Arabe (`ar.ts`)
- Style classique respectueux
- Diacritiques (tashkil) sur les termes importants
- Formules de révérence complètes

#### Anglais (`en.ts`)
- Style clair et concis
- Translittération simplifiée
- Notes explicatives si nécessaire

---

## 📝 Exemples Pratiques

### Exemple 1 : Leçon Fiqh Complète

```typescript
// lessons/004-wudu/fr.ts

export const content = `# Les Ablutions (الوضوء)

Le **Wudu** (الوضوء) est la purification rituelle mineure obligatoire avant la prière. C'est un acte d'adoration qui purifie le corps et l'âme.

> Allah تعالى dit : **« Ô vous qui avez cru ! Quand vous vous levez pour la prière, lavez vos visages et vos mains jusqu'aux coudes, passez les mains sur vos têtes et lavez vos pieds jusqu'aux chevilles »** — Al-Ma'idah : 6

---

## 1. Statut Juridique

Le Wudu est **obligatoire** (فرض) pour :
- La prière (صلاة)
- Le Tawaf (طواف)
- Toucher le Mushaf (مصحف)

---

## 2. Les Piliers du Wudu (أركان الوضوء)

### ⚠️ Divergence sur le nombre de piliers

| École | Nombre | Détail |
|-------|--------|--------|
| 🟡 **Maliki** | **7 piliers** | Incluent la Niyya et le Tartib |
| 🟢 Hanafi | 4 piliers | Lavages + essuyage seulement |
| 🔵 Shafi'i | 6 piliers | Incluent la Niyya |
| 🟣 Hanbali | 6 piliers | Similaire à Shafi'i |

> 💡 **Position Malikite :** L'intention (النية) et l'ordre (الترتيب) sont des piliers, pas seulement des conditions.

### 📋 Les 7 Piliers Malikites

| # | Pilier | Description |
|---|--------|-------------|
| 1 | **L'intention** (النية) | Dans le cœur au début |
| 2 | **Laver le visage** | De l'implantation des cheveux au menton |
| 3 | **Laver les mains** | Jusqu'aux coudes inclus |
| 4 | **Essuyer la tête** | Toute la tête (pas une partie) |
| 5 | **Laver les pieds** | Jusqu'aux chevilles incluses |
| 6 | **Le frottement** (الدَّلْك) | Frotter les membres lavés |
| 7 | **L'enchaînement** (الموالاة) | Sans pause excessive |

---

## 3. Erreurs Courantes

### ❌ Ce qu'il ne faut pas faire

| Erreur | Correction |
|--------|------------|
| Oublier l'intention | La formuler au début |
| Laver partiellement les coudes | Laver jusqu'aux coudes **inclus** |
| Essuyer une partie de la tête | Essuyer **toute** la tête (Maliki) |

---

## 🎯 Résumé

| Point | Règle Malikite |
|-------|----------------|
| **Piliers** | 7 (avec intention et frottement) |
| **Essuyage tête** | Toute la tête obligatoire |
| **Ordre** | Obligatoire |

---

## 📚 Sources

1. Sahih Al-Bukhari, Livre du Wudu
2. Sahih Muslim, Livre de la Purification
3. Mukhtasar Khalil (Fiqh Maliki)
4. Al-Mudawwana de l'Imam Malik
`
```

### Exemple 2 : Hadith Bien Sourcé

```markdown
✅ EXCELLENT :
> Abu Hurayrah رضي الله عنه rapporte que le Prophète ﷺ a dit : 
> **« La prière de l'un d'entre vous n'est pas acceptée s'il a un hadath jusqu'à ce qu'il fasse ses ablutions »** 
> — Al-Bukhari (135), Muslim (225)

✅ BON :
> Le Prophète ﷺ a dit : **« Les clés de la prière, c'est la purification »** 
> — At-Tirmidhi (3), authentifié par Al-Albani dans Sahih At-Tirmidhi

⚠️ ACCEPTABLE (pour les fadhail) :
> Il est rapporté : **« Celui qui fait le wudu comme il faut, ses péchés sortent de son corps »** 
> — Hadith faible, cité pour les vertus

❌ INTERDIT :
> Le Prophète a dit : "il faut faire le wudu"  ← Pas de source
> D'après un hadith...  ← Vague
```

---

## ✅ Checklist de Validation

### Avant de Soumettre une Leçon

#### Contenu
- [ ] Introduction avec verset ou hadith
- [ ] Définition claire (linguistique + terminologique)
- [ ] Preuves du Coran et de la Sunna
- [ ] Divergences multi-madhhab (si Fiqh)
- [ ] Position Malikite développée
- [ ] Applications pratiques / cas modernes
- [ ] Résumé en tableau
- [ ] Sources listées

#### Authenticité
- [ ] Tous les hadiths ont une source (Bukhari, Muslim, etc.)
- [ ] Numéro de hadith mentionné
- [ ] Degré d'authenticité vérifié (Sahih/Hasan)
- [ ] Aucun hadith fabriqué (Mawdu')
- [ ] Versets avec référence (Sourate : Verset)

#### Format
- [ ] Formules de révérence (ﷺ, رضي الله عنه)
- [ ] Termes arabes en gras avec traduction
- [ ] Emojis pédagogiques cohérents
- [ ] Tableaux pour les comparaisons
- [ ] Structure hiérarchique claire

#### Multilingue
- [ ] Fichier `fr.ts` complet
- [ ] Fichier `ar.ts` avec tashkil sur les termes clés
- [ ] Fichier `en.ts` traduit
- [ ] `index.ts` avec métadonnées

#### Technique
- [ ] TypeScript sans erreurs
- [ ] Build réussi (`npm run build`)
- [ ] Rendu Markdown correct

---

## 📎 Ressources Utiles

### Sites de Vérification des Hadiths
- [Dorar.net](https://dorar.net/hadith) - الدرر السنية
- [Sunnah.com](https://sunnah.com) - Recherche multi-recueils
- [Islamweb.net](https://islamweb.net) - Fatawa et hadiths

### Références Fiqh
- [Al-Maktaba Al-Shamila](https://shamela.ws) - Bibliothèque numérique
- [Al-Islam.com](https://al-islam.com) - Fiqh comparé

### Outils
- [Tables Generator](https://www.tablesgenerator.com/markdown_tables) - Créer des tableaux Markdown
- [Quran.com](https://quran.com) - Versets avec traductions

---

*Qu'Allah nous guide vers le savoir bénéfique et l'action vertueuse. والله أعلم*

