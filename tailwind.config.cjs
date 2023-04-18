/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        color1: "#303736",
        color2: "#6b574e ",
        color3: "#59bd99",
        color4: "#d0aa5b ",
        color5: "#1fa1b8",
      },
      keyframes: {
        "slide-from-left": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },

        "slide-from-right": {
          "0%": { transform: "translateX(+100%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
        "slide-from-left": "slide-from-left 0.5s ease-in ",
        "slide-from-right": "slide-from-right 0.5s ease-in ",
      },
    },
  },
  plugins: [],
};
