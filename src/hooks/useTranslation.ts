import { useContext } from 'react';
import { LanguageContext } from '@/context/LanguageContext';

export function useTranslation() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error(
      'useTranslation debe ser usado dentro de LanguageProvider'
    );
  }

  const t = (key: string, defaultValue?: string): string => {
    const keys = key.split('.');
    let value: any = context.locales[context.language];

    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        console.warn(`Translation key not found: ${key}`);
        return defaultValue || key;
      }
    }

    return typeof value === 'string' ? value : defaultValue || key;
  };

  return {
    language: context.language,
    setLanguage: context.setLanguage,
    t,
  };
}
