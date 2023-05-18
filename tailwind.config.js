/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/HomePage.jsx",
    "./src/components/LoginPage.jsx",
    "./src/components/SignUpPage.jsx",
    "./src/components/ProductsPage.jsx",
    "./src/props/ProductCard.jsx",
    "./src/props/MensFilter.jsx"
  ],
  theme: {
    extend: {
      screens: {
        // sm: "640px",
        // md: "768px",
        // lg: "1024px",
        // xl: "1280px"
      },
      colors: {
        "off-white": "#f5f5f5",
        "blackish": "#070B0B",
        "off-whiter": "#f9f9f9"
      },
      fontFamily: {

      },
      fontWeight: {
        
      },
      backgroundImage: {
        // pc images
        "title": "url('../public/pc-images/title-bg.jpg')",
        "women-with-jewelry": "url('../public/pc-images/woman-with-jewelry.jpg')",
        "login": "url('../public/pc-images/login-bg.jpg')",

        // mobile images
        "tablet-title": "url('../public/mobile-images/title-md.jpg')",
        "mobile-title": "url('../public/mobile-images/title.png')",
        "woman-with-ring": "url('../public/mobile-images/women-with-ring.jpg')",
        "woman-with-jewelary-tab": "url('../public/mobile-images/woman-with-jewelary-tab.jpg')",
        "login-mob": "url('../public/mobile-images/login-bg-mobile.jpg')",

        // card images
        "women": "url('../public/images/women-fashion.jpg')",
        "men": "url('../public/images/men-fashion.jpg')",
        "kids": "url('../public/images/kid-fashion.jpg')",
        "jewelry": "url('../public/images/jewelry.jpg')",
        "cosmetics": "url('../public/images/cosmetics.jpg')",
        "bags": "url('../public/images/bags.jpg')"
      }
    },
  },
  plugins: [],
}

