/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/components/HomePage.jsx"],
  theme: {
    extend: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px"
      },
      colors: {

      },
      fontFamily: {

      },
      fontWeight: {
        
      },
      backgroundImage: {
        'title': '/images/title-bg'
      }
    },
  },
  plugins: [],
}

