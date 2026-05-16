# Developer guide — D3K2 Studio website

## Stack

- **HTML5** — semantic markup, no templates
- **CSS3** — custom properties, no preprocessor
- **Vanilla JS** — theme + language only
- **GitHub Pages** — static host

No npm, no bundler, no framework.

## Repository layout

```
/
├── .nojekyll                 # Disable Jekyll
├── index.html                # Home (bilingual)
├── privacy-policy.html       # Legal EN
├── terms-of-service.html     # Legal EN
├── assets/
│   ├── css/site.css          # All styles
│   ├── js/theme-init.js      # FOUC prevention (load in <head>)
│   ├── js/theme.js           # Theme toggle API
│   ├── js/lang.js            # Home language toggle
│   └── images/logo-512.png   # Studio logo (white on transparent)
└── docs/                     # Project documentation
```

## Style & coding rules

### HTML

1. Use semantic elements: `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<footer>`.
2. One `<h1>` per page.
3. Legal sections use `<section id="...">` with stable IDs (kebab-case) for deep links later.
4. Decorative logo in header: `alt=""` on `<img>`; meaningful `alt` on hero logo.
5. Current nav item: `aria-current="page"`.
6. Keep **header/footer markup identical** across pages when editing (manual sync).

### CSS

1. **All theme colors** via CSS variables on `[data-theme="dark"]` and `[data-theme="light"]` — never hardcode theme-specific colors in components except `.logo-box` black background in light mode (`#000`).
2. New UI must work in **both** themes before merge.
3. Prefer existing tokens: `--bg`, `--text`, `--surface`, `--border`, `--link`.
4. Spacing: use rem; max content width via `--content-max` / `--legal-max`.
5. Do not add CSS frameworks or heavy resets.
6. Mobile-first; test at 320px width.

### JavaScript

1. No dependencies; IIFE pattern for each file.
2. **localStorage keys** (do not rename without migration note):
   - `d3k2-theme` → `dark` | `light`
   - `d3k2-lang` → `vi` | `en` | `zh` | `ja`
3. `theme-init.js` **must** load in `<head>` before `site.css` on every page.
4. `theme.js` loads before `</body>`; call `D3K2Theme.init()` after script tag.
5. `lang.js` only on `index.html` (binds `#lang-select`).
6. Graceful degradation if `localStorage` blocked (use system theme / default lang).

### Paths

- Production: absolute paths from root (`/assets/css/site.css`) — correct for org site at `https://d3k2-studio.github.io/`.
- Local: run a static server (see README); `file://` will break assets.

### Logo rules

| Context | Class | Light theme behavior |
|---------|-------|----------------------|
| Header brand | `.logo-box` | Black background, padding |
| Home hero | `.logo-box.logo-box--lg` | Same |

Logo file is **white artwork**; never invert with CSS filter — use black box instead.

## Theme system

```
Page load
  → theme-init.js reads localStorage OR prefers-color-scheme
  → sets <html data-theme="dark|light">
  → CSS variables apply

User clicks #theme-toggle
  → theme.js toggles, saves localStorage
  → updates aria-pressed, button icon (☀ / ☾)
```

If OS theme changes and user has **not** saved a preference, site follows OS (`theme.js` listener).

## Language system (home only)

Supported: **vi** (default) · **en** · **zh** (Simplified Chinese) · **ja** (Japanese).

```
<html data-lang-active="vi|en|zh|ja">
  [data-lang="vi|en|zh|ja"] — only active language visible (CSS)
```

Dropdown `#lang-select`: Tiếng Việt / English / 中文 / 日本語.
Storage key `d3k2-lang`: `vi` | `en` | `zh` | `ja`. HTML `lang`: `vi`, `en`, `zh-Hans`, or `ja`.

## Adding a new page

1. Copy header/footer from `privacy-policy.html`.
2. Include in `<head>`: charset, viewport, title, description, canonical, favicon, `theme-init.js`, `site.css`.
3. Include before `</body>`: `theme.js` + `D3K2Theme.init()`.
4. Do **not** include `lang.js` unless page is bilingual.
5. Update nav on **all** pages if adding a new nav item.
6. Update `docs/REQUIREMENTS.md` and README if scope changes.

## Changing legal content

See [CONTENT.md](CONTENT.md). Summary:

1. Edit plain text in `docs/legal-sources/`.
2. Mirror changes in `privacy-policy.html` / `terms-of-service.html`.
3. Update **Last Updated** date in HTML and sources.
4. Re-verify store URLs unchanged unless intentional.

## Accessibility checklist

- [ ] Keyboard can reach theme toggle
- [ ] `focus-visible` outline visible
- [ ] Sufficient contrast in both themes
- [ ] Button has `aria-label` / `aria-pressed` where needed

## Performance

- Logo PNG ~165KB — acceptable; optimize only if LCP becomes an issue (WebP optional later).
- No render-blocking fonts (system stack only).
- Scripts deferred to end of body (except `theme-init.js` in head).

## Git workflow

- Branch: `main` for Pages deploy
- Commit messages: imperative, describe why (e.g. `Update PP for AdMob CMP`)
- Do not commit `references/` if removed locally — use `docs/legal-sources/` instead

## Common pitfalls

| Problem | Cause | Fix |
|---------|-------|-----|
| Flash of wrong theme | Missing `theme-init.js` in head | Add script before CSS |
| Logo invisible in light mode | Missing `.logo-box` | Wrap img in `.logo-box` |
| Assets 404 locally | Opened `file://` | Use `python -m http.server` |
| Jekyll breaks paths | No `.nojekyll` | Keep file at root |

## Future extensions (if needed)

- Custom domain: GitHub Pages settings + `CNAME` file + DNS
- VI legal pages: duplicate HTML or separate files; update home note
- Shared header: only introduce templating if page count grows (>5)
