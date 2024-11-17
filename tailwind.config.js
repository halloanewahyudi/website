/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container:{
        center:true,
        padding:'2rem'
      },
      colors:{
        primary:'#e10010',
        secondary:'#4a495b',
        tertiary:'#f9eea9'
      }
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}

