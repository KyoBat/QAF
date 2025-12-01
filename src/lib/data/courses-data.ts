/**
 * Données des cours - Export depuis la structure modulaire
 * Ce fichier sert de point d'entrée rétrocompatible
 * 
 * La nouvelle architecture est dans /src/lib/data/courses/
 * 
 * Structure:
 * - /src/lib/data/courses/types.ts        - Types partagés
 * - /src/lib/data/courses/tajweed/        - Cours Tajweed
 * - /src/lib/data/courses/fiqh/           - Cours Fiqh  
 * - /src/lib/data/courses/aqeedah/        - Cours Aqeedah
 * - /src/lib/data/courses/seerah/         - Cours Seerah
 * - /src/lib/data/courses/hadith/         - Cours Hadith
 *
 * Chaque cours contient:
 * - meta.ts                               - Métadonnées du cours
 * - lessons/XXX-nom/fr.ts                 - Contenu français
 * - lessons/XXX-nom/ar.ts                 - Contenu arabe
 * - lessons/XXX-nom/en.ts                 - Contenu anglais
 * - lessons/XXX-nom/index.ts              - Export de la leçon
 */

// Re-export depuis la nouvelle structure modulaire
export { coursesData } from './courses/index'
export type { Course, Lesson, Resource, CourseMeta, LocalizedString, Locale } from './courses/types'
