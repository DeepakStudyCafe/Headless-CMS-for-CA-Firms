import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}", "./index.html"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "#f8f9fa",
        foreground: "hsl(var(--foreground))",
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        "on-primary-fixed": "#001c37",
        "tertiary-container": "#312100",
        "primary-container": "#0a2540",
        "outline": "#74777e",
        "on-primary-container": "#768dad",
        "surface": "#f8f9fa",
        "secondary-fixed-dim": "#76d6d5",
        "surface-bright": "#f8f9fa",
        "outline-variant": "#c4c6ce",
        "on-primary": "#ffffff",
        "on-surface-variant": "#43474d",
        "secondary": "#006a6a",
        "primary-fixed": "#d2e4ff",
        "error": "#ba1a1a",
        "on-primary-fixed-variant": "#314865",
        "tertiary-fixed-dim": "#e9c176",
        "on-secondary": "#ffffff",
        "primary-fixed-dim": "#b0c8eb",
        "on-tertiary-fixed": "#261900",
        "inverse-primary": "#b0c8eb",
        "on-error-container": "#93000a",
        "tertiary": "#160d00",
        "error-container": "#ffdad6",
        "surface-container": "#edeeef",
        "on-tertiary-fixed-variant": "#5d4201",
        "on-tertiary-container": "#a88642",
        "surface-variant": "#e1e3e4",
        "on-secondary-fixed": "#002020",
        "on-tertiary": "#ffffff",
        "surface-container-low": "#f3f4f5",
        "secondary-fixed": "#93f2f2",
        "on-error": "#ffffff",
        "secondary-container": "#90efef",
        "surface-tint": "#49607e",
        "on-secondary-fixed-variant": "#004f4f",
        "on-secondary-container": "#006e6e",
        "inverse-surface": "#2e3132",
        "primary": {
          DEFAULT: "#000f22",
          foreground: "#ffffff"
        },
        "surface-container-highest": "#e1e3e4",
        "on-background": "#191c1d",
        "inverse-on-surface": "#f0f1f2",
        "surface-dim": "#d9dadb",
        "surface-container-lowest": "#ffffff",
        "surface-container-high": "#e7e8e9",
        "tertiary-fixed": "#ffdea5",
        "on-surface": "#191c1d"
      },
      fontFamily: {
        headline: ["Manrope", "sans-serif"],
        body: ["Inter", "sans-serif"],
        label: ["Inter", "sans-serif"]
      },
      borderRadius: {
        lg: "0.25rem",
        md: "0.125rem",
        sm: "0.125rem",
        xl: "0.5rem",
        full: "0.75rem"
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;
