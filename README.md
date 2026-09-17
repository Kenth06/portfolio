# Kenneth Rios — Portfolio

Personal portfolio of Kenneth Rios, full-stack developer and AI engineer based in Panamá.

## Stack

- React 18, TypeScript, and Vite
- Tailwind CSS v4 with oklch design tokens
- Motion (framer-motion)
- Cloudflare Workers Static Assets
- Canvas ASCII field for the page headers
- WebGPU flare in the closing section, built with [vgpu](https://github.com/vercel-labs/vgpu)

## Getting started

Requires Node 22+ and pnpm.

```bash
pnpm install
pnpm dev
```

| Command | What it does |
| --- | --- |
| `pnpm dev` | Local dev server |
| `pnpm build` | Production build into `dist/` |
| `pnpm preview` | Serve the production build |
| `pnpm typecheck` | TypeScript check |
| `pnpm lint` | Oxlint |
| `pnpm run deploy` | Deploy with Wrangler |

## Project structure

```
src/
  content.ts     Projects, experience, skills, and links (source of truth)
  pages/         Home, Projects, About
  components/    Layout and UI pieces
  ascii/         Generative ASCII field (canvas)
  flare/         WebGPU "K" flare (loaded on demand)
  tailwind.css   Tokens and type scale
public/          Images and favicons
```

To update the site content, edit `src/content.ts`.
