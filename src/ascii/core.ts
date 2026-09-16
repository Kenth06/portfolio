/** Density ramp, light to dense. The leading space keeps empty cells empty. */
export const RAMP = " .:-=+*#%@";

export const MONO_FONT = '"Geist Mono", ui-monospace, SFMono-Regular, Menlo, Consolas, monospace';

export type Grid = {
  cols: number;
  rows: number;
  cellW: number;
  cellH: number;
  fontSize: number;
};

/** Size a canvas to its CSS box at device pixel ratio and return a grid of monospace cells. */
export function fitCanvas(canvas: HTMLCanvasElement, fontSize: number): { ctx: CanvasRenderingContext2D; grid: Grid } | null {
  const ctx = canvas.getContext("2d");
  if (!ctx) return null;
  const { width, height } = canvas.getBoundingClientRect();
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  canvas.width = Math.max(1, Math.round(width * dpr));
  canvas.height = Math.max(1, Math.round(height * dpr));
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  ctx.font = `${fontSize}px ${MONO_FONT}`;
  ctx.textBaseline = "top";
  const cellW = ctx.measureText("M").width || fontSize * 0.6;
  const cellH = Math.round(fontSize * 1.2);
  return {
    ctx,
    grid: {
      cols: Math.max(1, Math.floor(width / cellW)),
      rows: Math.max(1, Math.floor(height / cellH)),
      cellW,
      cellH,
      fontSize,
    },
  };
}

/**
 * Draw a grid of densities (0..1) as ASCII. Cells are bucketed by ramp level and
 * each level is drawn as whole row strings, so a frame costs levels x rows
 * fillText calls instead of one per cell.
 */
export function drawDensity(
  ctx: CanvasRenderingContext2D,
  grid: Grid,
  density: Float32Array,
  color: string,
) {
  const { cols, rows, cellW, cellH } = grid;
  const { width, height } = ctx.canvas.getBoundingClientRect();
  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = color;
  const levels = RAMP.length;
  const offsetX = (width - cols * cellW) / 2;
  const offsetY = (height - rows * cellH) / 2;
  const cellLevels = new Uint8Array(cols * rows);
  for (let i = 0; i < cellLevels.length; i++) {
    cellLevels[i] = Math.min(levels - 1, Math.max(0, Math.round(density[i] * (levels - 1))));
  }
  const line: string[] = new Array(cols);

  for (let level = 1; level < levels; level++) {
    ctx.globalAlpha = 0.3 + (0.7 * level) / (levels - 1);
    for (let r = 0; r < rows; r++) {
      let any = false;
      for (let c = 0; c < cols; c++) {
        if (cellLevels[r * cols + c] === level) {
          line[c] = RAMP[level];
          any = true;
        } else {
          line[c] = " ";
        }
      }
      if (any) ctx.fillText(line.join(""), offsetX, offsetY + r * cellH);
    }
  }
  ctx.globalAlpha = 1;
}

/** Deterministic hash noise. */
function hash(x: number, y: number, seed: number) {
  const h = Math.sin(x * 127.1 + y * 311.7 + seed * 74.7) * 43758.5453;
  return h - Math.floor(h);
}

function smooth(t: number) {
  return t * t * (3 - 2 * t);
}

/** 2D value noise in 0..1. */
export function noise(x: number, y: number, seed = 0) {
  const xi = Math.floor(x);
  const yi = Math.floor(y);
  const xf = smooth(x - xi);
  const yf = smooth(y - yi);
  const a = hash(xi, yi, seed);
  const b = hash(xi + 1, yi, seed);
  const c = hash(xi, yi + 1, seed);
  const d = hash(xi + 1, yi + 1, seed);
  return a + (b - a) * xf + (c - a) * yf + (a - b - c + d) * xf * yf;
}

export function fbm(x: number, y: number, seed = 0) {
  return noise(x, y, seed) * 0.6 + noise(x * 2.03, y * 2.03, seed + 1) * 0.28 + noise(x * 4.1, y * 4.1, seed + 2) * 0.12;
}

export function seedFrom(text: string) {
  let h = 0;
  for (let i = 0; i < text.length; i++) h = (h * 31 + text.charCodeAt(i)) % 9973;
  return h;
}

/** Resolve a CSS custom property to a concrete color string. */
export function cssVar(name: string, el: Element = document.documentElement) {
  return getComputedStyle(el).getPropertyValue(name).trim() || "#000";
}
