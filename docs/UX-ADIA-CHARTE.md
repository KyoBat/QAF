# 🎨 Charte UX - Amélioration des Invocations Adia

## 📋 Objectif
Standardiser la présentation visuelle des invocations authentiques dans les 5 leçons Adia (001-005) pour les 3 langues (AR, FR, EN).

---

## 🎯 Règles de Transformation

### 1️⃣ Titres des Invocations

**AVANT :**
```markdown
### 🔷 الدعاء الأول: ...
### 🔷 Invocation 1 : ...
### 🔷 Invocation 1: ...
```

**APRÈS :**
```markdown
## 🤲 ① الدعاء الأول: ...
## 🤲 ① Invocation 1 : ...
## 🤲 ① Invocation 1: ...
```

**Règles :**
- `###` → `##` (niveau plus grand)
- `🔷` → `🤲` (mains en prière)
- Ajouter cercle numéroté : ①②③④⑤⑥⑦⑧⑨⑩

---

### 2️⃣ Blocs d'Invocations avec Couleurs

**Code couleur selon répétitions :**
- 🟢 **Vert** → 1 fois (unique/importante)
- 🔵 **Bleu** → 3 fois
- 🟡 **Jaune** → 7 fois
- 🟠 **Orange** → Invocation majeure (ex: Sayyid al-Istighfār)
- 🟣 **Violet** → Contexte temporel (matin/soir)
- 🔴 **Rouge** → 100 fois

**Structure AVANT (arabe) :**
```markdown
#### النص العربي بالتشكيل الكامل

**« حَسْبِيَ اللَّهُ ... »**

**(سبع مرات)**
```

**Structure APRÈS (arabe) :**
```markdown
> **🟡 « حَسْبِيَ اللَّهُ ... » 🟡**
>
> **🔢 عدد المرات:** 🟡 **سبع مرات (×7)**
```

**Structure AVANT (français) :**
```markdown
#### Texte Arabe avec Tashkīl Complet

**« حَسْبِيَ اللَّهُ ... »**

**(sept fois)**
```

**Structure APRÈS (français) :**
```markdown
> **🟡 « حَسْبِيَ اللَّهُ ... » 🟡**
>
> **🔢 Répétitions:** 🟡 **Sept fois (×7)**
```

**Structure AVANT (anglais) :**
```markdown
#### Arabic Text with Complete Tashkīl

**« حَسْبِيَ اللَّهُ ... »**

**(seven times)**
```

**Structure APRÈS (anglais) :**
```markdown
> **🟡 « حَسْبِيَ اللَّهُ ... » 🟡**
>
> **🔢 Repetitions:** 🟡 **Seven times (×7)**
```

---

### 3️⃣ Suppression des Sous-titres

**À SUPPRIMER :**
- ❌ `#### النص العربي بالتشكيل الكامل`
- ❌ `#### Texte Arabe avec Tashkīl Complet`
- ❌ `#### Arabic Text with Complete Tashkīl`
- ❌ `#### الترجمة الفرنسية` (garder mais pas en titre)
- ❌ `#### Traduction Française` (garder mais pas en titre)
- ❌ `#### English Translation` (garder mais pas en titre)

---

## 📊 Mapping des Couleurs par Invocation

### Leçon 001 - Sabah (Matin)
| # | Invocation | AR | FR | EN | Couleur | Rép. |
|---|------------|----|----|----|---------| -----|
| ① | Āyat al-Kursī | آية الكرسي | Āyat al-Kursī | Āyat al-Kursī | 🟢 | ×1 |
| ② | Al-Muʿawwidhāt | المعوذتان | Les Trois Sourates | Al-Mu'awwidhāt | 🔵 | ×3 |
| ③ | Duʿāʾ Ṣabāḥ | دعاء الصباح | Invocation du Matin | Morning Supplication | 🟣 | ×1 |
| ④ | Ḥasbiya Allāh | حسبي الله | Hasbiya Allāh | Ḥasbiya Allāh | 🟡 | ×7 |
| ⑤ | Bismillāh lā yaḍurr | بسم الله الذي لا يضر | Bismillāhi alladhī | Bismillāhi alladhī | 🔵 | ×3 |
| ⑥ | Sayyid al-Istighfār | سيد الاستغفار | Sayyid al-Istighfār | Sayyid al-Istighfār | 🟠 | ×1 |
| ⑦ | Raḍītu billāh | رضيت بالله | Raḍītu billāhi | Raḍītu billāhi | 🔵 | ×3 |
| ⑧ | Subḥān Allāh | سبحان الله | Subḥān Allāh | Subḥān Allāh | 🔴 | ×100 |

