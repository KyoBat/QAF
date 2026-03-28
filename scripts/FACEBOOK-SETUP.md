# Facebook Auto-Post — Guide de Configuration

## Étape 1 : Créer une App Facebook Developer

1. Va sur **https://developers.facebook.com/apps/**
2. Clique **Créer une application**
3. Choisis **Business** → **Suivant**
4. Nom : `TahaLearn Auto-Post`
5. Dans le Dashboard, note ton **App ID**

## Étape 2 : Obtenir le Page Access Token

### Option rapide (Graph API Explorer)

1. Va sur **https://developers.facebook.com/tools/explorer/**
2. Sélectionne ton App dans le menu déroulant
3. Clique **Get User Access Token**
4. Coche les permissions :
   - `pages_manage_posts`
   - `pages_read_engagement`
   - `pages_show_list`
5. Clique **Generate Access Token** → autorise
6. Dans le champ **token**, change le user token pour ton **Page token** :
   - Dans le menu déroulant à droite, sélectionne ta **Page**
7. Copie le token affiché → c'est ton `Page Access Token`

### Convertir en token long-durée (IMPORTANT)

Le token ci-dessus expire après ~1h. Pour obtenir un **token qui dure 60 jours** :

```bash
# 1. D'abord, obtenir un long-lived User Token
curl -s "https://graph.facebook.com/v21.0/oauth/access_token?\
grant_type=fb_exchange_token&\
client_id=TON_APP_ID&\
client_secret=TON_APP_SECRET&\
fb_exchange_token=TON_SHORT_USER_TOKEN"

# 2. Puis, obtenir le Page Token long-lived (qui lui N'EXPIRE JAMAIS)
curl -s "https://graph.facebook.com/v21.0/me/accounts?\
access_token=LONG_LIVED_USER_TOKEN"
```

Le Page Token obtenu à l'étape 2 **n'expire jamais** — c'est celui à mettre dans `.env.local`.

### Trouver ton Page ID

1. Va sur ta Page Facebook
2. Clique **À propos** → **Transparence de la Page**
3. Ou : dans l'URL de ta page, le Page ID est le nombre à la fin

## Étape 3 : Configurer les variables

Copie `.env.example` vers `.env.local` et remplis :

```env
FACEBOOK_PAGE_ID=123456789012345
FACEBOOK_PAGE_TOKEN=EAAG...ton_token_ici
FACEBOOK_POST_LANG=fr
```

## Étape 4 : Tester

```bash
# Aperçu du prochain post (sans publier)
npm run fb:preview

# Publier le prochain post
npm run fb:post

# Publier en arabe
node scripts/facebook-daily-post.mjs --lang ar

# Réinitialiser le cycle (republier depuis le début)
npm run fb:reset
```

## Étape 5 : Automatisation (cron)

Pour publier automatiquement chaque jour à 20h :

```bash
crontab -e
```

Ajoute cette ligne :

```cron
0 20 * * * cd /home/karim/ZadAcademy/rabbi-zidni-ilma && /usr/bin/node scripts/facebook-daily-post.mjs >> logs/facebook-posts.log 2>&1
```

Puis crée le dossier de logs :

```bash
mkdir -p logs
```

## Commandes disponibles

| Commande | Description |
|----------|-------------|
| `npm run fb:preview` | Aperçu du prochain post sans publier |
| `npm run fb:post` | Publie le prochain post |
| `npm run fb:reset` | Remet le compteur à zéro |
| `--lang fr\|ar\|en` | Choisir la langue |

## Banque de posts

Les posts sont dans `scripts/posts-bank.json` — **16 posts** actuellement, soit plus de 2 semaines de contenu. Tu peux en ajouter en suivant le même format JSON.

## Protection

- Le script empêche de publier **2 fois le même jour**
- Quand tous les posts sont épuisés, le cycle **recommence automatiquement**
- Le fichier `posts-state.json` garde la trace (il est gitignored)
