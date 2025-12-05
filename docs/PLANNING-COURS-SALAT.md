# 📋 Planning de Création des Leçons Fiqh Salat (018-027)

> **Orchestration professionnelle** pour la création de 11 nouvelles leçons sur la prière
> **Date de création :** 5 décembre 2025
> **Statut :** En cours

---

## 🎯 Vue d'ensemble

| # | ID | Titre AR | Titre FR | Priorité | Statut |
|---|-----|----------|----------|----------|--------|
| 1 | 018 | صلاة الجماعة | La Prière en Groupe | 🔴 Haute | ⏳ À faire |
| 2 | 019 | صلاة المسافر | La Prière du Voyageur | 🔴 Haute | ⏳ À faire |
| 3 | 020 | صلاة المريض | La Prière du Malade | 🔴 Haute | ⏳ À faire |
| 4 | 021 | صلاة الجمعة | La Prière du Vendredi | 🔴 Haute | ⏳ À faire |
| 5 | 022 | صلاة العيدين | La Prière des Deux Fêtes | 🟡 Moyenne | ⏳ À faire |
| 6 | 023 | صلاة الجنازة | La Prière Funéraire | 🟡 Moyenne | ⏳ À faire |
| 7 | 024 | صلاة الكسوف | La Prière de l'Éclipse | 🟢 Normale | ⏳ À faire |
| 8 | 025 | صلاة الاستسقاء | La Prière pour la Pluie | 🟢 Normale | ⏳ À faire |
| 9 | 026 | سجود التلاوة والشكر | Prosternations de Récitation et de Remerciement | 🟢 Normale | ⏳ À faire |
| 10 | 027 | قضاء الفوائت | Le Rattrapage des Prières Manquées | 🔴 Haute | ⏳ À faire |

---

## 📚 Sources Authentiques à Utiliser

### Sources Primaires
1. **Le Coran** - Versets relatifs à chaque sujet
2. **Sahih Al-Bukhari** - Numéros de hadith exacts
3. **Sahih Muslim** - Numéros de hadith exacts
4. **Sunan Abu Dawud** - Pour les détails supplémentaires
5. **Sunan At-Tirmidhi** - Pour les avis des savants
6. **Sunan An-Nasa'i** - Pour les variantes

### Sources Secondaires (Fiqh Hanbali - Programme Zad)
1. **Zad Al-Mustaqni'** - Texte de référence
2. **Ar-Rawd Al-Murbi'** - Explication détaillée
3. **Al-Mughni** d'Ibn Qudama - Pour les divergences
4. **Majmu' Al-Fatawa** d'Ibn Taymiyya

---

## 🔧 Structure de Fichiers à Créer

```
src/lib/data/courses/fiqh/lessons/
├── 018-salat-jamaa/
│   ├── index.ts
│   ├── fr.ts
│   ├── ar.ts
│   └── en.ts
├── 019-salat-musafir/
│   ├── index.ts
│   ├── fr.ts
│   ├── ar.ts
│   └── en.ts
├── 020-salat-marid/
│   ├── index.ts
│   ├── fr.ts
│   ├── ar.ts
│   └── en.ts
├── 021-salat-jumuah/
│   ├── index.ts
│   ├── fr.ts
│   ├── ar.ts
│   └── en.ts
├── 022-salat-eidayn/
│   ├── index.ts
│   ├── fr.ts
│   ├── ar.ts
│   └── en.ts
├── 023-salat-janaza/
│   ├── index.ts
│   ├── fr.ts
│   ├── ar.ts
│   └── en.ts
├── 024-salat-kusuf/
│   ├── index.ts
│   ├── fr.ts
│   ├── ar.ts
│   └── en.ts
├── 025-salat-istisqa/
│   ├── index.ts
│   ├── fr.ts
│   ├── ar.ts
│   └── en.ts
├── 026-sujud-tilawa-shukr/
│   ├── index.ts
│   ├── fr.ts
│   ├── ar.ts
│   └── en.ts
└── 027-qada-fawait/
    ├── index.ts
    ├── fr.ts
    ├── ar.ts
    └── en.ts
```

---

# 📝 PROMPTS POUR AGENTS DÉDIÉS

---

## 🤖 AGENT 1 : Leçon 018 - صلاة الجماعة (La Prière en Groupe)

