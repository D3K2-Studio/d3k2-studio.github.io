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
| Exploding Arena (game page) | https://d3k2-studio.github.io/exploding-area/ |
| Privacy Policy | https://d3k2-studio.github.io/privacy-policy.html |
| Terms of Service | https://d3k2-studio.github.io/terms-of-service.html |
| Account & Data Deletion | https://d3k2-studio.github.io/exploding-area/delete-account.html |
| AdMob app-ads.txt | https://d3k2-studio.github.io/app-ads.txt |
| **Google Play (Android)** | https://play.google.com/store/apps/details?id=com.d3k2studio.explodingarena |
| App Store (iOS) | *Coming soon — add URL when live* |

GitHub repo: **D3K2-Studio/D3K2-Studio.github.io** (org site — served at domain root, not `/repo-name/`).

**Note:** Site URL path `/exploding-area/` is kept for stability; public brand name is **Exploding Arena** (matches Google Play listing).

## Brand strings (must stay consistent)

| String | Value |
|--------|-------|
| Studio | D3K2 Studio |
| Game | Exploding Arena |
| Package ID (Android) | `com.d3k2studio.explodingarena` |
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

- Keep languages roughly equivalent in meaning
- Do not put legal obligations only in Vietnamese — binding text is English PP/ToS
- Game card status: **Available on Google Play**; App Store still “coming soon” until iOS ships
- Google Play badge on home must open the Play listing (`target="_blank"` + `rel="noopener noreferrer"`); game detail link stays on `/exploding-area/` (do not nest `<a>` tags)
- Game card title row: squircle icon (`.card--game-icon`, 64px) **left of** the title — same PNG as the game landing page; do not rearrange existing copy/CTA/badges

## Store badges (Google Play)

Official localized badges live under `assets/images/store/`:

| File | Locale |
|------|--------|
| `google-play-badge-en.png` | English — “Get it on Google Play” |
| `google-play-badge-vi.png` | Vietnamese — “Tải trên Google Play” |
| `google-play-badge-zh.png` | Chinese (zh-CN) |
| `google-play-badge-ja.png` | Japanese |

