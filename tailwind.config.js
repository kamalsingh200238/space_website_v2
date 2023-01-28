/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "",
          200: "",
          300: "",
          400: "",
          500: "#0B0D17",
          600: "",
          700: "",
          800: "",
          900: "",
        },
      },
      fontFamily: {
        belefair: ["var(--belefair-font)", ...defaultTheme.fontFamily.sans],
        barlow: ["var(--barlow-font)", ...defaultTheme.fontFamily.sans],
        ["barlow-condensed"]: [
          "var(--barlow-condensed-font)",
          ...defaultTheme.fontFamily.sans,
        ],
      },
    },
    tracking: {
      widest: '2.7px'
    }
  },
  plugins: [],
};
