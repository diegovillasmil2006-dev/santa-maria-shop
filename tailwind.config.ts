import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#F5F0E8",
        "cream-light": "#FAFAF7",
        navy: "#1A2744",
        "navy-light": "#243460",
        gold: "#C9A96E",
        "gold-light": "#E2C99A",
        charcoal: "#2D2D2D",
        muted: "#6B6B6B",
      },
      fontFamily: {
        playfair: ["Playfair Display", "Georgia", "serif"],
        inter: ["Inter", "system-ui", "sans-serif"],
      },
      screens: {
        xs: "380px",
      },
    },
  },
  plugins: [],
};

export default config;
