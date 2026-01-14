import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      /* =========================
       * Breakpoints (Semantic aliases)
       * ========================= */
      screens: {
        mobile: "640px",   // sm 별칭
        tablet: "768px",   // md 별칭
        desktop: "1024px", // lg 별칭
        wide: "1280px",    // xl 별칭
      },

      /* =========================
       * Colors
       * ========================= */
      colors: {
        // 기존 색상 (유지)
        primary: "#1a1a1a",
        "background-light": "#fcfcfc",
        "background-dark": "#0f0f0f",
        "surface-dark": "#1a2433",
        "card-light": "#ffffff",
        "card-dark": "#181818",

        // 시맨틱 토큰 (추가)
        text: {
          primary: "#141414",
          secondary: "#6B7280",
          muted: "#9CA3AF",
          inverse: "#FFFFFF",
        },
        bg: {
          default: "#FFFFFF",
          muted: "#F7F7F7",
          elevated: "#FFFFFF",
          inverse: "#141414",
        },
        border: {
          default: "#E5E7EB",
          subtle: "#F3F4F6",
        },
        brand: {
          primary: "#141414",
          accent: "#2563EB",
        },
        state: {
          success: "#16A34A",
          warning: "#F59E0B",
          danger: "#DC2626",
        },
      },

      /* =========================
       * Typography (기존 유지)
       * ========================= */
      fontFamily: {
        display: ['"Rubik"', "sans-serif"],
        body: ['"Noto Sans KR"', '"Inter"', "sans-serif"],
      },

      /* =========================
       * Border Radius (기존 유지)
       * ========================= */
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px",
        oval: "50%",
      },

      /* =========================
       * Shadows (추가)
       * ========================= */
      boxShadow: {
        card: "0 8px 24px rgba(0,0,0,0.08)",
      },

      /* =========================
       * Z-Index (추가)
       * ========================= */
      zIndex: {
        header: "800",
        dropdown: "900",
        modal: "1000",
        toast: "1100",
      },

      /* =========================
       * Keyframes (기존 유지)
       * ========================= */
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },

      /* =========================
       * Animation (기존 유지)
       * ========================= */
      animation: {
        fadeIn: "fadeIn 0.5s ease-out",
        slideUp: "slideUp 0.6s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
