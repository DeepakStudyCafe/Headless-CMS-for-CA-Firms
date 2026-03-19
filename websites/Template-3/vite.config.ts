import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8082,
    allowedHosts: ["temp2.automationcafe.in", "www.temp2.automationcafe.in"],
    hmr: {
      overlay: false,
    },
  },
  preview: {
    host: "::",
    port: 8082,
    allowedHosts: ["temp2.automationcafe.in", "www.temp2.automationcafe.in"],
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
