/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [], content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors :{
        primary:'#1F61B9',
        secondary:'#F17117',
        basic_white: '#EEE5E5',
        hover_primary:'#004AAD',
        hover_secondary:'F96700'
      },
      screens: {
        's': '375px'
      }
    }
  },
  plugins: [],
}

