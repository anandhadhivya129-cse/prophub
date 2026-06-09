/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        teal: {
          50:  '#e0f5f5',
          100: '#b3e6e6',
          200: '#80d4d4',
          300: '#4dc2c2',
          400: '#26b3b3',
          500: '#00a0a0',
          600: '#007070',
          700: '#006060',
          800: '#005050',
          900: '#003d3d',
          950: '#002a2a',
        },
        gold: {
          300: '#ffd740',
          400: '#F5C000',
          500: '#d4a200',
          600: '#b38600',
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
