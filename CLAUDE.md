# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server (Vite, localhost:5173)
npm run build     # Production build
npm run lint      # ESLint
npm run preview   # Preview production build locally
```

There are no tests configured in this project.

## Architecture

This is a corporate marketing website for **Logigreen Global Logistics** — a logistics and renewable energy company. Built with Vite + React + TypeScript + Tailwind CSS + shadcn/ui.

### Routing (`src/App.tsx`)

All routes are defined in a flat `<Routes>` block. New routes must be added **above** the `"*"` catch-all:

| Path | Page |
|---|---|
| `/` | `Index` — homepage with stacked sections |
| `/services` | `Services` |
| `/renewable-energy` | `RenewableEnergy` |
| `/solar-energy`, `/wind-power`, `/hydro-power`, `/ev-solutions` | Energy detail pages |
| `/about`, `/contact` | Static pages |

### Component layers

- **`src/pages/`** — Full page components. Each wraps `<Navbar>` + `<Footer>` around content sections.
- **`src/components/sections/`** — Homepage section components (`HeroSection`, `ServicesSection`, `RenewableEnergySection`, etc.), each independently rendered within `Index.tsx`.
- **`src/components/energy/`** — `EnergySolutionPage` is a shared template used by all four energy detail pages (Solar, Wind, Hydro, EV). Each page just constructs a data object and passes it as props — no layout code lives in the page files themselves.
- **`src/components/layout/`** — `Navbar` and `Footer`.
- **`src/components/ui/`** — shadcn/ui primitives. Do not edit these; add new ones via the shadcn CLI.
- **`src/hooks/`** — `useInView` (IntersectionObserver-based scroll animation trigger) and `useMobile` (responsive breakpoint detection).
- **`src/lib/utils.ts`** — `cn()` helper (clsx + tailwind-merge).

### Navigation behavior

"Services" and "Renewable Energy" nav items do **not** navigate to dedicated routes — they scroll to `#services` and `#renewable-energy` anchor divs on the homepage. The `Navbar` handles this with `handleNavigation`: if already on `/`, it scrolls directly; if on another page, it navigates to `/` first and then scrolls via `setTimeout`.

### Design system

CSS custom properties (HSL) are defined in `src/index.css`. All colors must use HSL format. The primary brand color is a deep corporate blue (`--primary`), with Tailwind `green-600` / `emerald-600` used directly in components for the green accent (the inline Tailwind classes take precedence for the green theme).

### Adding a new energy solution page

1. Create `src/pages/MyEnergy.tsx` — import `EnergySolutionPage`, construct the data object (title, subtitle, description, icon, gradient, heroImage, features, benefits, caseStudy, stats), and render `<EnergySolutionPage {...data} />`.
2. Add a `<Route path="/my-energy" element={<MyEnergy />} />` in `src/App.tsx` above the catch-all.
3. Add the image asset to `src/assets/` and import it in the page file.

### Path alias

`@/` maps to `src/` (configured in `tsconfig.app.json` and `vite.config.ts`).
