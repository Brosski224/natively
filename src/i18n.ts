import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en.json';
import ru from './locales/ru.json';
import { DEFAULT_LOCALE, SUPPORTED_LOCALES, isSupportedLocale } from './config/locales';

function detectLanguage(): string {
  const saved = localStorage.getItem('lang');
  if (saved && isSupportedLocale(saved)) return saved;

  const browserLang = navigator.language.toLowerCase();
  const match = SUPPORTED_LOCALES.find(
    (l) => l !== DEFAULT_LOCALE && browserLang.startsWith(l)
  );
  return match ?? DEFAULT_LOCALE;
}

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    ru: { translation: ru },
  },
  lng: detectLanguage(),
  fallbackLng: 'en',
  // Resources are bundled, so initialize synchronously. This guarantees i18n is
  // ready on the very first render — both during prerender and during client
  // hydration — so translated text matches and React doesn't hit a hydration
  // mismatch from a not-yet-ready t() returning keys.
  initImmediate: false,
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
});

export default i18n;
