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
        "matt-green": "#285D34",
        "off-white": "#f5f5f5"
      },
      fontFamily: {

      },
      fontWeight: {
        
      },
      backgroundImage: {
        'title': "url('../public/pc-images/title-bg.jpg')",
        // mobile images
        "mobile-title": "url('../public/mobile-images/title.png')"
      }
    },
  },
  plugins: [],
}

