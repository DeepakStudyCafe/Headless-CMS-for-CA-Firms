import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    proxy: {
      "/api": {
        target: "https://api.digitechai.in",
        changeOrigin: true,
      },
      "/uploads": {
        target: "https://api.digitechai.in",
        changeOrigin: true,
      },
    },
    allowedHosts: [
      "temp15.webcafe.co.in",
      "www.temp15.webcafe.co.in"
    ],
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
