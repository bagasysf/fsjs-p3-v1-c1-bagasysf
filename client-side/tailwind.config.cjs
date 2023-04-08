/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primaryColor: '#E20612',
        secondaryColor: '#1F2024',
        secondaryDarkColor: '#161619',
        ternaryColor: '#242424',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
