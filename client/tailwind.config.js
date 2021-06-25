const colors = require("tailwindcss/colors");

module.exports = {
  purge: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
    "node_modules/@zach.codes/react-calendar/dist/**/*.js",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      black: colors.black,
      white: colors.white,
      red: { DEFAULT: "#7d0202" },
      blue: {
        light: "#02c0fd",
        DEFAULT: "#020398",
        dark: "#061270",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Fira Sans"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
