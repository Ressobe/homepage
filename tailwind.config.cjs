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
    },
  },
  plugins: [],
};
