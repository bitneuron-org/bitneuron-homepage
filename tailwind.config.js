/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Kanit", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        transparent: "transparent",
        green: "#32AB45",
        "green-3": "#6FCF97",
        yellow: "#FFE600",
        "gray-light": "#808080",
        gray: "#333333",
        "gray-medium": "#262525",
        "gray-dark": "#151515",
        purple: "#7A50D3",
        pink: "#E54E6F",
        blue: "#1438E8",
        royalblue: "#4354F4",
        white: "#fff",
        black: "#000",
      },
    },
  },
  plugins: [],
};
