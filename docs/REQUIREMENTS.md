# Requirements — D3K2 Studio website

## 1. Purpose

| ID | Requirement | Priority |
|----|-------------|----------|
| R1 | Publish **Privacy Policy** and **Terms of Service** at stable public HTTPS URLs | Must |
| R2 | Support **Google Play** and **App Store** policy URL fields | Must |
| R3 | Present **D3K2 Studio** brand and game **Exploding Area** | Should |
| R4 | Provide public **contact email** | Must |

## 2. Audience

- App store reviewers
- Players seeking legal / support information
- Studio (internal reference for store URLs)

## 3. Functional requirements

### 3.1 Pages

| Page | Language | Content source |
|------|----------|----------------|
| Home (`index.html`) | Vietnamese + English + Chinese (cycle toggle) | Hand-written marketing copy |
| Privacy Policy | English only | `docs/legal-sources/PP.txt` → `privacy-policy.html` |
| Terms of Service | English only | `docs/legal-sources/ToS.txt` → `terms-of-service.html` |

### 3.2 Navigation

- Global header: Home, Privacy, Terms
- Global footer: copyright, legal links, email
- ToS §12 links to Privacy Policy

### 3.3 Theme

| ID | Requirement |
|----|-------------|
| T1 | **Dark** and **light** themes |
| T2 | Default follows `prefers-color-scheme` when user has not chosen |
| T3 | User choice persisted in `localStorage` key `d3k2-theme` |
| T4 | Theme toggle on all pages |
| T5 | **Light mode:** logo inside `.logo-box` with **black background** (`#000`) so white logo remains visible |

### 3.4 Language (home only)

| ID | Requirement |
|----|-------------|
| L1 | Cycle **VI → EN → 中文** on home page |
| L2 | Persist choice in `localStorage` key `d3k2-lang` (`vi` \| `en` \| `zh`) |
| L3 | Default language: **Vietnamese** |
| L4 | Note on home: legal documents are in English (all UI langs) |

### 3.5 Contact

- Email: **d3k2studio@gmail.com**
- Must appear: home contact block, footer (all pages), PP §12, ToS §15
- Use `mailto:` links

## 4. Non-functional requirements

| ID | Requirement |
|----|-------------|
| N1 | Static hosting on **GitHub Pages** (no backend) |
| N2 | Mobile-responsive layout |
| N3 | Accessible controls (`aria-label`, `aria-pressed`, focus styles) |
| N4 | SEO: `title`, `meta description`, `canonical` per page |
| N5 | No build toolchain required for deploy |
| N6 | Fast load: minimal JS, no external CDN dependencies |
| N7 | Print-friendly legal pages (hide chrome in print CSS) |

## 5. Constraints

- **Do not** commit secrets, API keys, or private credentials
- **Do not** enable Jekyll processing of unknown plugins; `.nojekyll` at repo root
- Legal wording changes should be reviewed before publish (not automated legal advice)
- Keep URLs stable after store submission; changing paths requires updating store listings
- Absolute asset paths (`/assets/...`) assume site is served from **domain root** (`https://d3k2-studio.github.io/`)

## 6. Out of scope (current version)

- Custom domain / DNS setup
- Vietnamese translation of PP / ToS
- Blog, press kit, download links
- Analytics on website
- CI/CD pipelines
- Server-side forms or contact API

## 7. Acceptance criteria (release checklist)

- [ ] All three pages load on GitHub Pages over HTTPS
- [ ] Theme toggle works; preference survives reload
- [ ] Light mode: logo visible on black `.logo-box`
- [ ] Home VI/EN toggle works
- [ ] PP has 12 sections; ToS has 15 sections
- [ ] Email correct everywhere
- [ ] Store URLs pasted into Play Console / App Store Connect

## 8. Constants (single source of truth)

Update these in **all** places when they change (see [CONTENT.md](CONTENT.md)):

| Constant | Current value |
|----------|---------------|
| Studio name | D3K2 Studio |
| Game name | Exploding Area |
| Contact email | d3k2studio@gmail.com |
| Copyright year | 2026 |
| Legal last updated | May 2026 |
| Site base URL | https://d3k2-studio.github.io |
