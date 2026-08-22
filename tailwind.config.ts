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
        paper: "#fdfbf7",
        pencil: "#2d2d2d",
        "muted-paper": "#e5e0d8",
        "accent-red": "#ff4d4d",
        "pen-blue": "#2d5da1",
        postit: "#fff9c4",
      },
      fontFamily: {
        kalam: ["var(--font-kalam)", "cursive", "sans-serif"],
        patrick: ["var(--font-patrick)", "cursive", "sans-serif"],
      },
      boxShadow: {
        hard: "4px 4px 0px 0px #2d2d2d",
        "hard-sm": "2px 2px 0px 0px #2d2d2d",
        "hard-lg": "8px 8px 0px 0px #2d2d2d",
        "hard-soft": "3px 3px 0px 0px rgba(45, 45, 45, 0.15)",
        "hard-hover": "6px 6px 0px 0px #2d2d2d",
      },
    },
  },
  plugins: [],
};

export default config;
