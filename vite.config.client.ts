import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// Client-only configuration for Vercel deployment
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist/spa",
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./client"),
      "@shared": path.resolve(__dirname, "./shared"),
    },
  },
  server: {
    host: "::",
    port: 8080,
  },
});
