<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# NuTeam

Static landing page for NuTeam ("diseñamos agentes de IA"). Next.js 16.3.1 App Router + React 19 + Tailwind CSS v4. No tests, no CI.

## Commands

- Package manager is **pnpm** (`pnpm@9.13.0`, `pnpm-lock.yaml`). Use `pnpm`, not npm/yarn — README's npm instructions are stale boilerplate.
- `pnpm dev` — dev server (writes the agent-rules block above back into this file on start).
- `pnpm build` — production build.
- `pnpm lint` — ESLint (flat config, `eslint.config.mjs`).
- No test or typecheck script exists. To typecheck: `pnpm exec tsc --noEmit`.

## Layout

- App Router. Entrypoints: `app/layout.tsx` (root layout + metadata), `app/page.tsx` (landing page). Global styles in `app/globals.css` (single `@import "tailwindcss"`; no `tailwind.config`, v4 is config-less via `@tailwindcss/postcss`).
- Path alias `@/*` maps to the **repo root** (`tsconfig.json`), so imports are `@/components/...`, not `@/src/...`.
- Page sections live in `components/landing/`. Files use **snake_case** (`contact_form.tsx`, `use_cases.tsx`). Keep to that convention for new sections.

## Conventions

- All UI copy is **Spanish** (e.g. "Soluciones", "Casos de uso"). Write new copy in Spanish.
- Components are server components by default; only add `"use client"` when state/events are needed (see `navbar.tsx`).
- Dark theme: black backgrounds, white text, `backdrop-blur`, rounded-full white CTA buttons. Section anchors: `#soluciones`, `#casos-de-uso`, `#como-funciona`, `#contacto`.
- Root layout uses the typed-routes `LayoutProps<"/">` — Next 16 feature; check `node_modules/next/dist/docs/` before touching it.
