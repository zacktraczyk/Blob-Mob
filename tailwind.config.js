/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Century Gothic', 'Futura', 'sans-serif'],
    },
    colors: {
      'text-main': '#000000',
      'text-secondary': '#808080',
      'text-alt': '#ffffff',

      card: '#ffffff',

      gray: '#e6e6e6',
      darkgray: '#919191',
      orange: '#FF9141',
      error: '#e24a4a',
      gameover: '#e24a4a',
      main: '#e2aedd',
      secondary: '#7f4f7a',

      // Button
      signout: '#e24a4a',
      google: '#4bd735',
      facebook: '#12bcf1',
      tutorial: '#f3b14e',
      upgrade: '#399c54',

      cool: 'blue',
      health: '$color-main',
      power: '#33cc33',
      speed: '#f3b14e',

      'shop-afford-main': '$color-game-power',
      'shop-afford-secondary': '#d2ebd2',
      'shop-cant-afford-main': '$color-signout-main',
      'shop-cant-afford-secondary': '#f3d4d4',
      'shop-selected': '$color-facebook-main',
    },
    extend: {},
  }
}
