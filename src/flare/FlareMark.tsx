import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { K_PATHS, K_VIEWBOX } from "./k-glyph";

type Mode = "idle" | "gpu" | "fallback";

/**
 * The closing "K" rendered as a rim-lit volumetric flare (WebGPU via vgpu).
 * The renderer and vgpu are loaded only when the section nears the viewport,
 * so they never cost the first paint. Without WebGPU, or if init fails, a
 * static outline of the same glyph stays in place. Reduced motion renders a
 * settled still frame instead of the animated light.
 */
export function FlareMark({ className = "" }: { className?: string }) {
  const hostRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduced = useReducedMotion() ?? false;
  const [mode, setMode] = useState<Mode>("idle");

  useEffect(() => {
    const host = hostRef.current;
    const canvas = canvasRef.current;
    if (!host || !canvas) return;
    if (!("gpu" in navigator)) {
      setMode("fallback");
      return;
    }

    let disposed = false;
    let dispose: (() => void) | undefined;

    const start = async () => {
      try {
        const { createRenderer } = await import("./renderer");
        if (disposed) return;
        const renderer = createRenderer({ canvas, still: reduced });
        dispose = () => renderer.dispose();
        await renderer.ready;
        if (!disposed) setMode("gpu");
      } catch {
        if (!disposed) setMode("fallback");
      }
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        io.disconnect();
        void start();
      },
      { rootMargin: "300px 0px" },
    );
    io.observe(host);

    return () => {
      disposed = true;
      io.disconnect();
      try {
        dispose?.();
      } catch {
        // Teardown of a failed renderer is best effort.
      }
    };
  }, [reduced]);

  return (
    <div ref={hostRef} className={`relative overflow-hidden ${className}`}>
      <canvas
        ref={canvasRef}
        aria-hidden
        className={`absolute inset-0 block h-full w-full transition-opacity duration-700 ease-out ${mode === "gpu" ? "opacity-100" : "opacity-0"}`}
      />
      {mode !== "gpu" && (
        <svg
          aria-hidden
          viewBox={K_VIEWBOX}
          className="absolute left-1/2 top-1/2 h-[62%] -translate-x-1/2 -translate-y-1/2 text-field-ink opacity-50"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          {K_PATHS.map((d) => (
            <path key={d} d={d} vectorEffect="non-scaling-stroke" />
          ))}
        </svg>
      )}
    </div>
  );
}
