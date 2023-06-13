/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        primary: {
          100: 'rgb(255, 246, 246)',
          200: 'rgb(255, 211, 212)',
          300: 'rgb(255, 176, 177)',
          400: 'rgb(255, 141, 142)',
          500: 'rgb(255, 106, 107)',
          600: 'rgb(255, 71, 73)',
          700: 'rgb(219, 36, 38)',
          800: 'rgb(184, 26, 27)',
          900: 'rgb(184, 26, 27)',
          950: 'rgb(148, 21, 22)',
        },
        background: '#0d1117',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        nunito: ['Nunito Sans', 'sans-serif'],
        opensans: ['Open Sans', 'sans-serif'],
      },
      boxShadow: {
        'custom-xs': 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px',
        'custom-sm': 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
        'custom-md': 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
        'custom-lg': 'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px',
        'custom-hover': 'rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em',
      },
    },
    screens: {
      'xs': '480px',
      'ss': '620px',
      'sm': '768px',
      'md': '1024px',
      'lg': '1204px',
      'xl': '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [],
};
