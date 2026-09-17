import { cloudflare } from "@cloudflare/vite-plugin";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import wgsl from "@vgpu/wgsl/loader-vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react(), tailwindcss(), wgsl({ minify: true }), cloudflare()],
  build: {
    outDir: "dist"
  }
});
