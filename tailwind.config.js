/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
    "./node_modules/flowbite/**/*.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        customOrang: "#EA6036",
        customWhite: "#FFF3E0",
        customGolden: "#EAB839",
        customWhitishGolden: "#F2D280",
        customBlack: "#2C263F",
        customGray: "#F3E7D7",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
