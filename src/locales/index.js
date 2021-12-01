import { en } from './translation.en';
import { vi } from './translation.vi';
import { useTranslation } from 'react-i18next';
export const listLanguages = ['en', 'vi'];
export const setLanguage = (lng) =>
  typeof window !== undefined
    ? window.localStorage.setItem('tnshop-locale', lng)
    : null;

export const getLanguage = () => {
  if (typeof window !== 'undefined') {
    const lang = window.localStorage.getItem('tnshop-locale');
    if (!listLanguages.includes(lang)) {
      return 'vi';
    }
    return lang;
  }
  return 'vi';
};

export const configLang = {
  en: { key: 'en', text: 'English', code: 'US' },
  vi: { key: 'vi', text: 'Tiếng Việt', code: 'VN' },
};

export const useLanguage = () => {
  const { i18n, t, ready } = useTranslation();
  const lang = i18n.language || getLanguage();
  const { translation } = i18n.store.data[lang];
  return { lang, i18n, t, translation, ready };
};

export default {
  en,
  vi,
};
