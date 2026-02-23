#!/bin/bash

echo "🔄 URLs CORRIGÉES à soumettre dans Google Search Console"
echo "======================================================"
echo "Date: $(date)"
echo ""
echo "⚡ PRIORITÉ MAXIMALE - Soumettre ces URLs immédiatement :"
echo ""

# URLs corrigées du cours Mustalah al-Hadith 
urls=(
  "https://www.tahalearn.com/courses/mustalah-hadith"
  "https://www.tahalearn.com/courses/mustalah-hadith/lessons/001-introduction"  
  "https://www.tahalearn.com/courses/mustalah-hadith/lessons/002-classification"
  "https://www.tahalearn.com/courses/mustalah-hadith/lessons/003-isnad"
  "https://www.tahalearn.com/courses/mustalah-hadith/lessons/004-recueils"
  "https://www.tahalearn.com/courses/mustalah-hadith/lessons/005-verification"
  "https://www.tahalearn.com/courses/mustalah-hadith/lessons/006-mawdu"
  "https://www.tahalearn.com/courses/mustalah-hadith/lessons/007-femmes-savantes"
)

for url in "${urls[@]}"; do
  echo "✅ $url"
  # Tester l'accessibilité  
  status=$(curl -o /dev/null -s -w "%{http_code}" "$url")
  if [ "$status" = "200" ]; then
    echo "   ✓ Accessible (HTTP $status)"
  else
    echo "   ❌ Erreur (HTTP $status)"
  fi
  echo ""
done

echo ""
echo "🎯 ACTIONS À EFFECTUER :"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "1. Ouvrir https://search.google.com/search-console"  
echo "2. Sélectionner la propriété 'www.tahalearn.com'"
echo "3. Aller dans 'Inspection d'URL'"
echo "4. Coller chaque URL ci-dessus et cliquer 'DEMANDER UNE INDEXATION'"
echo "5. Dans 'Sitemaps', supprimer l'ancien et resoummettre :"
echo "   https://www.tahalearn.com/sitemap.xml"
echo ""
echo "⏱️ Délai d'indexation attendu : 24-48h"
echo "🔄 Le sitemap sera mis à jour automatiquement (cache Vercel)"