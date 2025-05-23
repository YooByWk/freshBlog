import { type Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";
import typography from "@tailwindcss/typography";

export default {
  darkMode: "class",
  content: [
    "{routes,islands,components}/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        mono: ["var(--font-space-mono)", "monospace"],
      },
      colors: {
        border: "hsl(var(--border))",
        "fresh-bg": "#86efac",
        "fresh-text": "#404559",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Custom colors for beige jazz theme
        beige: {
          50: "hsl(var(--beige-50))",
          100: "hsl(var(--beige-100))",
          200: "hsl(var(--beige-200))",
          300: "hsl(var(--beige-300))",
          400: "hsl(var(--beige-400))",
          500: "hsl(var(--beige-500))",
          600: "hsl(var(--beige-600))",
          700: "hsl(var(--beige-700))",
          800: "hsl(var(--beige-800))",
          900: "hsl(var(--beige-900))",
          950: "hsl(var(--beige-950))",
        },
        warm: {
          50: "hsl(var(--warm-50))",
          100: "hsl(var(--warm-100))",
          200: "hsl(var(--warm-200))",
          300: "hsl(var(--warm-300))",
          400: "hsl(var(--warm-400))",
          500: "hsl(var(--warm-500))",
          600: "hsl(var(--warm-600))",
          700: "hsl(var(--warm-700))",
          800: "hsl(var(--warm-800))",
          900: "hsl(var(--warm-900))",
          950: "hsl(var(--warm-950))",
        },
        neutral: {
          50: "hsl(var(--neutral-50))",
          100: "hsl(var(--neutral-100))",
          200: "hsl(var(--neutral-200))",
          300: "hsl(var(--neutral-300))",
          400: "hsl(var(--neutral-400))",
          500: "hsl(var(--neutral-500))",
          600: "hsl(var(--neutral-600))",
          700: "hsl(var(--neutral-700))",
          800: "hsl(var(--neutral-800))",
          900: "hsl(var(--neutral-900))",
          950: "hsl(var(--neutral-950))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
  plugins: [tailwindcssAnimate, typography],
} satisfies Config;
