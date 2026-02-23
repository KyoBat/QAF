#!/bin/bash

# Script de diagnostic SEO pour identifier les problèmes d'indexation
echo "🔍 Diagnostic SEO TahaLearn - $(date)"
echo "=================================================="

# 1. Vérifier que le site est accessible
echo "📡 Test d'accessibilité du site..."
curl -I https://www.tahalearn.com/ | head -n 5

echo -e "\n📄 Test du sitemap..."
curl -I https://www.tahalearn.com/sitemap.xml | head -n 3

# 2. Générer la liste des URLs de cours pour vérification manuelle
echo -e "\n📚 URLs de cours à tester dans Google Search Console:"
echo "https://www.tahalearn.com/courses/mustalah-hadith"
echo "https://www.tahalearn.com/courses/mustalah-hadith/lessons/001-introduction"
echo "https://www.tahalearn.com/courses/mustalah-hadith/lessons/002-classification" 
echo "https://www.tahalearn.com/courses/mustalah-hadith/lessons/003-isnad"
echo "https://www.tahalearn.com/courses/mustalah-hadith/lessons/004-recueils"
echo "https://www.tahalearn.com/courses/mustalah-hadith/lessons/005-verification"
echo "https://www.tahalearn.com/courses/mustalah-hadith/lessons/006-mawdu"
echo "https://www.tahalearn.com/courses/mustalah-hadith/lessons/007-femmes-savantes"

echo -e "\n📋 URLs de sciences-hadith à tester:"
echo "https://www.tahalearn.com/courses/sciences-hadith"
echo "https://www.tahalearn.com/courses/sciences-hadith/lessons/lesson-001"
echo "https://www.tahalearn.com/courses/sciences-hadith/lessons/lesson-002"

echo -e "\n🎯 Actions à effectuer:"
echo "1. Ouvrir Google Search Console: https://search.google.com/search-console"
echo "2. Sélectionner la propriété www.tahalearn.com"
echo "3. Aller dans 'Inspection d'URL'"
echo "4. Tester chaque URL ci-dessus"
echo "5. Cliquer 'Demander une indexation' si l'URL n'est pas indexée"
echo "6. Dans 'Sitemaps', resoumettre le sitemap: https://www.tahalearn.com/sitemap.xml"

echo -e "\n✅ Script terminé - $(date)"