Source: [Google Play badge assets](https://play.google.com/intl/en_us/badges/). Do not modify artwork (colors, proportions, or wording). CSS: `.store-badge` / `.store-badges` in `assets/css/site.css`.

Used on:

- `index.html` — home game cards
- `exploding-area/index.html` — Install-position CTA in the Play Store–style app header + Platforms section

## Exploding Arena landing (Play Store style header)

`exploding-area/index.html` opens with a compact layout inspired by the [Google Play mobile listing](https://play.google.com/store/apps/details?id=com.d3k2studio.explodingarena):

| Element | Markup / asset | Notes |
|---------|----------------|-------|
| App icon | `assets/images/exploding-arena-icon-512.png` + `.game-app-icon` | Squircle mask (`border-radius: 22.37%`) — Adaptive Icon style |
| Title + studio | `.game-app-meta` | Title **Exploding Arena**, developer line **D3K2 STUDIO** |
| Age rating | `.age-badge` **3+** + localized label | Marketing badge for ages 3 and up (vi/en/zh/ja) |
| Install CTA | `.store-badges--install` | Localized Google Play badge directly under the app header |
| Tagline | `.game-tagline` | Short pitch **below** the Install CTA |
| Page favicon | Same game icon PNG | Header bar logo stays **D3K2 Studio** site-wide |

**Also on home:** `index.html` game cards use the same PNG via `.card--game-icon` (left of title in `.card--game-title`). Home does **not** show the 3+ badge or Play-style meta row.

CSS classes live in `assets/css/site.css` (`.game-app-header`, `.game-app-icon`, `.card--game-icon`, `.age-badge`, `.store-badges--install`).

When replacing the icon art, keep a square PNG (512×512 recommended) and do not commit a pre-rounded raster — the site applies the Play-style mask in CSS.

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
- **Account deletion URL** (Google Play): use `https://d3k2-studio.github.io/exploding-area/delete-account.html` — page must name **Exploding Arena** / **D3K2 Studio**, list deletion steps, and specify deleted vs retained data and retention periods
- Keep URLs **stable**; path changes break store listings
- Website developer / marketing URL may point at `https://d3k2-studio.github.io/exploding-area/`

## Google Play Console — Account deletion URL (setup)

Use this checklist after changes are **pushed to GitHub** and GitHub Pages has published the site.

### URL to submit

```
https://d3k2-studio.github.io/exploding-area/delete-account.html
```

### Before you open Play Console

1. Push all commits to the default branch (`main` / `master`).
2. Wait 1–5 minutes for GitHub Pages to rebuild.
3. Open the URL in a **private/incognito** browser window (no login).
4. Confirm the page loads over **HTTPS**, shows **Exploding Arena** and **D3K2 Studio**, lists deletion steps, deleted vs retained data, retention periods, and **d3k2studio@gmail.com**.

### Where to enter the URL in Play Console

Google may label this field slightly differently by locale. Typical path:

1. Open [Google Play Console](https://play.google.com/console).
2. Select **Exploding Arena**.
3. Left menu: **Policy and programs** → **App content** (or **Policy** → **App content**).
4. Find **Data safety** → **Manage** (or open the Data safety form).
5. In the **Data deletion** / **Account deletion** section:
   - Answer that users **can request account or data deletion** (Play Games–linked data counts when the app syncs user progress online).
   - Paste the URL above into **Delete account URL** / **Web resource for account deletion** / similar field.
6. Ensure answers in the Data safety form **match** what the page states (local delete, email request for cloud/Play Games data, 30 business days processing, etc.).
7. **Save**, then send the app listing / policy changes for **review** if prompted.

Optional second location (if shown separately):

- **App content** → **Account deletion** → **Manage** → enter the same URL.

Official reference: [Understanding Google Play’s app account deletion requirements](https://support.google.com/googleplay/android-developer/answer/13327111).

### Related store URLs (same listing)

| Field | URL |
|-------|-----|
| Privacy Policy | https://d3k2-studio.github.io/privacy-policy.html |
| Terms (if requested) | https://d3k2-studio.github.io/terms-of-service.html |
| Account / data deletion | https://d3k2-studio.github.io/exploding-area/delete-account.html |

### After submission

- [ ] Store listing **Data safety** section shows the deletion link (may take time after review).
- [ ] Process deletion emails sent to **d3k2studio@gmail.com** within the stated **30 business days**.
- [ ] If you change the page path or process, update Play Console and bump **Last Updated** on the HTML.

### In-app discoverability (recommended)

Google expects users to find deletion options without reinstalling the app. Consider adding a link to this URL from in-game **Settings**, **Legal**, or **Support** (future game update — not required for the website repo alone).

## AdMob app-ads.txt

Authorizes Google AdMob as a direct seller for this studio website. Required when the developer website URL in AdMob / store listings points at this GitHub Pages domain.

### File

| Item | Value |
|------|-------|
| Path in repo | `/app-ads.txt` (site root, next to `index.html`) |
| Live URL | https://d3k2-studio.github.io/app-ads.txt |
| Publisher ID | `pub-1197028612870832` |
| Line format | `google.com, pub-1197028612870832, DIRECT, f08c47fec0942fa0` |

`f08c47fec0942fa0` is Google’s fixed certification authority ID — do not change it.

### Checklist after deploy

- [ ] Push to `main`; wait for GitHub Pages rebuild
- [ ] Open https://d3k2-studio.github.io/app-ads.txt in a private window; confirm the publisher line is visible over HTTPS
- [ ] In AdMob: **App** → **App-ads.txt** (or account app-ads tools) → ensure the crawler website matches `https://d3k2-studio.github.io/`
- [ ] Wait for Google crawl status (often 24h–a few days); re-check if status stays pending

### When to edit

- Publisher ID change → update the line in `/app-ads.txt` and this section
- Additional authorized sellers (mediation partners) → append more CSV lines per [IAB app-ads.txt](https://iabtechlab.com/ads-txt/); keep Google’s DIRECT line

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
