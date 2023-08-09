// translations.ts
import enTranslations from './locales/en.json';
import { Translations } from './types/translations';

export const defaultTranslations: Record<string, Translations> = {
  en: enTranslations,
};
export type { Translations };

