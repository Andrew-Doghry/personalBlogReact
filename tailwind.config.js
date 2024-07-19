/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.jsx",
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
   ],
  theme: {
    container:{
      center: true
    },
    extend: {
      colors:{
        "flareOrange" :"#ff3e13",
        "flarePurple" :"#71387b",
      }
    },
  },
  plugins: [],
}