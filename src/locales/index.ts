import fr from './fr.json';
import ar from './ar.json';
import en from './en.json';

// Types de locales disponibles
export type Locale = 'fr' | 'ar' | 'en';

// Type pour les traductions
export type Translations = typeof fr;

// Type récursif pour les clés de traduction imbriquées
type NestedKeyOf<T> = T extends object
  ? {
      [K in keyof T]: K extends string
        ? T[K] extends object
          ? `${K}` | `${K}.${NestedKeyOf<T[K]>}`
          : `${K}`
        : never;
    }[keyof T]
  : never;

export type TranslationKey = NestedKeyOf<Translations>;

// Configuration des locales
export const locales: Record<Locale, { name: string; nativeName: string; dir: 'ltr' | 'rtl' }> = {
  fr: {
    name: 'French',
    nativeName: 'Français',
    dir: 'ltr',
  },
  ar: {
    name: 'Arabic',
    nativeName: 'العربية',
    dir: 'rtl',
  },
  en: {
    name: 'English',
    nativeName: 'English',
    dir: 'ltr',
  },
};

// Locale par défaut
export const defaultLocale: Locale = 'fr';

// Dictionnaire des traductions
export const translations: Record<Locale, Translations> = {
  fr,
  ar,
  en,
};

// Helper pour obtenir une traduction par clé imbriquée
export function getTranslation(locale: Locale, key: string): string {
  const keys = key.split('.');
  let result: unknown = translations[locale];

  for (const k of keys) {
    if (result && typeof result === 'object' && k in result) {
      result = (result as Record<string, unknown>)[k];
    } else {
      // Fallback vers la langue par défaut
      result = translations[defaultLocale];
      for (const fallbackKey of keys) {
        if (result && typeof result === 'object' && fallbackKey in result) {
          result = (result as Record<string, unknown>)[fallbackKey];
        } else {
          return key; // Retourne la clé si non trouvée
        }
      }
      break;
    }
  }

  return typeof result === 'string' ? result : key;
}

// Helper pour interpoler les variables dans les traductions
export function interpolate(text: string, params: Record<string, string | number>): string {
  return text.replace(/{(\w+)}/g, (_, key) => String(params[key] ?? `{${key}}`));
}

// Export des fichiers de traduction
export { fr, ar, en };
