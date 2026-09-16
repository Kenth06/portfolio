# Design Brief: ASCII Redesign

This brief is based on the Rubik-derived design system in
`Documents/Codex/2026-09-16/task-reverse-engineer-rubik-sachi-dev/design-system`.
It keeps the grammar of that system and does not reuse any Rubik assets.

## 1. Content

- One person: Kenneth Rios, full-stack and AI engineer, based in Panama.
- 6 projects. Nolan, Linear MCP and 2A2 have real images; the extension has an image; the scraper and RAG projects have none.
- 5 roles, from RednBlue (2023) to ASSA (now). The highlights are dense, link-rich prose.
- 6 skill groups, with 8–14 items each.
- Primary action: look at the work. Secondary action: get in touch by email.

## 2. Information Hierarchy

1. Claim: what Kenneth builds (AI systems that hold up in production).
2. Proof: projects, then roles.
3. Detail: stack and skills.
4. Contact.

The name goes in the wordmark and the page title, not in the headline. A headline
that is only a name says nothing about the work.

## 3. Composition (one pattern per section, none repeated back to back)

| Section | Pattern | Why |
|---|---|---|
| Hero | Full-viewport `h-svh` grid: saturated field with a generative ASCII form, plus a white band holding the claim on the left and support copy and actions on the right | The artifact comes first; the field is the identity |
| Work | Large rows: mono category and date, big title, ASCII rendering of the project image. Hovering reveals the real image | Projects are inspectable objects; a uniform card grid is the slop default |
| Experience | Row list: marker, mono period, role @ company, one line of summary | A career is a sequence, and rows show that |
| Stack (About) | Spec table: mono group label, then items inline | Skills are data, not badges |
| CTA | Centered, largest padding tier, email shown in mono with a copy button that really copies | The closing moment gets the most space |

## 4. Identity

- Field color: oxide `oklch(0.47 0.19 33)`, a warm, saturated red-orange far
  from Rubik's blue. White text on it passes AA at body sizes.
- Everything else is neutral. No second hue unless it encodes something.
- On the field, hierarchy uses alpha steps of white: 1.0, 0.7, 0.35.

## 5. Typography

- Geist for display and text. Geist Mono for ASCII art, indexes, dates and labels only.
- Display at weight 500, tracking -0.045em, line-height 1.0. Body 15px at 1.6.
  The display-to-body ratio stays at 3.5:1 or more on the hero.
- Mono is plain case, 12–13px. No uppercase eyebrow pills.

## 6. Radius and Borders

- Primary actions: pill. Content objects (project rows, images): radius 0.
  Sections are divided by 1px rules. No shadows, no glows, no gradients.

## 7. Motion (each item has a purpose and a reduced-motion path)

| Motion | Purpose | Reduced motion |
|---|---|---|
| ASCII field drift (canvas, pauses offscreen and in hidden tabs) | The identity is "systems in motion" | Renders one static frame |
| Pointer bends the field (fine pointer only) | The artifact responds to you | Off |
| ASCII image resolve: characters settle from noise into the image when in view | Shows the image being computed, not decorated | Final frame shown immediately |
| Hover row: ASCII crossfades to the real image (300ms) | Rewards inspection | Instant swap |
| Reveal: 600ms `cubic-bezier(0.23, 1, 0.32, 1)`, 16px rise (transform string), 60ms stagger | Sections arrive without spectacle | 200ms opacity fade only |
| Nav indicator: spring with no bounce, 300ms | Shows which tab is active | Instant |

## 8. Responsive

- The hero is one viewport at every size, and the field keeps its ASCII form on mobile.
  The grid gets coarser so glyphs stay legible.
- Work rows stack as image, then text. Pointer bending is off on touch.
- Gutters 24 / 40 / 56px. Section padding 80 / 96px; CTA 96 / 128px.

## 9. Anti-Slop Checks

- No fake terminal. The mono email line has a real copy button.
- No card grid, no tech-pill clouds, no gradient spotlight.
- ASCII appears only in two places: the hero field and the project images. It is
  never scattered around as ornament.

## 10. Revision Notes (after review)

- No section or item numbering (`01 /`, `02`), no arrow glyphs in buttons or links,
  and no terminal-style brackets (`[+]`, `[k]`). These read as generated ornament.
- Motion tokens are `--ease-out: cubic-bezier(0.23, 1, 0.32, 1)` and
  `--ease-in-out: cubic-bezier(0.77, 0, 0.175, 1)` (mirrored in `src/motion.ts`).
- Tab switches fade in over 150ms with no exit. Press feedback is `scale(0.97)` over 160ms.
  Project notes appear in place, without a height animation.
