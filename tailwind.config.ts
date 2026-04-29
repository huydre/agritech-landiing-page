import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        forest: {
          950: "#0E2418",
          900: "#13301F",
          800: "#1A4128",
          700: "#235236",
        },
        cream: {
          50: "#F8F4EA",
          100: "#F2EDE0",
          200: "#E9E2D0",
        },
        lime: {
          DEFAULT: "#D9FB60",
          deep: "#C5F542",
          soft: "#E5FF8A",
        },
        ink: "#0A0F0B",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        sans: ["var(--font-geist)", "system-ui", "sans-serif"],
        grotesk: ["var(--font-archivo)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
    },
  },
  plugins: [],
};

export default config;
