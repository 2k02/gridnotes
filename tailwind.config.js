/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        secondary: 'rgb(15, 14, 14)',
        line: 'rgba(255, 255, 255, 0.125)',
        active: '#d34e11' 
      }
    },
  },
  plugins: [],
}