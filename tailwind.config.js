const colors = require('tailwindcss/colors');
const twblue = "#0397dd";
const twpink = "#e6007a";

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  prefix: '',
  theme: {

    fontFamily: {
      sans: ['Open Sans', 'sans-serif'],
      serif: ['Roboto', 'serif'],
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      colors: {
        prm: twblue,
        sec: twpink,
        bgprm: twblue,
      }
    }
  },
  variants: {
    extend: {
      borderColor: ['focus-visible'],
      opacity: ['disabled'],
    }
  },
  plugins: [],
}
