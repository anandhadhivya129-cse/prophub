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
          50:  '#e6f2f0',
          100: '#c2deda',
          200: '#9bcac3',
          300: '#70b5ac',
          400: '#4ea599',
          500: '#2d9487',
          600: '#1e7a6e',
          700: '#166056',
          800: '#0e4840',
          900: '#07302b',
          950: '#031e1a',
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
