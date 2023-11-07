/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{html,js,jsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      maven: [ "Maven Pro", 'sans-serif' ],
      zen : [ 'Zen Maru Gothic', 'sans-serif'],
      inter : [ 'Inter', 'sans-serif' ]
    },

  },
  plugins: [],
}

