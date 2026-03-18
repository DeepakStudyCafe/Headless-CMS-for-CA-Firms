import { defineConfig } from "vite";
export default defineConfig({
  preview: {
    allowedHosts: [
      "temp7.automationcafe.in",
      "www.temp7.automationcafe.in"
    ]
  },
  resolve: {
    alias: {
      "@": require("path").resolve(__dirname, "./src")
    }
  }
});