import { defineConfig } from "vite";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  server: {
    host: "::",
    port: 8081,
    allowedHosts: ["temp7.automationcafe.in", "www.temp7.automationcafe.in"],
    hmr: {
      overlay: false,
    },
  },
  preview: {
    host: "::",
    port: 8081,
    allowedHosts: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    }
  }
});