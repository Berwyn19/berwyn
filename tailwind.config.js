/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'color-change': 'colorChange 6s infinite ease-in-out',
      },
      keyframes: {
        colorChange: {
          '0%':   { color: '#3b82f6' }, // blue-500
          '33%':  { color: '#6366f1' }, // purple-500
          '66%':  { color: '#8b5cf6' }, // pink-500
          '100%': { color: '#3b82f6' }, // blue-500
        },
      },
    },
  },
  plugins: [],
}
