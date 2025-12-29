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
      colors: {
        primary: "#1a1a1a",
        "background-light": "#fcfcfc",
        "background-dark": "#0f0f0f",
        "surface-dark": "#1a2433",
        "card-light": "#ffffff",
        "card-dark": "#181818",
      },
      fontFamily: {
        display: ['"Rubik"', "sans-serif"],
        body: ['"Noto Sans KR"', '"Inter"', "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px",
        oval: "50%",
      },
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
      animation: {
        fadeIn: "fadeIn 0.5s ease-out",
        slideUp: "slideUp 0.6s ease-out forwards",
      },
    },
  },
  plugins: [],
};
export default config;

