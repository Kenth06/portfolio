/**
 * The "K" monogram contour, in the flare's 514x624 box (viewBox -48 -88, glyph in
 * 0..466 x 0..536). Kept dependency-free so the static fallback does not pull
 * vgpu into the main bundle. Must match the paths in logo-raster.ts.
 */
export const K_VIEWBOX = "-48 -88 514 624";

export const K_PATHS = [
  "M.5 .5H72V536H.5V.5Z",
  "M72 250.5L318 .5H418L178 244.5L465.5 535.5H360L118 294.5L72 340",
] as const;
