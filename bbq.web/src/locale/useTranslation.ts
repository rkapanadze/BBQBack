import en from '../locale/en.json';
import ge from '../locale/ge.json';
import {useState, useEffect} from 'react';

type LocaleStrings = typeof en;

const locales: Record<string, LocaleStrings> = {
  en: en,
  ge: ge,
};

const useTranslation = () => {
  const [locale, setLocale] = useState(localStorage.getItem('app-locale') || 'en');

  useEffect(() => {
    localStorage.setItem('app-locale', locale);
  }, [locale]); // Save locale whenever it changes

  const currentLocale = locales[locale] || locales['ge'];

  const t = (key: keyof LocaleStrings): string => {
    const word = currentLocale[key];
    if (!word) console.warn(`Missing translation for "${key}"`);
    return word || key;
  };

  return {t, locale, setLocale};
};

export default useTranslation;
