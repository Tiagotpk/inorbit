/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // theme: "#2a2a2a",
        // primary: "#5f9ea1",
        // secondary: "#d60b22"
      },
      fontFamily: {
        // mont: [ 'Montserrat', 'sans-serif']
      }
      
    },
    screens: {
      // 'sm': {'min': '320px', 'max': '767px'},
      // 'md': {'min': '768px', 'max': '1023px'},
      // 'lg': {'min': '1024px', 'max': '1279px'},
      // 'xl': {'min': '1280px'},
    },
    
  },
  
  plugins: [],
}

