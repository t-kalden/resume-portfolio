/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{html,js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'black-grey' : '#17171f',
        'dark-white' : '#F0F0F5',
        
      }
    },
    fontFamily: {
      maven: [ "Maven Pro", 'sans-serif' ],
      zen : [ 'Zen Maru Gothic', 'sans-serif'],
      inter : [ 'Inter', 'sans-serif' ]
    },
   
  },
  plugins: [],
}

