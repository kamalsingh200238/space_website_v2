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
          // 100: "",
          // 200: "",
          // 300: "",
          // 400: "",
          500: "#0B0D17",
          // 600: "",
          // 700: "",
          // 800: "",
          // 900: "",
        },
        seconday: {
          // 100: "",
          // 200: "",
          // 300: "",
          // 400: "",
          500: "#D0D6F9",
          // 600: "",
          // 700: "",
          // 800: "",
          // 900: "",
        }
      },
      fontFamily: {
        bellefair: ["var(--bellefair-font)", ...defaultTheme.fontFamily.sans],
        barlow: ["var(--barlow-font)", ...defaultTheme.fontFamily.sans],
        ["barlow-condensed"]: [
          "var(--barlow-condensed-font)",
          ...defaultTheme.fontFamily.sans,
        ],
      },
      backgroundImage: {
        "home-mobile": "url('/home/background-home-mobile.jpg')",
        "home-tablet": "url('/home/background-home-tablet.jpg')",
        "home-desktop": "url('/home/background-home-desktop.jpg')",
        "destination-mobile": "url('/destination/background-destination-mobile.jpg')",
        "destination-tablet": "url('/destination/background-destination-tablet.jpg')",
        "destination-desktop":
          "url('/destination/background-destination-desktop.jpg')",
        "crew-mobile": "url('/crew/background-crew-mobile.jpg')",
        "crew-tablet": "url('/crew/background-crew-tablet.jpg')",
        "crew-desktop": "url('/crew/background-crew-desktop.jpg')",
        "technology-mobile": "url('/crew/background-technology-mobile.jpg')",
        "technology-tablet": "url('/crew/background-technology-tablet.jpg')",
        "technology-desktop": "url('/crew/background-technology-desktop.jpg')",
      },
    },
    tracking: {
      widest: "2.7px",
    },
  },
  plugins: [],
};
