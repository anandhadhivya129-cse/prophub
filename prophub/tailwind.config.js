/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50:  '#e8eef7',
          100: '#c5d3ea',
          200: '#9eb6db',
          300: '#7799cb',
          400: '#5b83bf',
          500: '#3f6db4',
          600: '#2c5699',
          700: '#1a3f7d',
          800: '#0f2d62',
          900: '#061a47',
          950: '#030e2e',
        },
        gold: {
          400: '#f5c842',
          500: '#e6b800',
          600: '#c9a000',
        }
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'serif'],
        body: ['"DM Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
