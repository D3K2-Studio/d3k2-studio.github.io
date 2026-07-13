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
| AdMob app-ads.txt | https://d3k2-studio.github.io/app-ads.txt |

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
4. Confirm the page loads over **HTTPS**, shows **Exploding Area** and **D3K2 Studio**, lists deletion steps, deleted vs retained data, retention periods, and **d3k2studio@gmail.com**.

### Where to enter the URL in Play Console

Google may label this field slightly differently by locale. Typical path:

1. Open [Google Play Console](https://play.google.com/console).
2. Select **Exploding Area**.
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
