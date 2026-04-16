# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**LastSeat** — last-minute event ticketing platform. Users buy unsold tickets 1–7 days before sports, music, theatre, and comedy events near them. Currently a frontend-only prototype with mocked data; backend (Supabase + Stripe) comes in later steps.

Tech stack: **Next.js 16** (App Router) · **TypeScript** · **Tailwind CSS v4** · **Lucide React** · no backend yet.

## Commands

All commands run from `frontend/`:

```bash
npm run dev      # dev server at http://localhost:3000
npm run build    # production build (also runs TypeScript check)
npm run lint     # ESLint
npm run start    # serve production build
```

## ⚠️ This is Next.js 16 — Read Before Writing Code

This project uses **Next.js 16**, which has breaking changes from earlier versions. Before modifying any Next.js-specific code, read the relevant guide in `frontend/node_modules/next/dist/docs/`.

Key differences to be aware of:

- **`params` is now a Promise** in pages and layouts. Always `await params`:
  ```tsx
  export default async function Page({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
  }
  ```
- **Server Components are the default.** Pages and layouts are Server Components unless you add `"use client"`. Add `"use client"` only when you need state, event handlers, lifecycle hooks, or browser APIs.
- **Route Handlers** (`app/api/route.ts`) replace the old `pages/api/` pattern. A `route.ts` file cannot coexist at the same path level as a `page.ts`.
- **For instant client-side navigation** on dynamic routes, export `unstable_instant` from the route and wrap uncached data in `<Suspense>`. See `node_modules/next/dist/docs/01-app/02-guides/instant-navigation.md`.
- **Tailwind CSS v4** is used — configuration is in `postcss.config.mjs`, not `tailwind.config.js`. The v4 API differs from v3.

## Architecture

```
webinar-project/          ← repo root (planning docs live here)
├── prd.md                ← full product requirements
├── design_system.md      ← design system spec (source of truth for UI)
├── design_tokens.json    ← structured design tokens
└── frontend/             ← Next.js application
    └── src/
        ├── app/          ← App Router pages (file-system routing)
        ├── components/   ← shared UI components
        └── lib/
            └── mockData.ts  ← all mocked events and tickets data
```

### Design System

All visual decisions (colors, typography, shadows, spacing, component styles) are defined in `design_system.md` and `design_tokens.json` at the repo root. CSS custom properties are declared in `frontend/src/app/globals.css` — use these variables, never hardcode values or reach for Tailwind color defaults.

Key CSS classes defined in `globals.css`: `.btn`, `.btn-primary`, `.btn-secondary`, `.btn-ghost`, `.btn-dark`, `.card`, `.input`, `.badge`, `.filter-chip`, `.dot-grid`, `.font-display`, `.font-mono`.

### Styling Approach

Styling uses **inline `style` props with CSS variables**, not Tailwind utility classes, for design-system-controlled properties (colors, shadows, borders, border-radius). Tailwind is used for layout helpers (`flex`, `grid`, `hidden md:flex`, etc.). This is intentional — don't refactor inline styles to Tailwind color classes.

### Mocked Data

`src/lib/mockData.ts` exports `mockEvents` and `mockTickets` arrays, plus `CATEGORY_COLORS` and `CATEGORY_TEXT` maps keyed by `Category` type. All pages consume this directly — there are no API calls yet.

### Current Pages

| Route | File | Notes |
|---|---|---|
| `/` | `app/page.tsx` | Landing, Server Component |
| `/events` | `app/events/page.tsx` | Client Component (filter state) |
| `/events/[id]` | `app/events/[id]/page.tsx` | Client Component (quantity/ticket state) |
| `/sign-in`, `/sign-up` | `app/sign-*/page.tsx` | Client Components (form state) |
| `/checkout` | `app/checkout/page.tsx` | Client + Suspense (uses `useSearchParams`) |
| `/confirmation` | `app/confirmation/page.tsx` | Server Component |
| `/tickets`, `/favorites` | respective pages | Server Components |
| `/profile` | `app/profile/page.tsx` | Client Component (preference state) |