### Contexte
Tu es un savant musulman spécialisé en Fiqh Hanbali, créant du contenu éducatif pour TahaLearn.

### Mission
Créer la leçon complète sur **La Prière en Groupe (صلاة الجماعة)** en 3 langues (FR, AR, EN).

### Contenu Requis

#### 1. Introduction
- Importance de la prière en groupe dans l'Islam
- Hadith : « La prière en groupe est supérieure de 27 degrés » (Bukhari 645, Muslim 650)

#### 2. Le Statut Juridique (الحكم)
- **Avis 1 :** Obligation individuelle (فرض عين) - Avis de l'école Hanbalite
  - Preuve : « وَأَقِيمُوا الصَّلَاةَ وَآتُوا الزَّكَاةَ وَارْكَعُوا مَعَ الرَّاكِعِينَ » (Al-Baqara 43)
  - Hadith de l'aveugle : « لَا أَجِدُ لَكَ رُخْصَةً » (Muslim 653)
  - Hadith de brûler les maisons (Bukhari 644, Muslim 651)
- **Avis 2 :** Obligation communautaire (فرض كفاية)
- **Avis 3 :** Sunna Mu'akkada

#### 3. Les Mérites (فضائل صلاة الجماعة)
- 27 degrés de supériorité
- Attente de la prière = prière
- Les anges demandent pardon pour lui
- Hadith : « صلاة الرجل في جماعة تضعف على صلاته في بيته » (Bukhari 647)

#### 4. Conditions de l'Imam (شروط الإمامة)
- Être musulman
- Être sain d'esprit
- Être pubère (pour les prières obligatoires)
- Être homme (pour mener les hommes)
- Savoir lire le Fatiha correctement
- Être capable de faire les piliers
- **Qui est le plus en droit ?**
  - Hadith : « يؤم القوم أقرؤهم لكتاب الله » (Muslim 673)

#### 5. Règles des Rangées (أحكام الصفوف)
- L'obligation de redresser les rangs
  - Hadith : « لتسوّن صفوفكم أو ليخالفن الله بين وجوهكم » (Bukhari 717, Muslim 436)
- Combler les vides
- Commencer par la droite de l'imam
- Le rang du seul priant : à droite de l'imam
- Interdiction de prier seul derrière le rang
  - Hadith : « لا صلاة لمنفرد خلف الصف » (Ibn Maja 1003)

#### 6. Suivre l'Imam (متابعة الإمام)
- Obligation de suivre l'imam
- Interdiction de le devancer
  - Hadith : « أما يخشى أحدكم إذا رفع رأسه قبل الإمام أن يحول الله رأسه رأس حمار » (Bukhari 691)
- Les cas où on peut quitter la prière

#### 7. Cas Pratiques
- Retard à la mosquée
- L'imam fait une erreur
- Excuse valide pour manquer la jama'a

### Format de Sortie
Créer 4 fichiers :
1. `fr.ts` - Contenu Markdown en français
2. `ar.ts` - Contenu Markdown en arabe
3. `en.ts` - Contenu Markdown en anglais
4. `index.ts` - Export de la leçon

### Vérifications
- [ ] Tous les versets avec référence (Sourate:Verset)
- [ ] Tous les hadiths avec source (Livre + Numéro)
- [ ] Tableaux récapitulatifs
- [ ] Emojis pour la lisibilité
- [ ] Durée estimée : 25-30 min

---

## 🤖 AGENT 2 : Leçon 019 - صلاة المسافر (La Prière du Voyageur)

### Contexte
Tu es un savant musulman spécialisé en Fiqh Hanbali, créant du contenu éducatif pour TahaLearn.

### Mission
Créer la leçon complète sur **La Prière du Voyageur (صلاة المسافر)** en 3 langues.

### Contenu Requis

#### 1. Introduction
- Facilité accordée par Allah au voyageur
- Verset : « وَإِذَا ضَرَبْتُمْ فِي الْأَرْضِ فَلَيْسَ عَلَيْكُمْ جُنَاحٌ أَن تَقْصُرُوا مِنَ الصَّلَاةِ » (An-Nisa 101)

