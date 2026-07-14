# Architecture overview

## System context

```mermaid
flowchart TB
  subgraph clients [Clients]
    Browser[Web browser]
    PlayStore[Google Play Console]
    AppStore[App Store Connect]
    AdMob[Google AdMob crawler]
    Player[Player / reviewer]
  end

  subgraph github [GitHub]
    Repo[D3K2-Studio.github.io repo]
    Pages[GitHub Pages CDN]
  end

  Browser --> Pages
  Player --> Browser
  PlayStore -->|"Privacy / Terms URL"| Pages
  AppStore -->|"Privacy / Terms URL"| Pages
  AdMob -->|"GET /app-ads.txt"| Pages
  Repo -->|"push main"| Pages
```


## Page map

```mermaid
flowchart LR
  Home[index.html]
  Game[exploding-area/index.html]
  PP[privacy-policy.html]
  ToS[terms-of-service.html]
  Delete[exploding-area/delete-account.html]
  AppAds[app-ads.txt]
  Play[Google Play listing]

  Home -->|nav| PP
  Home -->|nav| ToS
  Home -->|game card| Game
  Home -->|badge| Play
  Game -->|badge| Play
  Game -->|legal| Delete
  Game -->|legal| PP
  Game -->|legal| ToS
  ToS -->|"§12 link"| PP
```

Root static files also include **`app-ads.txt`** (AdMob IAB authorization; not linked from nav). See [CONTENT.md](CONTENT.md#admob-app-adstxt).

Play Store listing: `https://play.google.com/store/apps/details?id=com.d3k2studio.explodingarena` (brand **Exploding Arena**; site path remains `/exploding-area/`).

## Runtime (browser)

```mermaid
sequenceDiagram
  participant HTML as HTML page
  participant Init as theme-init.js
  participant CSS as site.css
  participant Theme as theme.js

  HTML->>Init: head load
  Init->>HTML: data-theme from storage or OS
  HTML->>CSS: apply variables
  HTML->>Theme: body load
  Theme->>Theme: bind toggle, sync aria
```

No server-side logic. All state is client `localStorage` or OS preference.

## Asset dependencies

| Page | CSS | theme-init | theme.js | lang.js | Play badge | Game icon |
|------|-----|--------------|----------|---------|------------|-----------|
| index.html | yes | yes | yes | yes | yes | no |
| exploding-area/index.html | yes | yes | yes | yes | yes | yes (app header + favicon) |
| exploding-area/credits.html | yes | yes | yes | yes | no | no |
| exploding-area/delete-account.html | yes | yes | yes | no | no | no |
| privacy-policy.html | yes | yes | yes | no | no | no |
| terms-of-service.html | yes | yes | yes | no | no | no |

Game landing (`exploding-area/index.html`) uses a Play Store–style app header (icon squircle, studio line, **3+** age badge, Install-position store CTA). See [CONTENT.md](CONTENT.md#exploding-arena-landing-play-store-style-header). Site header logo remains `d3k2-studio-logo.png` on every page.

## Deployment model

- **Single branch** (`main`) → root folder published as site
- **No build artifact** — HTML in repo is what users receive
- **Cache:** GitHub CDN; hard refresh after deploy if changes not visible

See [DEV_GUIDE.md](DEV_GUIDE.md) for file-level detail.
