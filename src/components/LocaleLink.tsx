import { Link, LinkProps } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { DEFAULT_LOCALE, isSupportedLocale } from "@/config/locales";

/** Prefix an absolute path with the current non-default locale, e.g. /x -> /ru/x. */
function localizePath(path: string, lang: string): string {
  if (!path.startsWith("/")) return path;
  const isPrefixed = isSupportedLocale(lang) && lang !== DEFAULT_LOCALE;
  if (!isPrefixed) return path;
  return path.startsWith(`/${lang}`) ? path : `/${lang}${path}`;
}

export function LocaleLink({ to, children, ...props }: LinkProps & { to: string }) {
  const { i18n } = useTranslation();
  const href = localizePath(to, i18n.language);

  return (
    <Link to={href} {...props}>
      {children}
    </Link>
  );
}

export function useLocalePath() {
  const { i18n } = useTranslation();
  return (path: string) => localizePath(path, i18n.language);
}
