# Anti-scraping des leçons — note comparative des leviers réalistes (plan Hobby)

> Note d'aide à la décision, **sans code**. Fait suite à `ANTI-SCRAPING.md` et au
> constat que **Vercel BotID ne protège pas un rendu de page adressé en direct**
> (il ne couvre que les requêtes `fetch` issues d'une page déjà chargée → il
> manque exactement le pattern du botnet, et casserait le SEO si on réécrivait
> les leçons en contenu chargé par fetch).

## 1. Le mur : SEO-visible = scrapable

Modèle de menace (rappel) : **Chromium headless complet**, exécute le JS, accepte
les cookies, passe les challenges WAF, arrive via **proxies résidentiels**, frappe
les URLs de leçons **en direct**. Résidu ~**2 700 req/jour**.

Le contenu des leçons doit être dans le **HTML rendu serveur** (SEO vital). Tout
ce que Googlebot lit, ce bot le lit. **Conséquence** : aucune mesure ne peut
nourrir Googlebot et bloquer ce bot en même temps. Objectif réaliste = **coût**,
**attribution**, **mesure** — pas prévention.

## 2. Tableau comparatif

Notation : ✅ bon / ⚠️ partiel-risqué / ❌ mauvais. « Efficacité » = contre CE
bot précis (headless + résidentiel + accès direct).

| # | Levier | Efficacité vs ce bot | SEO | UX / a11y | RGPD | Effort | Coût | Verdict |
|---|--------|:--:|:--:|:--:|:--:|:--:|:--:|--------|
| A | **Détection KV cross-signaux + deny-list auto** (une session `tl_s` vue depuis N IP ; vélocité par IP/session ; auto-ban) | ⚠️ dépend s'il réutilise cookies / rafale | ✅ | ✅ | ✅ (IP hachées) | Moyen | Gratuit (KV Hobby) | **Le seul vrai levier « coût ». À calibrer sur logs.** |
| B | **Watermarking par session `tl_s`** (marqueurs invisibles traçables dans le contenu) | ❌ prévention / ⚠️ dissuasion+preuve | ✅ | ✅ | ✅ | Moyen | Gratuit | **Utile en appoint** (attribution, DMCA) |
| C | **Stats honeypot KV + mesure** (déjà construit) | ❌ prévention / ✅ compréhension | ✅ | ✅ | ✅ | Fait | Gratuit | **À déployer d'abord : décide de la suite** |
| D | Obfuscation / tokenisation du texte (glyphes, split, CSS) | ❌ (Chromium lit le DOM rendu) | ❌ Googlebot voit du charabia | ❌ lecteurs d'écran | ⚠️ | Élevé | Gratuit | **À éviter : casse SEO + a11y, inefficace** |
| E | Cloaking (contenu complet aux verified bots, dégradé aux autres) | ⚠️ | ❌ **pénalité Google** (cloaking) | ⚠️ | ⚠️ | Élevé | Gratuit | **À éviter : risque pénalité SEO** |
| F | Proof-of-Work / challenge JS invisible | ❌ (le bot exécute le JS) | ✅ | ⚠️ latence | ✅ | Moyen | Gratuit | **Inutile vs headless** (n'arrête que les scrapers sans JS, déjà filtrés) |
| G | WAF rate-limit supplémentaire (par IP) | ❌ (IP résidentielles distribuées) | ✅ | ⚠️ faux positifs | ✅ | Faible | Gratuit | **Ne mord pas** sur un botnet distribué |
| H | **Passer le site derrière Cloudflare** (Bot Fight Mode gratuit ; Bot Management payant) | ✅ score la requête **de page** à l'edge + exempte verified bots | ✅ | ⚠️ faux positifs possibles | ✅ | Élevé (migration DNS/proxy) | Gratuit→$$ | **La « bonne couche » architecturale**, mais c'est un changement de plateforme |
| I | **Vercel Pro + Bot Management/WAF plateforme** | ✅ score à l'edge | ✅ | ⚠️ | ✅ | Faible (config) | Pro | **Efficace mais payant**, hors Hobby |

## 3. Lecture des résultats

- **La bonne couche technique** contre ce bot est un **scoring à l'edge de la
  requête de page** qui exempte les *verified bots* (Googlebot & co, non
  spoofables via reverse-DNS). Sur Vercel c'est **Bot Management plateforme
  (Pro)** ; hors Vercel c'est **Cloudflare devant le site**. Les deux coûtent
  (argent ou migration). C'est le seul endroit où on peut distinguer « page pour
  Googlebot » de « page pour le bot » **sans** toucher au HTML.
- **Sur Hobby, sans payer**, le maximum honnête est **A + B + C** : mesurer,
  détecter les sessions/IP anormales via KV, bannir les récidivistes, et marquer
  le contenu pour l'attribution. Ça **renchérit** et **trace**, ça ne bloque pas.
- **D/E/F/G sont des impasses** pour ce profil d'adversaire (détaillé ci-dessus).

## 4. Ce qui gouverne la décision : 2 inconnues à lever d'abord

La valeur du levier **A** dépend entièrement du comportement réel du bot, qu'on ne
connaît pas encore :

1. **Réutilise-t-il le cookie `tl_s` / une session ?** Si oui → « une session vue
   depuis N IP » est un signal en or. Si chaque requête = cookie neuf + IP neuve
   → ce signal est mort.
2. **Quelle vélocité par IP ?** Résidentiel lent et distribué → un seuil par IP ne
   verra rien. Résidentiel qui rafale → seuil KV efficace.

→ **On ne peut pas concevoir A intelligemment sans ces données.** D'où l'ordre :

## 5. Recommandation (ordre proposé)

1. **Déployer les stats honeypot KV** (déjà codé, fail-open testé) — 10 min de
   config. Laisser tourner **48–72 h**.
2. **Lire les données** : total honeypot, `topAsn`, + (à ajouter) un petit
   compteur KV « IP distinctes par session `tl_s` » et « req/min par IP ». Ça
   répond aux 2 inconnues.
3. **Alors seulement**, décider entre :
   - le bot réutilise cookies/rafale → **construire A** (détection + deny-list KV) ;
   - le bot est furtif (cookie+IP neufs, lent) → **A est inutile** ; le seul
     recours efficace devient **H (Cloudflare)** ou **I (Vercel Pro)** — décision
     budget, pas décision code.
4. En parallèle, **B (watermarking)** si l'attribution/DMCA t'intéresse.

## 6. À ne pas faire

Obfuscation de contenu (D), cloaking (E), proof-of-work (F), rate-limit WAF
supplémentaire (G) : coûteux en SEO/UX/temps, **inefficaces contre un headless
résidentiel**. Ne pas y passer de temps.
