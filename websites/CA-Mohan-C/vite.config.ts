import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8091,
    allowedHosts: ["camohanc.in", "www.camohanc.in"],
    proxy: { '/api': { target: 'https://api.digitechai.in/', changeOrigin: true } },
    hmr: {
      overlay: false,
    },
  },
  preview: {
    host: "::",
    port: 8091,
    allowedHosts: ["camohanc.in", "www.camohanc.in"],
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
