const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.blueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
      orange: colors.orange,
      lime: colors.lime,
      blue: colors.blue,
      green: colors.green,
      purple: colors.purple,
    },
    extend: {
      fontFamily: {
        'permanent-marker': ['Covered By Your Grace', 'cursive'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
