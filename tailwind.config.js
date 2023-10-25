/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    colors: {
      'dadarkblue': '#0d2b45',
      'dablue': '#203c56',
      'dadarkpurple': '#544e68',
      'dapurple': '#8d697a',
      'dabrown': '#d08159',
      'daorange': '#ffaa5e',
      'daskin': '#ffd4a3',
      'dawhite': '#ffecd6',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
  },
  plugins: [],
}