#### 2. Le Raccourcissement (القصر)
- **Définition :** Réduire les prières de 4 rak'at à 2
- **Prières concernées :** Dhuhr, Asr, Isha uniquement
- **Statut juridique :**
  - Sunna Mu'akkada (avis Hanbalite)
  - Hadith Aisha : « فُرِضَتِ الصَّلَاةُ رَكْعَتَيْنِ رَكْعَتَيْنِ » (Bukhari 350, Muslim 685)
  - Hadith Ibn Umar : Le Prophète ﷺ priait toujours 2 rak'at en voyage

#### 3. Le Regroupement (الجمع)
- **Définition :** Regrouper deux prières à l'heure de l'une d'elles
- **Types :**
  - Jam' Taqdim (جمع تقديم) : Avancer la 2ème
  - Jam' Ta'khir (جمع تأخير) : Retarder la 1ère
- **Prières regroupables :**
  - Dhuhr + Asr
  - Maghrib + Isha
- **Preuve :** Hadith de Mu'adh à Tabuk (Muslim 706)

#### 4. Distance du Voyage (مسافة القصر)
- **Distance minimale :** ~80 km (4 burud = 16 farsakh)
- **Preuve :** Pratique d'Ibn Abbas et Ibn Umar
- **Voyage par avion :** La distance compte, pas le moyen

#### 5. Durée de Séjour (مدة الإقامة)
- **Règle :** Si intention de rester + de 4 jours → prier en complet
- **Preuves :**
  - Le Prophète ﷺ à La Mecque lors de la conquête (19 jours mais sans intention de résidence)
  - Ibn Abbas : « Si tu résides 15 jours, accomplis la prière »
- **Cas particuliers :**
  - Attente sans durée déterminée
  - Études ou travail temporaire

#### 6. Règles Pratiques
- Quand commence le voyage ?
- Prière derrière un résident
- Voyageur menant des résidents

### Format de Sortie
4 fichiers avec le même format que Agent 1.

### Vérifications Spécifiques
- [ ] Clarifier la différence Qasr/Jam'
- [ ] Tableaux des prières concernées
- [ ] Schémas temporels si possible
- [ ] Cas pratiques modernes (avion, train)

---

## 🤖 AGENT 3 : Leçon 020 - صلاة المريض (La Prière du Malade)

### Mission
Créer la leçon sur **La Prière du Malade** en 3 langues.

### Contenu Requis

#### 1. Principe Fondamental
- La prière ne tombe jamais tant que la raison est présente
- Verset : « فَاتَّقُوا اللَّهَ مَا اسْتَطَعْتُمْ » (At-Taghabun 16)
- Hadith Imran ibn Husayn : « صَلِّ قَائِمًا، فَإِنْ لَمْ تَسْتَطِعْ فَقَاعِدًا، فَإِنْ لَمْ تَسْتَطِعْ فَعَلَى جَنْب » (Bukhari 1117)

#### 2. Positions de Prière par Ordre
| Priorité | Position | Condition |
|----------|----------|-----------|
| 1 | Debout (قائم) | Obligatoire si capable |
| 2 | Assis (قاعد) | Si incapable de se lever |
| 3 | Sur le côté (على جنب) | Si incapable de s'asseoir |
| 4 | Sur le dos (على ظهره) | Si incapable du côté |
| 5 | Par signes (بالإيماء) | Si incapable de bouger |

#### 3. La Prière Assis
- Comment s'asseoir (tailleur ou autre)
- L'inclinaison et la prosternation assises
- Récompense : moitié de celle du debout

#### 4. La Prière Allongé
- Sur le côté droit préféré
- Pieds vers la Qibla
- Faire les mouvements possibles

#### 5. La Prière par Signes (الإيماء)
- Avec la tête
- Avec les yeux si incapable
- Avec le cœur en dernier recours

#### 6. La Purification du Malade
- Le Tayammum si l'eau nuit
- Prier avec la najasa si impossible à nettoyer
- L'aide d'autrui pour le wudu

#### 7. Cas Particuliers
- Le malade sous anesthésie
- Le malade inconscient
- Rattrapage après guérison

---

## 🤖 AGENT 4 : Leçon 021 - صلاة الجمعة (La Prière du Vendredi)

### Contenu Requis

