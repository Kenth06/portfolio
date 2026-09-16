# AGENTS.md

## Project Overview

This is Kenneth Rios' personal portfolio. It is a Vite + React + TypeScript app
deployed with Cloudflare Workers Static Assets.

The site is intentionally minimal, text-forward, and portfolio-focused. Keep the
experience quiet, fast, and easy to scan.

## Commands

- `pnpm dev` starts the local Vite dev server.
- `pnpm typecheck` runs TypeScript validation.
- `pnpm build` creates the production build in `dist/`.
- `pnpm lint` runs Oxlint.
- `pnpm preview` serves the production build locally.
- `pnpm run deploy` deploys with Wrangler.
- `pnpm cf:typegen` regenerates `cloudflare-env.d.ts` after `wrangler.jsonc`
  changes.

## Architecture

- `src/main.tsx` mounts the React app.
- `src/App.tsx` defines the route table.
- `src/content.ts` is the source of truth for navigation, social links,
  projects, experience, skills, and homepage timeline entries.
- `src/search.ts` builds the local search index from the content data.
- `src/components/` contains shared layout and controls.
- `src/pages/` contains route-level views.
- `src/tailwind.css` owns tokens and the type scale; `src/ascii/` holds the ASCII canvas renderers.
- `public/` stores static assets served at the root path.

## Design Rules

The visual system below is derived from a reverse-engineered design system; keep its
grammar, not any borrowed assets.

- One identity field: oxide (`--field`). It is used as a full surface (home hero,
  inner-page headers) and as the primary action fill. Every other surface is neutral.
  Do not add hues unless they encode something.
- ASCII lives in exactly two places: the generative `AsciiField` on field surfaces and
  `AsciiImage` project imagery. Do not scatter ASCII or fake terminals as ornament.
- Chapters are separated by 1px rules (`Section`), never wrapped in cards. Content
  objects have radius 0 and no shadows; only primary actions are pills.
- Each section uses the composition that fits its content: project rows, experience
  row list, skills spec table, centered closing CTA. Do not introduce uniform card grids.
- Every animation needs a purpose and a reduced-motion path. Canvases pause offscreen
  and render a still frame under reduced motion.
- Support light and dark themes through the CSS custom properties in `src/tailwind.css`.

### Typography

Two families: **Geist** for display and text, **Geist Mono** only for machine-shaped
content (ASCII, indexes, dates, labels, tech lists). No third family.

The type scale lives in the `@theme` block in `src/tailwind.css`, named by role with
line-height and tracking baked in.

- Never add an arbitrary `text-[Npx]`, `leading-[N]`, or `tracking-[N]`. Use a step.
- Display (weight 500, tight tracking): `text-display-sm` 36 · `text-display` 48 ·
  `text-display-lg` 64 · `text-display-xl` 80. Hierarchy comes from size, not weight.
- Headings: `text-title` 30 · `text-heading` 22 · `text-subhead` 18 · `text-wordmark` 16.
- Body and UI: `text-copy-lg` 17 · `text-copy` 15 · `text-ui` 14 · `text-meta` 13 ·
  `text-label` 12. Nothing below 12px. No uppercase eyebrows.
- Cap running text with `max-w-measure` (em-based, not ch).
- `text-wrap: balance` on headings and `pretty` on paragraphs are global.
- Use `tabular-nums` on dates and figures in columns.
- Verify desktop and mobile layouts after visual changes; watch for horizontal overflow.

## Content Rules

- Update portfolio facts in `src/content.ts` first.
- Keep role dates explicit when they cover multiple years.
- Do not mix projects or skills into the Work timeline.
- Keep project detail pages concise: summary, images when available, notes, stack,
  and links.
- Use ASCII text unless an existing file or user-provided content requires
  accents or other characters.

## Cloudflare Notes

- `wrangler.jsonc` uses Workers Static Assets with SPA fallback.
- Production deploys are expected to be handled by the Cloudflare dashboard build
  integration when changes are pushed to `main`.
- If `wrangler.jsonc` changes, run `pnpm cf:typegen` and commit the regenerated
  `cloudflare-env.d.ts`.

## Verification

Before handing off substantial changes, run:

```bash
pnpm typecheck
pnpm lint
pnpm build
```

For UI work, also inspect the app locally with `agent-browser` or the in-app
browser at desktop and mobile widths.
