/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'wonky': ['"Gochi Hand"', 'cursive'],
      },
      colors: {
        'claw-bg': '#000000', // Black
        'claw-primary': '#FF0000', // Bright Red
        'claw-secondary': '#800000', // Dark Red
        'claw-border': '#FF0000', // Red border
        'claw-text': '#FFFFFF', // White text
      }
    },
  },
  plugins: [],
}
