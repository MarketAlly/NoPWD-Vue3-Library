// useTranslations.ts
import { ref } from 'vue';
import { defaultTranslations } from './translations';
import { Translations } from './types/translations';

export function useTranslations(customTranslations: Record<string, Translations> = {}) {
  const translations = ref({ ...defaultTranslations, ...customTranslations });
  const locale = ref('en'); // Default locale

  const t = (key: string): string => {
    const translation = translations.value[locale.value][key];
    if (translation === undefined) {
      console.warn(`Translation not found for key: ${key}`);
      return key; // Return the original key if not found
    }
    return translation;
  };

  return { t };
}
