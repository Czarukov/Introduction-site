/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    colors: {
      'da-czaruk-black': '#292524',
      'da-czaruk-dark-gray': '#44403c',
      'da-czaruk-light-gray': '#a8a29e',
      'da-czaruk-white': '#fffbeb'
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
  },
  plugins: [],
}

