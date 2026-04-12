import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    allowedHosts: [
      "temp9.webcafe.co.in",
      "www.temp9.webcafe.co.in"
    ],
    hmr: {
      overlay: false,
    },
    proxy: {
      '/api': {
        target: 'https://api.digitechai.in',
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path.replace(/^\/api/, '/api')
      },
      '/uploads': {
        target: 'https://api.digitechai.in',
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path.replace(/^\/uploads/, '/uploads')
      }
    },
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
