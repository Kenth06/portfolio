import { useEffect, useRef } from "react";
import { cssVar, drawDensity, fbm, fitCanvas, seedFrom } from "./core";
import { useFontsReady, usePrefersReducedMotion, useThemeVersion } from "./hooks";

type Props = {
  /** Image to translate into ASCII. Without one, a deterministic field seeded by `seed` is drawn. */
  src?: string;
  seed: string;
  alt: string;
  fontSize?: number;
  /** Crossfade to the real image when an ancestor `.group` is hovered or focused. */
  revealOnHover?: boolean;
  className?: string;
};

const RESOLVE_MS = 1100;

/** Sample an image into a cols x rows luminance grid (object-fit: cover), contrast-stretched to 0..1. */
function sampleImage(img: HTMLImageElement, cols: number, rows: number, cellAspect: number) {
  const canvas = document.createElement("canvas");
  canvas.width = cols;
  canvas.height = rows;
  const ctx = canvas.getContext("2d", { willReadFrequently: true });
  const lum = new Float32Array(cols * rows);
  if (!ctx) return lum;

  // Each cell is taller than wide, so the sampled region must be stretched to match.
  const targetAspect = (cols * cellAspect) / rows;
  const imgAspect = img.naturalWidth / img.naturalHeight;
  let sw = img.naturalWidth;
  let sh = img.naturalHeight;
  if (imgAspect > targetAspect) sw = sh * targetAspect;
  else sh = sw / targetAspect;
  ctx.drawImage(img, (img.naturalWidth - sw) / 2, (img.naturalHeight - sh) / 2, sw, sh, 0, 0, cols, rows);

  const data = ctx.getImageData(0, 0, cols, rows).data;
  let min = 1;
  let max = 0;
  for (let i = 0; i < lum.length; i++) {
    const o = i * 4;
    const l = (0.2126 * data[o] + 0.7152 * data[o + 1] + 0.0722 * data[o + 2]) / 255;
    lum[i] = l;
    if (l < min) min = l;
    if (l > max) max = l;
  }
  const range = Math.max(0.05, max - min);
  for (let i = 0; i < lum.length; i++) lum[i] = (lum[i] - min) / range;
  return lum;
}

/**
 * Project imagery rendered as ASCII. On first view the glyphs settle out of
 * noise into the picture (the image is computed, not decorated). Under reduced
 * motion the final frame is drawn immediately.
 */
export function AsciiImage({ src, seed, alt, fontSize = 9, revealOnHover = false, className = "" }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduced = usePrefersReducedMotion();
  const themeVersion = useThemeVersion();
  const fontsReady = useFontsReady();
  const resolvedRef = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !fontsReady) return;
    let cancelled = false;
    let raf = 0;
    let lum: Float32Array | null = null;
    const numericSeed = seedFrom(seed);

    const img = new Image();
    const loaded = src
      ? new Promise<HTMLImageElement | null>((resolve) => {
          img.onload = () => resolve(img);
          img.onerror = () => resolve(null);
          img.src = src;
        })
      : Promise.resolve(null);

    const build = (source: HTMLImageElement | null) => {
      const fitted = fitCanvas(canvas, fontSize);
      if (!fitted) return null;
      const { ctx, grid } = fitted;
      const dark = document.documentElement.classList.contains("dark");
      if (source) {
        lum = sampleImage(source, grid.cols, grid.rows, grid.cellW / grid.cellH);
      } else {
        lum = new Float32Array(grid.cols * grid.rows);
        for (let r = 0; r < grid.rows; r++) {
          for (let c = 0; c < grid.cols; c++) {
            const x = (c * grid.cellW) / 60;
            const y = (r * grid.cellH) / 60;
            const v = fbm(x, y, numericSeed);
            lum[r * grid.cols + c] = 0.5 + 0.5 * Math.sin(v * 22);
          }
        }
      }
      // Light theme: dark pixels become dense glyphs. Dark theme: bright pixels do.
      const target = new Float32Array(lum.length);
      for (let i = 0; i < lum.length; i++) {
        // Gamma pushes midtones toward empty so only real structure carries glyphs.
        const v = Math.pow(dark ? lum[i] : 1 - lum[i], 1.9);
        target[i] = v < 0.18 ? 0 : v;
      }
      return { ctx, grid, target };
    };

    const run = (source: HTMLImageElement | null) => {
      const built = build(source);
      if (!built || cancelled) return;
      const { ctx, grid, target } = built;
      const color = cssVar("--text");

      if (reduced || resolvedRef.current) {
        drawDensity(ctx, grid, target, color);
        return;
      }

      const settleAt = new Float32Array(target.length);
      for (let i = 0; i < settleAt.length; i++) {
        const col = i % grid.cols;
        settleAt[i] = (col / grid.cols) * 0.55 + Math.random() * 0.35;
      }
      const frame = new Float32Array(target.length);
      const io = new IntersectionObserver(
        ([entry]) => {
          if (!entry.isIntersecting) return;
          io.disconnect();
          const start = performance.now();
          const tick = (now: number) => {
            if (cancelled) return;
            const p = Math.min(1, (now - start) / RESOLVE_MS);
            for (let i = 0; i < frame.length; i++) {
              frame[i] = p >= settleAt[i] ? target[i] : target[i] > 0 || Math.random() < 0.2 ? Math.random() : 0;
            }
            drawDensity(ctx, grid, frame, color);
            if (p < 1) raf = requestAnimationFrame(tick);
            else resolvedRef.current = true;
          };
          raf = requestAnimationFrame(tick);
        },
        { rootMargin: "0px 0px -10% 0px" },
      );
      io.observe(canvas);
      cleanupIo = () => io.disconnect();
    };

    let cleanupIo = () => {};
    let source: HTMLImageElement | null = null;
    loaded.then((result) => {
      source = result;
      if (!cancelled) run(result);
    });

    const resize = new ResizeObserver(() => {
      if (!lum || cancelled) return;
      cancelAnimationFrame(raf);
      cleanupIo();
      run(source);
    });
    resize.observe(canvas);

    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
      cleanupIo();
      resize.disconnect();
    };
  }, [src, seed, fontSize, reduced, themeVersion, fontsReady]);

  return (
    <div className={`relative overflow-hidden bg-surface ${className}`}>
      <canvas ref={canvasRef} role="img" aria-label={`${alt}, rendered as ASCII`} className="absolute inset-0 h-full w-full" />
      {revealOnHover && src && (
        <img
          src={src}
          alt=""
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-200 ease-[ease] group-hover:opacity-100 group-focus-within:opacity-100 motion-reduce:transition-none"
        />
      )}
    </div>
  );
}
