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
- `src/styles.css` owns the visual system and responsive behavior.
- `public/` stores static assets served at the root path.

## Design Rules

- Preserve the narrow editorial shell: centered body, compact header, sparse
  typography, and restrained link styling.
- The Work section on the homepage is an employment timeline only.
- Projects on the homepage use a showcase row pattern: thumbnail, title, category,
  and date. Project screenshots belong on detail pages unless explicitly intended
  as generated homepage thumbnails.
- Keep cards and images simple: small radius, stable aspect ratios, no decorative
  gradients or oversized marketing sections.
- Support light and dark themes through the CSS custom properties in
  `src/styles.css`.

### Typography

Two faces, paired for contrast: **Instrument Serif** for display (page titles,
card titles, the CTA) and **IBM Plex Sans** for everything else. Do not add a
third family — labels and eyebrows separate themselves with size, tracking and
color, not a different face.

The type scale lives in the `@theme` block in `src/tailwind.css`. Steps are named
by role and carry their own line-height and letter-spacing, so a role is one
class, not three.

- Never add an arbitrary `text-[Npx]`, `leading-[N]`, or `tracking-[N]`. Use a
  step, or add a step to the scale if a genuinely new role appears.
- Display (serif page titles, CTA): `text-title` 36 · `text-display-sm` 44 ·
  `text-display` 56 · `text-display-md` 64 · `text-display-lg` 72 ·
  `text-display-xl` 88.
- Leads: `text-lead` 22 · `text-lead-lg` 26. Headings: `text-heading` 24 ·
  `text-subhead` 20 · `text-wordmark` 18 (nav only).
- Body and UI: `text-copy-lg` 18 · `text-copy` 17 · `text-copy-sm` 15 ·
  `text-ui` 14 · `text-meta` 13.
- Smallest: `text-eyebrow` 12 uppercase (tracking baked in, always pair with
  `uppercase`) · `text-label` 12 natural case. Nothing below 12px in real UI.
- Cap running text with `max-w-measure` (60-75 characters). Never use `ch` for
  this: the digit zero is much wider than an average prose character, so a
  `66ch` cap renders about 86 characters. The token is `32em`, calibrated to
  IBM Plex Sans, and gives 57-70 characters at every step. Re-measure if the
  sans changes.
- `text-wrap: balance` on headings, `pretty` on paragraphs, and
  `overflow-wrap: break-word` are applied globally in the base layer; do not
  repeat them per component.
- Use `tabular-nums` on any figure that sits in a column or changes.
- Write copy in natural case with a typographic apostrophe (`&rsquo;` in JSX,
  the literal character in `src/content.ts`); apply casing with
  `text-transform`.
- Verify desktop and mobile layouts after visual changes. Watch especially for
  horizontal overflow, cramped nav links, and project title wrapping.

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
