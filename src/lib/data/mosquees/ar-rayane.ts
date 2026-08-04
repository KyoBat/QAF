/**
 * Mosquée Ar-Rayane — مسجد الريّان
 * Allées de Ben Boulaïd (ممرات بن بولعيد), Batna, Algérie
 *
 * Le QR code affiché sur la page est un asset statique, l'URL ne changeant
 * jamais. Pour le régénérer (sans ajouter de dépendance au projet) :
 *
 *   npx --yes qrcode -t svg -e M -w 512 -o public/images/mosquees/ar-rayane-qr.svg \
 *     "https://www.tahalearn.com/mosquees/ar-rayane-batna"
 *
 * L'URL encodée est volontairement sans préfixe de langue : le middleware
 * redirige alors chaque visiteur vers /fr, /ar ou /en selon son navigateur.
 */

import type { Mosquee } from './types'

export const arRayaneMosquee: Mosquee = {
  slug: 'ar-rayane-batna',
  name: {
    fr: 'Mosquée Ar-Rayane',
    ar: 'مسجد الريّان',
    en: 'Ar-Rayane Mosque',
  },
  nameArabic: 'مسجد الريّان',
  address: {
    fr: 'Allées de Ben Boulaïd',
    ar: 'ممرات بن بولعيد',
    en: 'Ben Boulaïd Alleys',
  },
  city: {
    fr: 'Batna',
    ar: 'باتنة',
    en: 'Batna',
  },
  country: {
    fr: 'Algérie',
    ar: 'الجزائر',
    en: 'Algeria',
  },
  inauguratedAt: '2023-11-25',
  intro: {
    fr: "Chaque vendredi, une nouvelle leçon tirée de TahaLearn, avec une question à emporter pour la semaine.",
    ar: 'كلَّ جمعة درسٌ جديد من منصّة طه للتعلّم، مع سؤالٍ ترافقك به أسبوعَك.',
    en: 'Every Friday, a new lesson from TahaLearn, with a question to carry through your week.',
  },
  inaugurationNote: {
    fr: "Inaugurée officiellement le 25 novembre 2023 par le ministre des Affaires religieuses et des Wakfs.",
    ar: 'افتُتح رسميًّا في 25 نوفمبر 2023 على يد وزير الشؤون الدينية والأوقاف.',
    en: 'Officially inaugurated on 25 November 2023 by the Minister of Religious Affairs and Endowments.',
  },
}
