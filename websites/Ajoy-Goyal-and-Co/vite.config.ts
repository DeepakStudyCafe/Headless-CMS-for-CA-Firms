import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8093,
    // allow the production domain for local preview/dev HMR
    allowedHosts: ["ajoygoyalassociates.com", "www.ajoygoyalassociates.com"],
    hmr: {
      overlay: false,
    },
  },
  preview: {
    host: "::",
    port: 8093,
    allowedHosts: ["ajoygoyalassociates.com", "www.ajoygoyalassociates.com"],
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
