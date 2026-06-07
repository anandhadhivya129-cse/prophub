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
          50:  '#FFFFF0',
          100: '#FAF7F0',
          200: '#F8F4EC',
          300: '#F5E6D3',
          400: '#EDE0D0',
          500: '#E6D7C3',
          600: '#D2B48C',
          700: '#C4A882',
          800: '#A08060',
          900: '#7A6A58',
          950: '#3E2C20',
        },
        gold: {
          400: '#D2B48C',
          500: '#6F4E37',
          600: '#5a3d2b',
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
