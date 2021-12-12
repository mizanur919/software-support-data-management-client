module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    container: {
      center: true,
      padding: '2rem',
      screens: {
        lg: '1080px',
        xl: '1080px',
        '2xl': '1080px'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
