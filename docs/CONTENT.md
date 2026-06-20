# Content guide — legal & site copy

## Canonical sources

| Document | Plain text (edit first) | Published HTML |
|----------|-------------------------|----------------|
| Privacy Policy | [docs/legal-sources/PP.txt](legal-sources/PP.txt) | [privacy-policy.html](../privacy-policy.html) |
| Terms of Service | [docs/legal-sources/ToS.txt](legal-sources/ToS.txt) | [terms-of-service.html](../terms-of-service.html) |
| Account & Data Deletion | [docs/legal-sources/AccountDeletion.txt](legal-sources/AccountDeletion.txt) | [exploding-area/delete-account.html](../exploding-area/delete-account.html) |

**Workflow:** edit `.txt` → update matching `.html` → bump **Last Updated** → deploy → update in-game/store if required.

The `references/` folder at repo root was used during initial import; **do not rely on it** after removal. Use `docs/legal-sources/` only.

## Public URLs (store listings)

| Page | URL |
|------|-----|
| Home | https://d3k2-studio.github.io/ |
| Exploding Area (game) | https://d3k2-studio.github.io/exploding-area/ |
| Privacy Policy | https://d3k2-studio.github.io/privacy-policy.html |
| Terms of Service | https://d3k2-studio.github.io/terms-of-service.html |
| Account & Data Deletion | https://d3k2-studio.github.io/exploding-area/delete-account.html |

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
4. `exploding-area/delete-account.html` — §5 Contact
5. Footer on all pages

Search repo for `d3k2studio@gmail.com` after any email change.

## Home page copy

Home blocks use `data-lang="vi"`, `data-lang="en"`, `data-lang="zh"`, and `data-lang="ja"`. When editing:

- Keep both languages roughly equivalent in meaning
- Do not put legal obligations only in Vietnamese — binding text is English PP/ToS

## Legal update checklist

When Privacy Policy, Terms, or Account Deletion page change:

- [ ] Update matching file in `docs/legal-sources/` (`PP.txt`, `ToS.txt`, or `AccountDeletion.txt`)
- [ ] Update corresponding `.html` (all sections, lists, wording)
- [ ] Set **Last Updated: Month YYYY** on HTML
- [ ] Confirm contact email still correct (PP §12, ToS §15, delete-account §5)
- [ ] ToS §12 still links to `/privacy-policy.html`
- [ ] `exploding-area/index.html` Legal section still links to `/exploding-area/delete-account.html`
- [ ] Push to GitHub; verify live pages
- [ ] Update Google Play / App Store privacy URL if required
- [ ] Update Google Play **Account deletion URL** if path or wording requirements change
- [ ] Update in-game legal screen / version notes if applicable

## Store compliance notes

- URLs must be **public** (no login)
- URLs must use **HTTPS** (GitHub Pages default)
- Privacy Policy URL is mandatory for apps that collect data (ads, analytics, accounts)
- **Account deletion URL** (Google Play): use `https://d3k2-studio.github.io/exploding-area/delete-account.html` — page must name **Exploding Area** / **D3K2 Studio**, list deletion steps, and specify deleted vs retained data and retention periods
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
