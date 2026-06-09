import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { DEFAULT_LOCALE, PREFIXED_LOCALES } from '@/config/locales';

export default function LanguageRouter() {
  const { pathname } = useLocation();
  const { i18n } = useTranslation();

  useEffect(() => {
    // Match any prefixed locale at the start of the path, e.g. /ru or /ru/...
    const prefixed = PREFIXED_LOCALES.find(
      (loc) => pathname === `/${loc}` || pathname.startsWith(`/${loc}/`)
    );
    const targetLang = prefixed ?? DEFAULT_LOCALE;

    if (i18n.language !== targetLang) {
      i18n.changeLanguage(targetLang);
      if (targetLang === DEFAULT_LOCALE) {
        localStorage.removeItem('lang');
      } else {
        localStorage.setItem('lang', targetLang);
      }
    }
  }, [pathname, i18n]);

  return null;
}
