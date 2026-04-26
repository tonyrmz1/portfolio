import type { Language } from '@/context/LanguageContext';
import esData from './es.json';
import enData from './en.json';

const data: Record<Language, typeof esData> = {
  es: esData,
  en: enData,
};

export default data;