### Leçon 002 - Masāʾ (Soir)
| # | Invocation | Couleur | Rép. |
|---|------------|---------|------|
| ① | Āyat al-Kursī | 🟢 | ×1 |
| ② | Al-Muʿawwidhāt | 🔵 | ×3 |
| ③ | Duʿāʾ Masāʾ | 🟣 | ×1 |
| ④ | Ḥasbiya Allāh | 🟡 | ×7 |
| ⑤ | Bismillāh lā yaḍurr | 🔵 | ×3 |
| ⑥ | Sayyid al-Istighfār | 🟠 | ×1 |
| ⑦ | Raḍītu billāh | 🔵 | ×3 |
| ⑧ | Subḥān Allāh | 🔴 | ×100 |

### Leçon 003 - Nawm (Sommeil)
| # | Invocation | Couleur | Rép. |
|---|------------|---------|------|
| ① | Bismika Allāhumma | 🟢 | ×1 |
| ② | Āyat al-Kursī | 🟢 | ×1 |
| ③ | Al-Muʿawwidhāt | 🔵 | ×3 |
| ④ | Allāhumma qinī | 🔵 | ×3 |
| ⑤ | Tasbīḥ (33-33-34) | 🔵 | Variable |
| ⑥ | Allāhumma aslamtu | 🟢 | ×1 |

### Leçon 004 - Istīqāẓ (Réveil)
| # | Invocation | Couleur | Rép. |
|---|------------|---------|------|
| ① | Al-ḥamdu lillāh | 🟢 | ×1 |
| ② | Masḥ | 🟢 | Action |
| ③ | Āl ʿImrān (fin) | 🟢 | ×1 |
| ④ | Lā ilāha illā Allāh | 🟢 | ×1 |
| ⑤ | Rêve positif | 🟢 | Variable |
| ⑥ | Cauchemar | 🟢 | Actions |

### Leçon 005 - Ṭaʿām (Repas)
| # | Invocation | Couleur | Rép. |
|---|------------|---------|------|
| ① | Bismillāh | 🟢 | ×1 |
| ② | Si oubli | 🟢 | ×1 |
| ③ | Al-ḥamdu lillāh | 🟢 | ×1 |
| ④ | Ḥamdan kathīran | 🟢 | ×1 |
| ⑤ | Pour l'hôte | 🟢 | ×1 |

---

## 🔧 Instructions pour les Agents

### Agent 1: Leçons 001-002 FR
- Fichiers: `001-sabah/fr.ts`, `002-masaa/fr.ts`
- Appliquer transformations titres + blocs colorés
- Vérifier build après chaque fichier

### Agent 2: Leçons 003-005 FR
- Fichiers: `003-nawm/fr.ts`, `004-istiyqadh/fr.ts`, `005-taam/fr.ts`
- Appliquer transformations titres + blocs colorés
- Vérifier build après chaque fichier

### Agent 3: Leçons 001-003 EN
- Fichiers: `001-sabah/en.ts`, `002-masaa/en.ts`, `003-nawm/en.ts`
- Appliquer transformations titres + blocs colorés
- Vérifier build après chaque fichier

### Agent 4: Leçons 004-005 EN
- Fichiers: `004-istiyqadh/en.ts`, `005-taam/en.ts`
- Appliquer transformations titres + blocs colorés
- Vérifier build après chaque fichier

---

## ✅ Checklist Validation

Pour chaque fichier traité :
- [ ] Titres transformés (##, 🤲, ①②③)
- [ ] Blocs colorés ajoutés
- [ ] Badges répétitions (🔢)
- [ ] Sous-titres supprimés
- [ ] Build réussi
- [ ] Commit individuel

---

## 📝 Format de Commit

```
🎨 UX [LANG]: Amélioration leçon [NUM] ([NOM])

- Titres: ## + 🤲 + ①②③
- Blocs colorés selon répétitions
- Badges compteurs améliorés
```

Exemples :
- `🎨 UX FR: Amélioration leçon 002 (Masāʾ)`
- `🎨 UX EN: Amélioration leçon 003 (Nawm)`

---

**Date de création:** 7 janvier 2026  
**Version:** 1.0  
**Statut:** ✅ Arabe terminé | 🔄 FR/EN en cours
