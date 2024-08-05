module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'primary-dark': '#202020',
        'primary-light': '#8EC85C',
        white: '#FFFFFF',
        secondary: '#474848',
        'secondary-light': '#96A83C'
      },
      fontFamily: {
        montserrat: 'Montserrat'
      },
      height: {
        '80vh': '80vh'
      },
      backgroundImage: {
        1: 'url("../public/Image/1.jpg")',
        5: 'url("../public/Image/5.jpg")',
        6: 'url("../public/Image/6.jpg")',
        8: 'url("../public/Image/8.jpg")'
      }
    }
  },
  plugins: []
}
