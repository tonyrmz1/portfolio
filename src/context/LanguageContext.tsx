import React, { createContext, useState, useEffect, ReactNode } from 'react';
import esLocales from '@/locales/es.json';
import enLocales from '@/locales/en.json';

export type Language = 'es' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  locales: Record<Language, Record<string, any>>;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

function detectBrowserLanguage(): Language {
  const browserLang = navigator.language.split('-')[0];
  return browserLang === 'en' ? 'en' : 'es';
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    return detectBrowserLanguage();
  });

  const locales: Record<Language, Record<string, any>> = {
    es: esLocales,
    en: enLocales,
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, locales }}>
      {children}
    </LanguageContext.Provider>
  );
}
