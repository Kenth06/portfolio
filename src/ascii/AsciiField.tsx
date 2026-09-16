import { useEffect, useRef } from "react";
import { cssVar, drawDensity, fbm, fitCanvas, type Grid } from "./core";
import { useFontsReady, usePrefersReducedMotion } from "./hooks";

type Props = {
  className?: string;
  /** Glyph size in px. Smaller = finer image, more cells. */
  fontSize?: number;
  seed?: number;
};

const FRAME_MS = 1000 / 30;

/**
 * Generative ASCII field: a few soft masses drift through a domain-warped noise
 * field, banded into contour lines. Purpose: the hero's identity artifact
 * ("systems in motion"). Pauses offscreen and in background tabs; renders a
 * single still frame under reduced motion; fine pointers bend the field.
 */
export function AsciiField({ className, fontSize = 13, seed = 7 }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduced = usePrefersReducedMotion();
  const fontsReady = useFontsReady();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !fontsReady) return;

    let fitted = fitCanvas(canvas, fontSize);
    if (!fitted) return;
    let { ctx, grid } = fitted;
    let density = new Float32Array(grid.cols * grid.rows);

    const pointer = { x: 0.5, y: 0.5, strength: 0, target: 0 };
    let raf = 0;
    let last = 0;
    let visible = true;
    const start = performance.now() - 12000;

    const render = (t: number) => {
      const g: Grid = grid;
      const { width, height } = canvas.getBoundingClientRect();
      const unit = Math.min(width, height) || 1;
      pointer.strength += (pointer.target - pointer.strength) * 0.08;

      // Three masses on slow Lissajous paths, in unit space centered on the canvas.
      const cx = width / unit / 2;
      const cy = height / unit / 2;
      const masses = [
        { x: cx + Math.sin(t * 0.00011) * 0.42, y: cy + Math.cos(t * 0.00013) * 0.18, r: 0.34 },
        { x: cx + Math.cos(t * 0.00009 + 2) * 0.55, y: cy + Math.sin(t * 0.00012 + 1) * 0.24, r: 0.26 },
        { x: cx + Math.sin(t * 0.00007 + 4) * 0.3, y: cy + Math.cos(t * 0.0001 + 3) * 0.3, r: 0.22 },
      ];

      for (let r = 0; r < g.rows; r++) {
        for (let c = 0; c < g.cols; c++) {
          const px = ((c + 0.5) * g.cellW) / unit;
          const py = ((r + 0.5) * g.cellH) / unit;

          // Domain warp gives the masses soft, organic edges.
          const wx = px + (fbm(px * 1.6 + t * 0.00004, py * 1.6, seed) - 0.5) * 0.45;
          const wy = py + (fbm(px * 1.6, py * 1.6 - t * 0.00003, seed + 9) - 0.5) * 0.45;

          let v = 0;
          for (const m of masses) {
            const dx = wx - m.x;
            const dy = wy - m.y;
            v += Math.exp(-(dx * dx + dy * dy) / (m.r * m.r));
          }
          if (pointer.strength > 0.001) {
            const dx = px - pointer.x * (width / unit);
            const dy = py - pointer.y * (height / unit);
            v += pointer.strength * 0.9 * Math.exp(-(dx * dx + dy * dy) / 0.02);
          }

          // Soft elliptical falloff so the form floats inside the field instead of filling a box.
          const nx = (c / g.cols - 0.5) * 2;
          const ny = (r / g.rows - 0.5) * 2;
          const edge = Math.max(0, 1 - Math.pow(nx * nx * 0.9 + ny * ny * 0.75, 2));
          v *= edge;

          // Below the threshold the field stays empty: negative space is part of the form.
          if (v < 0.32) {
            density[r * g.cols + c] = 0;
            continue;
          }
          // Contour banding inside the masses turns them into drawn topography.
          const band = 0.55 + 0.45 * Math.sin(v * 14 - t * 0.0007);
          density[r * g.cols + c] = Math.min(1, (v - 0.32) * 1.6) * band + 0.08;
        }
      }
      drawDensity(ctx, g, density, cssVar("--field-ink"));
    };

    const loop = (now: number) => {
      raf = requestAnimationFrame(loop);
      if (!visible || document.hidden || now - last < FRAME_MS) return;
      last = now;
      render(now - start);
    };

    if (reduced) {
      render(24000);
    } else {
      raf = requestAnimationFrame(loop);
    }

    const resize = new ResizeObserver(() => {
      fitted = fitCanvas(canvas, fontSize);
      if (!fitted) return;
      ({ ctx, grid } = fitted);
      density = new Float32Array(grid.cols * grid.rows);
      if (reduced) render(24000);
    });
    resize.observe(canvas);

    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
    });
    io.observe(canvas);

    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const host = canvas.parentElement;
    const onMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointer.x = (e.clientX - rect.left) / rect.width;
      pointer.y = (e.clientY - rect.top) / rect.height;
      pointer.target = 1;
    };
    const onLeave = () => {
      pointer.target = 0;
    };
    if (finePointer && !reduced && host) {
      host.addEventListener("pointermove", onMove);
      host.addEventListener("pointerleave", onLeave);
    }

    return () => {
      cancelAnimationFrame(raf);
      resize.disconnect();
      io.disconnect();
      host?.removeEventListener("pointermove", onMove);
      host?.removeEventListener("pointerleave", onLeave);
    };
  }, [fontSize, seed, reduced, fontsReady]);

  return <canvas ref={canvasRef} aria-hidden className={className} />;
}
