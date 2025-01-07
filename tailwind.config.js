/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#731054", // Primary brand color
          secondary: "#DE0D6F", // Secondary brand color
          light: "#D6E4F4", // Light background
          gray: "#707070", // Neutral gray text
        },
      },
    },
    
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      "1xl": { max: "1400px" },
      // => @media (min-width: 1280px) { ... }
      xl: { max: "1280px" },
      // => @media (max-width: 1280px) { ... }

      lg2: { max: "1200px" },
      // => @media (max-width: 1120px) { ... }

      lg: { max: "1024px" },
      // => @media (max-width: 1024px) { ... }

      md0: { max: "900px" },
      // => @media (max-width: 900px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm2: { max: "659px" },
      // => @media (max-width: 659px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }

      ssms: { max: "500px" },
      // => @media (max-width: 500px) { ... }

      ssm: { max: "460px" },
      // => @media (max-width: 460px) { ... }

      ssmm: { max: "400px" },
      // => @media (max-width: 460px) { ... }
    },
    fontFamily: {
      Inter: ["Inter", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
