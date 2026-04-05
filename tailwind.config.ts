import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: "#FDFAF5",
          100: "#F8F2E6",
          200: "#EFE4CC",
          300: "#E3D0B0",
        },
        navy: {
          600: "#2E4266",
          700: "#243752",
          800: "#1B2E45",
          900: "#0D1B2A",
        },
        gold: {
          accent: "#C9A96E",
          light: "#D4B87A",
          dark: "#B89558",
        },
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-jost)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
