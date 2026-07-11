# Anti-scraping — stratégie en 3 couches (plan Hobby)

Contexte : les pages de leçons sont servies **statiquement** (SSG + CDN) et sont
ciblées par un **botnet headless distribué** (Chromium complet qui résout les
challenges JS). Aucune de ces couches ne l'**arrête** totalement — elles
augmentent le **coût** du scraping, éliminent les bots naïfs, et donnent de quoi
bannir manuellement les récidivistes. L'efficacité vient de leur **combinaison**.

> ⚠️ Vérité honnête : un blocage *fiable* d'un headless sophistiqué exige une
> analyse comportementale ML (**Vercel BotID Deep Analysis / Kasada** ou
> Cloudflare Bot Management), qui nécessite au minimum le **plan Pro**. Sur
> Hobby, on vise la **friction**, pas l'imperméabilité.

Les 3 couches :

| # | Couche | Où | Statut |
|---|--------|-----|--------|
| 1 | Cookie de session `tl_s` | `src/middleware.ts` (code) | ✅ implémenté |
| 2 | Règles WAF (rate-limit + honeypot ban) | Dashboard Vercel (config) | ⚙️ à créer (ce doc) |
| 3 | Honeypot `/api/trap` | `src/app/api/trap/` + footer (code) | ✅ implémenté |

---

## Couche 1 — Cookie de session `tl_s` (déjà en place)

Le middleware pose un cookie opaque `tl_s` (UUID, `httpOnly`, `secure`,
`SameSite=Lax`, 1 an) au premier passage sur une page localisée. Il ne bloque
**rien** (fail-open). Son rôle : donner au WAF une **clé stable** pour :

- compter les requêtes **par session** (et pas seulement par IP) ;
- **distinguer** le trafic « avec cookie » (navigateurs qui persistent les
  cookies) du trafic « sans cookie » (scrapers froids qui repartent à zéro).

> Observable en **production uniquement** : en local (`localhost`) le middleware
> court-circuite avant de poser le cookie.

---

## Couche 2 — Règles WAF Vercel (à créer dans le dashboard)

Projet → **Firewall** → **Rules** → *Configure*. Créer les règles dans cet
ordre (la 1re qui matche gagne).

### Règle 0 — Laisser passer les bots vérifiés (SEO) — PRIORITÉ HAUTE

Pour ne JAMAIS bloquer Googlebot / Bingbot / Qwant, etc.

- **If** : `Request Path` *matches* `^/(fr|ar|en)/courses/.*`
  **AND** `Verified Bot` *is* `true`
- **Then** : **Allow** (skip les règles suivantes)

> Vercel identifie les bots vérifiés via [bots.fyi](https://bots.fyi)
> (IP + reverse-DNS), indépendamment du User-Agent → non spoofable.

### Règle 1 — Rate-limit par IP sur les pages de leçons

- **If** : `Request Path` *matches* `^/(fr|ar|en)/courses/[^/]+/lessons/.*`
- **Then** : **Rate Limit**
  - Clé : `IP address`
  - Seuil de départ : **60 requêtes / 60 s** (à affiner, voir plus bas)
  - Action au dépassement : **Challenge** (ou **Deny** si tu préfères plus dur)

### Règle 2 — Rate-limit renforcé sur le trafic SANS cookie `tl_s`

Un navigateur humain renvoie `tl_s` dès la 2e page ; un scraper froid ne le
renvoie jamais. On serre donc la vis sur le trafic sans cookie (les bots
vérifiés sont déjà sortis par la Règle 0, donc Googlebot n'est pas impacté).

- **If** : `Request Path` *matches* `^/(fr|ar|en)/courses/[^/]+/lessons/.*`
  **AND** `Request Cookie` `tl_s` *does not exist*
- **Then** : **Rate Limit**
  - Clé : `IP address`
  - Seuil : **10 requêtes / 60 s** (plus strict)
  - Action : **Challenge**

### Règle 3 — Bannir les visiteurs du honeypot

Toute requête vers `/api/trap` = bot (aucun humain, aucun crawler respectueux
n'y va).

- **If** : `Request Path` *equals* `/api/trap`
- **Then** : **Deny** — et si ton plan propose une **action persistante** /
  ajout à une *IP Deny List*, l'activer pour bannir l'IP sur **tout** le site,
  pas seulement `/api/trap`.

> Si l'action persistante n'est pas dispo sur ton plan : récupère les IP
> fautives dans les logs (`[honeypot] hit`, voir plus bas) et ajoute-les
> manuellement à ta deny-list ASN/IP existante.

### ⚠️ Disponibilité du *Rate Limit* selon le plan

L'action **Rate Limit** du WAF peut être restreinte à Pro+ sur certains comptes.
Vérifie dans le dashboard. Si indisponible sur Hobby :

- les **Règles 0 et 3** (Allow verified bots + Deny honeypot) restent
  disponibles et utiles ;
- pour le rate-limiting, repli sur un throttle applicatif *best-effort*
  (voir `src/lib/utils/rate-limit.ts`, à câbler dans le middleware) — imparfait
  car en mémoire par instance, non partagé.

---

## Couche 3 — Honeypot `/api/trap` (déjà en place)

- Lien caché dans le footer (`src/components/layout.tsx`) : `<a>` natif
  (jamais `<Link>`, pour éviter le prefetch), `display:none`, `aria-hidden`,
  `tabindex=-1`, `rel="nofollow"`.
- Interdit dans `robots.txt` (`src/app/robots.ts`) → les crawlers respectueux
  ne le suivent pas.
- La route `src/app/api/trap/route.ts` **journalise** l'IP fautive (hachée,
  jamais en clair) + UA + ASN, puis renvoie **403**.

### Exploiter les logs honeypot

Dans les logs Vercel, filtrer `[honeypot] hit`. Chaque entrée donne `ipHash`,
`ua`, `asn`. Utilise l'**ASN** pour repérer un hébergeur/datacenter à bloquer
en masse (Règle WAF par ASN), et alimente la Règle 3 / ta deny-list.

---

## Deux inconnues à trancher depuis tes logs firewall

1. **IP datacenter vs résidentielles ?**
   - Datacenter → un blocage ASN agressif (via l'ASN loggé par le honeypot) est
     très efficace.
   - Résidentielles (proxies) → l'ASN ne sert à rien ; mise sur les Règles 1–2.
2. **Le botnet réutilise-t-il des cookies/sessions ?** → calibre le seuil de la
   Règle 2 (sans cookie) vs Règle 1.

## Calibrage des seuils

Pars **large** (Règle 1 à 60/min) puis resserre en surveillant Firewall →
Observability. Objectif : le p99 d'un lecteur humain (qui lit, ne rafale pas)
doit rester **très en dessous** du seuil. Un humain enchaîne rarement plus de
quelques leçons/minute ; un scraper en fait des dizaines.

## Upgrade : état partagé (Vercel KV) — la vraie détection cross-IP

La détection « **une même session `tl_s` vue depuis N IP différentes** »
(signature typique d'un botnet qui partage un cookie) exige un **état partagé**
entre instances serverless. Avec **Vercel KV** (Upstash, offre gratuite sur
Hobby) on pourrait, dans le middleware :

- stocker `tl_s → {IPs, compteur fenêtre}` ;
- bannir une session vue depuis trop d'IP, ou une IP dépassant un quota ;
- maintenir une **deny-list durable** alimentée automatiquement par le honeypot.

Non implémenté ici (nécessite la création d'un store KV + variables d'env). À
faire si les couches 1–3 ne suffisent pas.
