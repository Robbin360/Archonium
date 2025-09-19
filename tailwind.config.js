module.exports = {
  content: ['./app/**/*.{ts,tsx,js,jsx}','./src/**/*.{ts,tsx,js,jsx}','./components/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      colors: {
        archBlue: '#0047FF',
        archBlack: '#000000',
        archWhite: '#FFFFFF'
      },
      fontFamily: {
        grotesk: ['Space Grotesk','system-ui','sans-serif'],
        serifDisplay: ['Cormorant Garamond','serif']
      }
    }
  },
  plugins: [],
};
