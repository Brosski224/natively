// Single source of truth for which locales the site supports.
//
// To add a new language (e.g. Spanish):
//   1. Add its translation JSON at src/locales/es.json
//   2. Register it in src/i18n.ts `resources`
//   3. Add 'es' to SUPPORTED_LOCALES below
//   4. Add an `es: { title, desc, ... }` block to each route in scripts/prerender.js
//      and add 'es' to SUPPORTED_LOCALES there too (kept in sync intentionally —
//      prerender.js runs in plain Node and cannot import this .ts module).
//
// 'en' is the default locale and is served at the bare path (no prefix).
// Every other locale is served under a /<locale>/ path prefix.
export const DEFAULT_LOCALE = 'en' as const;

export const SUPPORTED_LOCALES = ['en', 'ru'] as const;

export type SupportedLocale = (typeof SUPPORTED_LOCALES)[number];

/** Non-default locales, i.e. those served under a /<locale>/ path prefix. */
export const PREFIXED_LOCALES: SupportedLocale[] = SUPPORTED_LOCALES.filter(
  (l) => l !== DEFAULT_LOCALE
);

export function isSupportedLocale(value: string): value is SupportedLocale {
  return (SUPPORTED_LOCALES as readonly string[]).includes(value);
}

// Pages that ship English-only for now (RU body content is a planned fast-follow).
// They are prerendered at the bare path only (skipRu in scripts/prerender.js) and
// have no /ru/ entry in the sitemap. Links to them must therefore NOT be locale-
// prefixed even when rendered on a /ru/ page — otherwise a Russian visitor would
// land on a /ru/<page> URL that isn't prerendered or indexed and renders English
// content. LocaleLink consults this set and keeps these links on the bare path.
// When a page gets full RU content, remove it here AND drop skipRu in prerender.js
// AND add its /ru/ sitemap entry.
export const ENGLISH_ONLY_PATHS: ReadonlySet<string> = new Set([
  '/ai-meeting-assistant',
  '/ai-note-taker',
  '/sales-call-assistant',
  '/lecture-note-taker',
  '/natively-vs-fireflies',
  '/natively-vs-otter',
  '/fireflies-alternative',
  '/otter-alternative',
  '/system-design-interview-assistant',
  '/behavioral-interview-assistant',
  '/interview-answer-generator',
  '/live-interview-assistant',
  '/interview-questions/software-engineer',
  '/interview-questions/product-manager',
  '/interview-questions/data-scientist',
  '/interview-questions/ai-engineer',
  '/system-design/uber',
  '/system-design/whatsapp',
]);