#### 1. Statut et Importance
- Obligation individuelle
- Verset : « يَا أَيُّهَا الَّذِينَ آمَنُوا إِذَا نُودِيَ لِلصَّلَاةِ مِن يَوْمِ الْجُمُعَةِ فَاسْعَوْا إِلَىٰ ذِكْرِ اللَّهِ » (Al-Jumu'ah 9)
- Hadith : « لينتهين أقوام عن ودعهم الجمعات أو ليختمن الله على قلوبهم » (Muslim 865)

#### 2. Conditions d'Obligation
- Être homme
- Être libre
- Être résident (non voyageur)
- Être sain (non malade)
- Hadith : « الجمعة حق واجب على كل مسلم في جماعة إلا أربعة: عبد مملوك، أو امرأة، أو صبي، أو مريض » (Abu Dawud 1067)

#### 3. Conditions de Validité
- Le temps (après le zénith)
- Le nombre minimum (3 ou 40 selon les avis)
- Le lieu de résidence
- Les deux khutbas

#### 4. Les Piliers de la Khutba
- Louange à Allah
- Prière sur le Prophète ﷺ
- Récitation du Coran
- Exhortation à la piété

#### 5. Sunnas de la Khutba
- Debout sur le minbar
- Saluer l'assemblée
- S'asseoir entre les deux khutbas
- Tenir un bâton

#### 6. Adab du Jour de Jumu'ah
- Le ghusl
- Se parfumer
- Porter ses meilleurs habits
- Arriver tôt
- Hadith des heures : « من اغتسل يوم الجمعة غسل الجنابة، ثم راح في الساعة الأولى فكأنما قرب بدنة » (Bukhari 881)

#### 7. Interdictions pendant la Khutba
- Parler
- S'amuser avec quoi que ce soit
- Enjamber les gens
- Hadith : « إذا قلت لصاحبك يوم الجمعة أنصت والإمام يخطب فقد لغوت » (Bukhari 934)

---

## 🤖 AGENT 5 : Leçon 022 - صلاة العيدين (La Prière des Deux Fêtes)

### Contenu Requis

#### 1. Statut Juridique
- Fard Kifaya (obligation communautaire) - Avis Hanbalite
- Sunna Mu'akkada selon d'autres
- Le Prophète ﷺ ne l'a jamais délaissée

#### 2. Temps de la Prière
- Après le lever du soleil d'une hauteur de lance (~15-20 min)
- Jusqu'au zénith
- Retarder Eid Al-Fitr, avancer Eid Al-Adha

#### 3. Lieu de la Prière
- Le Musalla (en plein air) est préféré
- Hadith : Le Prophète ﷺ sortait vers le Musalla

#### 4. Description de la Prière
- 2 rak'at
- **1ère rak'a :** 7 takbirat après takbirat al-ihram
- **2ème rak'a :** 5 takbirat après le lever
- Ce qu'on dit entre les takbirat
- Sourates recommandées : Al-A'la et Al-Ghashiya

#### 5. La Khutba du Eid
- Après la prière (contrairement à Jumu'ah)
- Une ou deux khutbas
- Sunna et non obligatoire de l'écouter

#### 6. Sunnas du Jour de Eid
- Le ghusl
- Se parfumer
- Porter ses meilleurs habits
- Manger avant Eid Al-Fitr, après pour Al-Adha
- Emprunter un chemin différent au retour
- Le takbir

#### 7. Formules du Takbir
- « الله أكبر، الله أكبر، لا إله إلا الله، والله أكبر، الله أكبر، ولله الحمد »
- Temps du takbir pour chaque Eid

---

## 🤖 AGENT 6 : Leçon 023 - صلاة الجنازة (La Prière Funéraire)

### Contenu Requis

#### 1. Statut
- Fard Kifaya
- Hadith : « صلوا على صاحبكم » (Bukhari 1245)

#### 2. Conditions
- Présence du corps
- Le corps doit être devant les priants
- Le mort doit être musulman

#### 3. Description de la Prière
- Pas d'inclinaison ni de prosternation
- 4 takbirat

#### 4. Ce qu'on récite
| Takbira | Ce qu'on lit |
|---------|--------------|
| 1ère | Al-Fatiha |
| 2ème | Prière sur le Prophète ﷺ (comme dans le tashahhud) |
| 3ème | Du'a pour le mort |
| 4ème | Du'a puis taslim |

#### 5. Du'a pour le Mort
- « اللهم اغفر له وارحمه وعافه واعف عنه وأكرم نزله ووسع مدخله واغسله بالماء والثلج والبرد ونقه من الخطايا كما ينقى الثوب الأبيض من الدنس » (Muslim 963)
- Du'a pour l'enfant

#### 6. Position de l'Imam
- Au niveau de la tête pour l'homme
- Au niveau du milieu pour la femme

#### 7. Celui qui manque des takbirat
- Faire les takbirat manquées après le taslim de l'imam
- Ou suivre l'imam et compléter

---

## 🤖 AGENT 7 : Leçon 024 - صلاة الكسوف والخسوف (La Prière de l'Éclipse)

### Contenu Requis

#### 1. Définition et Sagesse
- Kusuf = éclipse solaire
- Khusuf = éclipse lunaire
- Signes d'Allah pour effrayer les serviteurs
- Hadith : « إن الشمس والقمر آيتان من آيات الله لا ينكسفان لموت أحد ولا لحياته » (Bukhari 1041)

#### 2. Statut
- Sunna Mu'akkada
- Certains disent Fard Kifaya

#### 3. Temps
- Du début à la fin de l'éclipse

#### 4. Description (Méthode Hanbalite)
- 2 rak'at
- Chaque rak'a contient 2 inclinaisons
- Récitation longue dans la 1ère (comme Al-Baqara)
- Récitation moins longue dans la 2ème

#### 5. Étapes Détaillées
1. Takbirat al-ihram
2. Du'a d'ouverture
3. Lecture longue
4. 1ère inclinaison (longue)
5. Se relever et lire (moins long)
6. 2ème inclinaison (moins longue)
7. Prosternations normales
8. 2ème rak'a (même structure mais plus court)

#### 6. Autres Actes Recommandés
- Le dhikr et l'istighfar
- Le du'a
- La sadaqa
- L'affranchissement d'esclaves (historiquement)

---

## 🤖 AGENT 8 : Leçon 025 - صلاة الاستسقاء (La Prière pour la Pluie)

### Contenu Requis

#### 1. Définition
- Demander à Allah de faire descendre la pluie en temps de sécheresse

#### 2. Statut
- Sunna Mu'akkada lors de la sécheresse

#### 3. Description
- Comme la prière du Eid (2 rak'at)
- Avec les takbirat supplémentaires

#### 4. La Khutba
- Après la prière
- Beaucoup d'istighfar
- Verset : « فَقُلْتُ اسْتَغْفِرُوا رَبَّكُمْ إِنَّهُ كَانَ غَفَّارًا يُرْسِلِ السَّمَاءَ عَلَيْكُم مِّدْرَارًا » (Nuh 10-11)

#### 5. Actes Recommandés
- Sortir avec humilité
- Vêtements modestes
- Faire sortir les enfants et les personnes âgées
- Retourner le Rida (manteau)

#### 6. Du'a de l'Istisqa
- « اللهم اسقنا غيثًا مغيثًا هنيئًا مريئًا غدقًا مجللًا سحًا عامًا طبقًا دائمًا، اللهم اسقنا الغيث ولا تجعلنا من القانطين »

---

## 🤖 AGENT 9 : Leçon 026 - سجود التلاوة والشكر (Prosternations de Récitation et Remerciement)

### Contenu Requis

#### 1. Sujud At-Tilawa
- **Définition :** Se prosterner lors de la récitation de certains versets
- **Statut :** Sunna Mu'akkada
- **Hadith :** « إذا قرأ ابن آدم السجدة فسجد اعتزل الشيطان يبكي » (Muslim 81)

#### 2. Les 15 Positions de Sajda dans le Coran
| # | Sourate | Verset |
|---|---------|--------|
| 1 | Al-A'raf | 206 |
| 2 | Ar-Ra'd | 15 |
| 3 | An-Nahl | 50 |
| 4 | Al-Isra | 109 |
| 5 | Maryam | 58 |
| 6 | Al-Hajj | 18 |
| 7 | Al-Hajj | 77 |
| 8 | Al-Furqan | 60 |
| 9 | An-Naml | 26 |
| 10 | As-Sajdah | 15 |
| 11 | Sad | 24 |
| 12 | Fussilat | 38 |
| 13 | An-Najm | 62 |
| 14 | Al-Inshiqaq | 21 |
| 15 | Al-Alaq | 19 |

#### 3. Conditions
- La pureté est-elle requise ?
- Faire face à la Qibla
- Se couvrir

#### 4. Description
- Takbir en descendant
- Une prosternation
- Du'a : « سجد وجهي للذي خلقه وصوره وشق سمعه وبصره بحوله وقوته »
- Se relever avec ou sans takbir
- Pas de taslim obligatoire

#### 5. Sujud Ash-Shukr
- **Définition :** Se prosterner pour remercier Allah d'un bienfait
- **Statut :** Sunna
- **Occasion :** Bonne nouvelle, échapper à un malheur

---

## 🤖 AGENT 10 : Leçon 027 - قضاء الفوائت (Le Rattrapage des Prières Manquées)

### Contenu Requis

#### 1. L'Obligation du Rattrapage
- Hadith : « من نسي صلاة أو نام عنها فكفارتها أن يصليها إذا ذكرها » (Bukhari 597, Muslim 684)

#### 2. Causes du Manquement
| Cause | Rattrapage ? |
|-------|-------------|
| Oubli | ✅ Obligatoire |
| Sommeil | ✅ Obligatoire |
| Apostasie puis retour | ❌ Non requis (selon les Hanbalites) |
| Délaissement volontaire | ✅ Obligatoire avec repentir |
| Folie/Inconscience | ❌ Non requis |

#### 3. Le Moment du Rattrapage
- Immédiatement après s'en souvenir
- Hadith : « لا كفارة لها إلا ذلك »
- Même pendant les heures interdites

#### 4. L'Ordre dans le Rattrapage (الترتيب)
- **Règle :** Respecter l'ordre chronologique
- Exemple : Manqué Dhuhr et Asr → Prier Dhuhr puis Asr
- **Exception :** Si on oublie l'ordre

#### 5. Rattrapage et Prière Actuelle
- Si peu de prières manquées : les rattraper d'abord
- Si beaucoup : rattraper progressivement
- Prière du moment ne doit pas être retardée

#### 6. Cas Pratiques
- Celui qui a des années à rattraper
- Comment organiser le rattrapage
- Les prières surérogatoires pendant le rattrapage

---

## ⚙️ Instructions Communes pour Tous les Agents

### Structure des Fichiers TypeScript

```typescript
// fr.ts
export const content = `
# Titre de la Leçon

[Introduction captivante avec contexte islamique]

> Hadith ou Verset d'accroche avec source complète

---

## 1. Première Section

### Sous-section

Contenu...

| Colonne 1 | Colonne 2 |
|-----------|-----------|
| Valeur | Valeur |

### 📌 Point Important

> Citation avec source

---

## 2. Deuxième Section

[Suite du contenu...]

---

## 🎯 Résumé

- Point clé 1
- Point clé 2
- Point clé 3

---

## 📚 Sources

1. Sahih Al-Bukhari, Hadith n°XXX
2. Sahih Muslim, Hadith n°XXX
3. [Autres sources]
`
```

### Vérifications Obligatoires

- [ ] Versets coraniques : Sourate + Numéro de verset
- [ ] Hadiths : Livre + Numéro exact
- [ ] Pas de fautes d'orthographe en arabe
- [ ] Traductions fidèles en 3 langues
- [ ] Tableaux récapitulatifs
- [ ] Durée estimée : 20-35 min par leçon
- [ ] Emojis appropriés (📌 🎯 📚 ⚠️ ✅)

---

## 🚀 Ordre d'Exécution

1. **Phase 1** (Priorité Haute) :
   - Leçon 018 : صلاة الجماعة
   - Leçon 021 : صلاة الجمعة
   - Leçon 027 : قضاء الفوائت

2. **Phase 2** (Haute) :
   - Leçon 019 : صلاة المسافر
   - Leçon 020 : صلاة المريض

3. **Phase 3** (Moyenne) :
   - Leçon 022 : صلاة العيدين
   - Leçon 023 : صلاة الجنازة

4. **Phase 4** (Normale) :
   - Leçon 024 : صلاة الكسوف
   - Leçon 025 : صلاة الاستسقاء
   - Leçon 026 : سجود التلاوة والشكر

---

**Maintenu par** : Équipe TahaLearn  
**Dernière mise à jour** : 5 décembre 2025
