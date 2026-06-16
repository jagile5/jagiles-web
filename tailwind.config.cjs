/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#2D8AE9',
        secondary: '#F43674',
        third: '#7DB598',
        bg: '#0d0d0d',
        surface: '#1a1a1a',
        alt: '#111111',
        text: '#f0ede8',
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        display: ['Syne', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
