/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [], content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors :{
        primary:'#1F61B9',
        secondary:'#FF730F',
        basic_white: '#EEE5E5',
        hover_primary:'#004AAD',
        hover_secondary:'#E96000'
      },
      screens: {
        's': '375px'
      },
      boxShadow: {
        'custom': '4px 4px 10px rgba(0, 0, 0, 0.2)',
      },
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        slide: 'slide 30s linear infinite',
      },
    }
  },
  plugins: [
    // for logo carousell
    function ({ addComponents }) {
      addComponents({
        '.gradient-side': {
          position: 'relative',
          '&::before, &::after': {
            content: '""',
            position: 'absolute',
            width: '200px',
            height: '100%',
            top: '0',
            zIndex: '10',
          },
          '&::before': {
            background: 'linear-gradient(to left, rgba(255, 255, 255, 0), white)',
            left: '0',
          },
          '&::after': {
            background: 'linear-gradient(to right, rgba(255, 255, 255, 0), white)',
            right: '0',
          },
        },
      });
    },
  ],
  variants: {
    extend: {
      animation: ['hover'], // Menambahkan varian hover ke animation
    },
  },
}

