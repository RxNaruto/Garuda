/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customRed: '#D44242',
        customWhite: '#FFFFFF',
        // Add more custom colors as needed
      },
    },
  },
  plugins: [],
};
