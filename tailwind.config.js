/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#3187ED",
        secondaryColor: "#4D4D4D",
        ternaryColor: "#8D8D8D",
        bgColor: "#F8F8F8",
      },
      // fontFamily: {
      //   Poppins: ["Poppins", "sans-serif"],
      // },
    },
  },
  plugins: [],
};
