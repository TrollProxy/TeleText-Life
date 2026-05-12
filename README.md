# TeleText-Life

TeleText-Life is a production-focused Ceefax-style emulator built with React 19 + TypeScript + Vite, with optional desktop delivery through Tauri v2 and mobile/PWA delivery through Capacitor.

## Features

- Authentic 40x25 teletext character grid with retro color palette.
- Page-number navigation (3-digit input + enter), overlay selector, fullscreen-first UI.
- Live clock in header (`300 Sep 11 21:57:32` style).
- 30+ built-in pages across index/sport/news/weather/tv sections.
- Live data sources:
  - BBC RSS headlines
  - Open-Meteo weather
  - Extensible API placeholders for NewsData/API-Sports/Aviationstack
- Zustand state management + TanStack Query auto-refresh.
- Optional CRT scanline/glow effect (`C` key toggles).
- PWA installable + offline cache.

## Quick Start

```bash
npm install
npm run dev
```

## Build Targets

### Web / PWA
```bash
npm run build
npm run preview
```

### Desktop (Tauri v2)
```bash
npm run tauri:dev
npm run tauri:build
```

### Android / iOS (Capacitor)
```bash
npm run build
npm run cap:sync
npm run cap:android
```

## Controls

- Type `0-9` three times: auto-load page.
- `Enter`: manually load typed page.
- Click anywhere: show page selector overlay.
- `C`: toggle CRT filter.

## Data Refresh

- News refreshes every 10 minutes.
- Weather refreshes every 15 minutes.
- Configure API keys in `.env` (see `.env.example`).

## File Structure

- `src/components/TeletextScreen.tsx` — core render + navigation engine.
- `src/data/pageTemplates.ts` — static page DB and generator pattern.
- `src/services/api.ts` — live data adapters.
- `src-tauri/tauri.conf.json` — desktop packaging.
- `capacitor.config.ts` — mobile wrapper config.

## License

MIT
