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
        'claw-bg': '#FFFBF0', // Paper-ish
        'claw-primary': '#FF6B6B', // Shrimp pink
        'claw-secondary': '#4ECDC4', // Teal
        'claw-border': '#2C3E50', // Ink color
      }
    },
  },
  plugins: [],
}
