import { defineConfig } from "vite";
import path from "path";
export default defineConfig({
  preview: {
    allowedHosts: [
      "temp7.automationcafe.in",
      "www.temp7.automationcafe.in"
    ]
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    }
  }
});