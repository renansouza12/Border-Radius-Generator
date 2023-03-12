/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{html,js}',
    './pages/**/*.{html,js}',
    './index.html',
  ],
  theme: {
    fontFamily:{
      'Poppins':[ 'Poppins', 'sans-serif']
    }, 
    screens:{
      'mobile':'320px',
    },
    extend: {},
  },
  plugins: [],
}
