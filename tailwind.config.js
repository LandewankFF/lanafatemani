/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [], content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors :{
        primary:'#1F61B9',
        secondary:'#F67E29',
        basic_white: '#EEE5E5',
        hover_primary:'#004AAD',
        hover_secondary:'F17117'
      },
      screens: {
        's': '375px'
      }
    }
  },
  plugins: [],
}

