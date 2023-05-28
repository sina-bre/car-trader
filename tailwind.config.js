/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      fontSize: {
        "5xl": ["3rem", { lineHeight: "3rem" }],
        "6xl": ["3.75rem", { lineHeight: "3.75rem" }],
        "7xl": ["4.5rem", { lineHeight: "4.5rem" }],
        "8xl": ["6rem", { lineHeight: "6rem" }],
        "9xl": ["8rem", { lineHeight: "8rem" }],
      },
    },
  },
  plugins: [],
};
