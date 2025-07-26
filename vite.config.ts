import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// Replace this with your actual GitHub repo name if you're using GitHub Pages
const repoName = "web";

export default defineConfig(({ mode }) => ({
  base: mode === "production" ? `/web/` : "/", // ensures correct asset paths
  server: {
    host: true, 
    port: 8080,
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
}));
