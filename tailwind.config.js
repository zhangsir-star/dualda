/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FAF7F2',
        'cream-dark': '#F5F0E8',
        gold: {
          100: '#F9F1D8',
          200: '#F0DEAA',
          300: '#E6CB7D',
          400: '#DDB850',
          500: '#D4A532',
          600: '#AA8628',
          700: '#80661E',
        },
        brown: {
          100: '#F5F0EB',
          200: '#E8DDD3',
          300: '#D4C4B0',
          400: '#C0A88D',
          500: '#A68B6B',
          600: '#8B7355',
          700: '#6B563F',
          800: '#4A3B2C',
          900: '#2E241A',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
