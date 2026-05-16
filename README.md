# D3K2 Studio — GitHub Pages

Official website for **D3K2 Studio** and **Exploding Area** (Android / iOS). Hosts Privacy Policy and Terms of Service for app store listings.

**Live URL:** https://d3k2-studio.github.io/

## Pages

| Page | Path | Purpose |
|------|------|---------|
| Home | `/` | Studio + game intro (VI / EN / 中文 / 日本語) |
| Privacy Policy | `/privacy-policy.html` | Store compliance (English) |
| Terms of Service | `/terms-of-service.html` | Store compliance (English) |

## Store listing URLs

Use these in Google Play Console and App Store Connect:

- Privacy Policy: `https://d3k2-studio.github.io/privacy-policy.html`
- Terms of Service: `https://d3k2-studio.github.io/terms-of-service.html`

## Deploy (GitHub Pages)

1. Push this repo to GitHub as **`D3K2-Studio/D3K2-Studio.github.io`** (organization site — repo name must match the org).
2. **Settings → Pages → Build and deployment**
   - Source: **Deploy from a branch**
   - Branch: **`main`** (or your default branch)
   - Folder: **`/ (root)`**
3. Wait 1–5 minutes. Site is served at **https://d3k2-studio.github.io/** (root — not `/repo-name/`).

If you renamed the repo on GitHub, update your local remote:

```bash
git remote set-url origin https://github.com/D3K2-Studio/D3K2-Studio.github.io.git
```

No build step. Static HTML/CSS/JS only.

## Local preview

Absolute paths (`/assets/...`) require a local server:

```bash
# Python
python -m http.server 8080

# Node (npx)
npx serve .
```

Open http://localhost:8080/

## Documentation

| Doc | Description |
|-----|-------------|
| [docs/REQUIREMENTS.md](docs/REQUIREMENTS.md) | Product & functional requirements |
| [docs/DEV_GUIDE.md](docs/DEV_GUIDE.md) | Dev style, constraints, how to change theme/content |
| [docs/CONTENT.md](docs/CONTENT.md) | Legal content workflow & contact info |
| [docs/legal-sources/](docs/legal-sources/) | Plain-text copies of PP / ToS for diffing |

## Contact

**d3k2studio@gmail.com**

## License

Content and assets © 2026 D3K2 Studio. All rights reserved.
