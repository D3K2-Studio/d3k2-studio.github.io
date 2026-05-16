# Content guide — legal & site copy

## Canonical sources

| Document | Plain text (edit first) | Published HTML |
|----------|-------------------------|----------------|
| Privacy Policy | [docs/legal-sources/PP.txt](legal-sources/PP.txt) | [privacy-policy.html](../privacy-policy.html) |
| Terms of Service | [docs/legal-sources/ToS.txt](legal-sources/ToS.txt) | [terms-of-service.html](../terms-of-service.html) |

**Workflow:** edit `.txt` → update matching `.html` → bump **Last Updated** → deploy → update in-game/store if required.

The `references/` folder at repo root was used during initial import; **do not rely on it** after removal. Use `docs/legal-sources/` only.

## Public URLs (store listings)

| Page | URL |
|------|-----|
| Home | https://d3k2-studio.github.io/ |
| Privacy Policy | https://d3k2-studio.github.io/privacy-policy.html |
| Terms of Service | https://d3k2-studio.github.io/terms-of-service.html |

GitHub repo: **D3K2-Studio/D3K2-Studio.github.io** (org site — served at domain root, not `/repo-name/`).

## Brand strings (must stay consistent)

| String | Value |
|--------|-------|
| Studio | D3K2 Studio |
| Game | Exploding Area |
| Email | d3k2studio@gmail.com |
| Copyright | © 2026 D3K2 Studio. All rights reserved. |

## Where email must appear

1. `index.html` — contact block + footer
2. `privacy-policy.html` — §12 Contact
3. `terms-of-service.html` — §15 Contact
4. Footer on all pages

Search repo for `d3k2studio@gmail.com` after any email change.

## Home page copy

Home blocks use `data-lang="vi"`, `data-lang="en"`, and `data-lang="zh"`. When editing:

- Keep both languages roughly equivalent in meaning
- Do not put legal obligations only in Vietnamese — binding text is English PP/ToS

## Legal update checklist

When Privacy Policy or Terms change:

- [ ] Update `docs/legal-sources/*.txt`
- [ ] Update corresponding `.html` (all sections, lists, wording)
- [ ] Set **Last Updated: Month YYYY** on HTML
- [ ] Confirm §12 / §15 contact email still correct
- [ ] ToS §12 still links to `/privacy-policy.html`
- [ ] Push to GitHub; verify live pages
- [ ] Update Google Play / App Store privacy URL if required
- [ ] Update in-game legal screen / version notes if applicable

## Store compliance notes

- URLs must be **public** (no login)
- URLs must use **HTTPS** (GitHub Pages default)
- Privacy Policy URL is mandatory for apps that collect data (ads, analytics, accounts)
- Keep URLs **stable**; path changes break store listings

## Third-party services mentioned in legal text

Current list (keep PP and ToS aligned when adding/removing SDKs):

- Google Play Games / Play Games Services
- Apple Game Center
- Google AdMob
- Google Firebase
- Analytics / crash reporting (generic)
- Cloud save
- Online multiplayer infrastructure

If you add a new SDK (e.g. Unity Ads, Facebook SDK), update **both** PP and ToS and both source `.txt` files.

## Disclaimer

This repository does not provide legal advice. Have a qualified reviewer validate text for your jurisdictions (EU GDPR, COPPA, etc.) before major releases.
