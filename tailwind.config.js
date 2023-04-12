/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        light: ["adobe-light", "cursive"],
        bold: ["adobe-bold", "cursive"],
        normal: ["adobe-normal", "cursive"],
        italic: ["adobe-italic", "cursive"],
      },
    },
  },
  plugins: [],
}
