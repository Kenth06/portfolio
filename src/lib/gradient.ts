/**
 * Deterministic gradient generator for project cards.
 *
 * Each project gets a stable, colorful mesh-style gradient derived purely from
 * a seed string (the project slug). Same seed → same gradient on every render,
 * with zero runtime dependencies. This runs client-side in microseconds; no
 * image input and no build step required.
 */

/** FNV-1a hash → unsigned 32-bit integer. */
function hashSeed(seed: string): number {
  let h = 0x811c9dc5;
  for (let i = 0; i < seed.length; i++) {
    h ^= seed.charCodeAt(i);
    h = Math.imul(h, 0x01000193);
  }
  return h >>> 0;
}

type GradientStyle = {
  /** Two-tone CSS background (works as a fallback and on its own). */
  background: string;
  /** Layered mesh background for a richer, blob-like look. */
  mesh: string;
  /** Representative accent hue, e.g. for a hover ring. */
  hue: number;
};

/**
 * Build a vivid-but-tasteful gradient from a seed.
 *
 * The neutral site palette stays calm; the project cards are where color
 * lives, so these lean saturated while keeping lightness controlled.
 */
export function seededGradient(seed: string): GradientStyle {
  const h = hashSeed(seed);

  const hueA = h % 360;
  const hueB = (hueA + 35 + ((h >>> 8) % 90)) % 360;
  const hueC = (hueA + 200 + ((h >>> 16) % 60)) % 360;
  const sat = 58 + (h % 18); // 58–76%

  const x1 = 12 + (h % 46);
  const y1 = 8 + ((h >>> 3) % 38);
  const x2 = 60 + ((h >>> 6) % 32);
  const y2 = 55 + ((h >>> 9) % 38);

  const cA = `hsl(${hueA} ${sat}% 58%)`;
  const cB = `hsl(${hueB} ${sat}% 48%)`;
  const cC = `hsl(${hueC} ${sat - 8}% 30%)`;
  const base = `hsl(${hueC} ${sat - 14}% 18%)`;

  const background = `linear-gradient(135deg, ${cA} 0%, ${cB} 50%, ${cC} 100%)`;

  const mesh = [
    `radial-gradient(120% 120% at ${x1}% ${y1}%, ${cA} 0%, transparent 55%)`,
    `radial-gradient(110% 110% at ${x2}% ${y2}%, ${cB} 0%, transparent 60%)`,
    `radial-gradient(140% 140% at 50% 120%, ${cC} 0%, transparent 70%)`,
    `linear-gradient(160deg, ${base} 0%, ${cC} 100%)`,
  ].join(", ");

  return { background, mesh, hue: hueA };
}
