import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#00aaff",
          navy: "#1a4f9a",
          dark: "#0a0e1a",
          accent: "#00d4ff",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Poppins", "Inter", "system-ui", "sans-serif"],
      },
      animation: {
        "ripple": "ripple 6s ease-out infinite",
        "float": "float 6s ease-in-out infinite",
        "wave": "wave 8s linear infinite",
        "scroll-down": "scrollDown 2s ease-in-out infinite",
      },
      keyframes: {
        ripple: {
          "0%": { transform: "scale(0)", opacity: "1" },
          "100%": { transform: "scale(4)", opacity: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        wave: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        scrollDown: {
          "0%": { transform: "translateY(0)", opacity: "1" },
          "100%": { transform: "translateY(12px)", opacity: "0" },
        },
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(0,170,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(0,170,255,0.08) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};

export default config;
