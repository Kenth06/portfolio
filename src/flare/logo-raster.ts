// Adapted from vercel-labs/vgpu (apps/docs/examples/nextjs-flare), MIT License,
// Copyright (c) 2025 Vercel, Inc. Change: the glyph is Kenneth's "K" monogram
// instead of the Next.js mark. The SVG keeps the original 514x624 box
// (viewBox -48 -88, glyph inside 0..466 x 0..536) so the placement constants in
// pipeline.ts still center it.

import { logoPixelSize } from "./pipeline";

// Outline-only strokes with fading gradients: the rim shader lights edges, so the
// glyph is drawn as a stroked contour. The gradients only soften toward the bottom
// (never to zero) so the lower stem and leg stay legible when the light is up top.
const LOGO_SVG =
  '<svg width="514" height="624" viewBox="-48 -88 514 624" fill="none" ' +
  'xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#c)">' +
  '<path d="M.5 .5H72V536H.5V.5Z" stroke="url(#a)" stroke-width="2" vector-effect="non-scaling-stroke"/>' +
  '<path d="M72 250.5L318 .5H418L178 244.5L465.5 535.5H360L118 294.5L72 340" ' +
  'stroke="url(#b)" stroke-width="2" vector-effect="non-scaling-stroke"/></g><defs>' +
  '<linearGradient id="a" x1="36" y1="0" x2="36" y2="536" gradientUnits="userSpaceOnUse">' +
  '<stop stop-color="#EDEDED"/><stop offset="1" stop-color="#EDEDED" stop-opacity=".18"/></linearGradient>' +
  '<linearGradient id="b" x1="300" y1="0" x2="420" y2="536" gradientUnits="userSpaceOnUse">' +
  '<stop stop-color="#EDEDED"/><stop offset="1" stop-color="#EDEDED" stop-opacity=".22"/></linearGradient>' +
  '<clipPath id="c"><path fill="#fff" d="M0 0h466v536H0z"/></clipPath></defs></svg>';

export async function rasterizeLogo(
  size: number,
  signal?: AbortSignal
): Promise<HTMLCanvasElement> {
  if (signal?.aborted)
    throw new DOMException("Logo rasterization aborted.", "AbortError");
  const [width, height] = logoPixelSize(size);
  const pad = 3;
  const canvas = document.createElement("canvas");
  canvas.width = width + pad * 2;
  canvas.height = height + pad * 2;
  const context = canvas.getContext("2d");
  if (!context) throw new Error("Could not create the logo raster canvas.");
  const image = new Image();
  let abort: (() => void) | undefined;
  const loaded = new Promise<void>((resolve, reject) => {
    image.onload = () => resolve();
    image.onerror = () => reject(new Error("Could not decode the K monogram SVG."));
    abort = () => {
      image.onload = null;
      image.onerror = null;
      image.src = "";
      reject(new DOMException("Logo rasterization aborted.", "AbortError"));
    };
    signal?.addEventListener("abort", abort, { once: true });
  });
  if (signal?.aborted) abort?.();
  else
    image.src = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(
      LOGO_SVG
    )}`;
  try {
    await loaded;
  } finally {
    image.onload = null;
    image.onerror = null;
    if (abort) signal?.removeEventListener("abort", abort);
  }
  if (signal?.aborted)
    throw new DOMException("Logo rasterization aborted.", "AbortError");
  context.imageSmoothingEnabled = true;
  context.imageSmoothingQuality = "high";
  context.drawImage(image, pad, pad, width, height);
  return canvas;
}

