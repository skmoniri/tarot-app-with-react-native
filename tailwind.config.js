/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './node_modules/@rnr/**/*.{ts,tsx}',
  ],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        background: "#2A1538",
        primary: "#7C5CFF",
        secondary: "#C7B8E2",
        surface: "#3A2352",
        creamText: "#F3EEF7",
        gold: "#E6C77D",
      },
    },
  },
  plugins: [],
};
