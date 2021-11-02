module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './pages/**/*.vue',
    './nuxt.config.{js,ts}',
    './assets/css/tailwind.css'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
