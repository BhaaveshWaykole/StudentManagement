/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT";

module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sourcecode': ['Source Code Pro', 'monospace'],
        'crimson': ['Crimson Pro', 'serif'],
        'bungee': ['Bungee Spice', 'sans-serif'],
        'sevillana': ['Sevillana', 'cursive'],
        'amatic': ['Amatic SC', 'sans-serif'],
        'poppins-800': ['Poppins', 'sans-serif'],
      },
      colors: {
        'black-bg': '#121212',
        'white-e' : "#EEEEEE",
      },
      maxHeight: {
        '500': '32rem',
      },
      height: {
        '400': '25rem',
      }
    },
  },
  plugins: [],
})