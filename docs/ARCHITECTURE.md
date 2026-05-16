# Architecture overview

## System context

```mermaid
flowchart TB
  subgraph clients [Clients]
    Browser[Web browser]
    PlayStore[Google Play Console]
    AppStore[App Store Connect]
    Player[Player / reviewer]
  end

  subgraph github [GitHub]
    Repo[d3k2studio.github.io repo]
    Pages[GitHub Pages CDN]
  end

  Browser --> Pages
  Player --> Browser
  PlayStore -->|"Privacy / Terms URL"| Pages
  AppStore -->|"Privacy / Terms URL"| Pages
  Repo -->|"push main"| Pages
```

## Page map

```mermaid
flowchart LR
  Home[index.html]
  PP[privacy-policy.html]
  ToS[terms-of-service.html]

  Home -->|nav| PP
  Home -->|nav| ToS
  ToS -->|"§12 link"| PP
```

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

| Page | CSS | theme-init | theme.js | lang.js |
|------|-----|--------------|----------|---------|
| index.html | yes | yes | yes | yes |
| privacy-policy.html | yes | yes | yes | no |
| terms-of-service.html | yes | yes | yes | no |

## Deployment model

- **Single branch** (`main`) → root folder published as site
- **No build artifact** — HTML in repo is what users receive
- **Cache:** GitHub CDN; hard refresh after deploy if changes not visible

See [DEV_GUIDE.md](DEV_GUIDE.md) for file-level detail.
