#!/bin/bash

# Script de soumission du sitemap à Google Search Console
# Usage: ./submit-sitemap.sh

set -e

SITEMAP_URL="https://www.tahalearn.com/sitemap.xml"
PING_URL="https://www.google.com/ping?sitemap=${SITEMAP_URL}"

echo "🚀 Soumission du sitemap à Google Search Console..."
echo "Sitemap: $SITEMAP_URL"
echo ""

# Vérifier que le sitemap existe
echo "📋 Vérification de l'existence du sitemap..."
HTTP_CODE=$(curl -s -o /dev/null -w "%{http_code}" "$SITEMAP_URL")

if [ "$HTTP_CODE" -eq 200 ]; then
    echo "✅ Sitemap trouvé (HTTP $HTTP_CODE)"
else
    echo "❌ Erreur: Sitemap introuvable (HTTP $HTTP_CODE)"
    exit 1
fi

# Soumettre à Google
echo ""
echo "📤 Soumission à Google..."
RESPONSE=$(curl -s -o /dev/null -w "%{http_code}" "$PING_URL")

if [ "$RESPONSE" -eq 200 ]; then
    echo "✅ Sitemap soumis avec succès à Google!"
    echo ""
    echo "📊 Prochaines étapes:"
    echo "1. Attendez 24-48h pour la réindexation"
    echo "2. Vérifiez dans Google Search Console: https://search.google.com/search-console"
    echo "3. Consultez le rapport 'Couverture' pour voir l'état d'indexation"
else
    echo "⚠️  Réponse de Google: HTTP $RESPONSE"
    echo "Le sitemap a peut-être été soumis, vérifiez dans la Search Console"
fi

echo ""
echo "🔗 Liens utiles:"
echo "- Search Console: https://search.google.com/search-console"
echo "- Votre sitemap: $SITEMAP_URL"
echo "- robots.txt: https://www.tahalearn.com/robots.txt"
