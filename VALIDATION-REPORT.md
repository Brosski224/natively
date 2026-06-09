# Sitemap Validation & Cleanup Report — natively.software

**Date:** 2026-06-09
**File:** `public/sitemap.xml` (served at https://natively.software/sitemap.xml)
**URLs:** 80 (52 EN + 28 RU) · single file, well under the 50,000 protocol limit

## Result: PASS (cleaned)

The sitemap was already accurate — **zero content drift** against the route
source of truth (`scripts/prerender.js`) and **zero orphan/stale entries**. The
only defects were deprecated tags and a uniform `lastmod`, both now addressed.

## Changes applied

| Change | Before | After | Why |
|--------|--------|-------|-----|
| Removed `<priority>` | 80 tags | 0 | Google ignores `<priority>` entirely |
| Removed `<changefreq>` | 80 tags | 0 | Google ignores `<changefreq>` entirely |
| File size | 15.0 KB | 9.7 KB | -35%, less to parse |

XML re-validated with `xmllint --noout` → **well-formed**. URL set unchanged
(80 → 80, no dups).

## Validation checks

| Check | Status | Detail |
|-------|--------|--------|
| Valid XML format | PASS | `xmllint` clean |
| < 50,000 URLs / file | PASS | 80 URLs |
| All URLs return 200 | PASS | Spot-checked 9 incl. newest pages — all 200, 0 redirects |
| No redirected URLs | PASS | `num_redirects=0` across sample |
| HTTPS only | PASS | All 80 `https://` |
| Referenced in robots.txt | PASS | `Sitemap: https://natively.software/sitemap.xml` |
| Coverage vs routes | PASS | All 80 indexable routes present; 0 missing, 0 orphan |
| No deprecated tags | FIXED | `priority`/`changefreq` removed |
| Accurate `lastmod` | PARTIAL | All dates identical (`2026-06-09`) — see note |

### Intentionally excluded (correct)
Legal/utility routes are prerendered but kept out of the sitemap, as is
conventional: `/privacy`, `/refundpolicy`, `/termsandconditions`,
`/nativelyapi/t&c`, `/nativelypro/t&c`.

### hreflang
Already emitted correctly in every page's HTML `<head>` (`en` / `ru` /
`x-default`). Sitemap-level `xhtml:link` alternates would be redundant, so the
sitemap stays lean — no change needed.

## Auto-generation (implemented)

`public/sitemap.xml` is now **generated**, not hand-edited. The generator lives
in `scripts/prerender.js` (the `postbuild` step) and is driven by the same
`seoRoutes` array that produces the prerendered pages — so the sitemap can never
drift from the set of pages that actually exist.

- **Single source of truth.** Adding a route to `seoRoutes` adds it to the
  sitemap automatically. No separate list to sync (the old 4-place manual sync
  is gone; the in-code reminders in `src/data/interviewQuestions.ts` /
  `src/data/systemDesign.ts` were updated to say so).
- **Explicit exclusion.** Legal/utility pages opt out with
  `excludeFromSitemap: true` (`/privacy`, `/refundpolicy`,
  `/termsandconditions`, two `/t&c` aliases) — previously an implicit "these
  happen to be absent."
- **Per-page `lastmod`.** Each URL's date is the git last-commit date of that
  page's source file (`ROUTE_SOURCE_FILES` map), falling back to the build date
  if git is unavailable. Verified: 76 URLs at `2026-06-09`, 4 at `2026-04-07`
  (`ai-interview-assistant` + `docs/ai-interview-assistant`, en+ru) whose source
  genuinely hasn't changed since April.
- **No deprecated tags.** `priority` / `changefreq` are not emitted.
- **Written to two places.** `dist/sitemap.xml` (served in prod) and
  `public/sitemap.xml` (committed, reviewable in PRs, served by
  `vite dev` / `vite preview`) — verified byte-identical.

**Verified end-to-end:** `npm run build` → "Sitemap written: 80 URLs", output
URL set byte-identical to the prior 80, valid XML (`xmllint`), and all 52
non-legal routes map to an on-disk source file (no silent date fallbacks).
