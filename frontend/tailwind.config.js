/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      'red' : '#D44242',
      'white':'#f8fafc',
      'black': '#020617',
      'yellow': '#fde68a',
      'grey': '#94a3b8',
    },
    extend: {},
  },
  plugins: [],
}

