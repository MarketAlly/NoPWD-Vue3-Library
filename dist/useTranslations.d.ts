import { Translations } from './types/translations';
export declare function useTranslations(customTranslations?: Record<string, Translations>): {
    t: (key: string) => string;
};
