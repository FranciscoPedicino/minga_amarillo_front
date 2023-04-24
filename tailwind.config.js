/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: [
  './src/**/*.{js,jsx,ts,tsx}' //esto también es una forma de englobar subdirectorios
  ],
  theme: {
  extend: {
    backgroundImage:{
      'fondo':"url('./assets/images/fondo-minga.png')",
      'orange':"url('./assets/images/rectangulo.png')",

    },
    height: {
      '128': '50vh',
    },
  }
  },
  variants: {},
  plugins: []
 }