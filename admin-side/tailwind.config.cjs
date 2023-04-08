/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/flowbite/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        primaryDarkColor: '#1A1A1A',
        secondaryColor: '#F1F1F1',
        ternaryColor: '#242424',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
