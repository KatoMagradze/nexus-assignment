/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sf: ["SFPro", "sans-serif"],
      },
      colors: {
        white: "#FFFFFF",
        primary: "#9D71FD",
        "primary-content": "#1A0745",
        "secondary-content": "#5F517D",
        grey: "#E8E6EC",
        darkgrey: "#A39CB5",
        "primary-light": "#F2EFFE",
        connection: "#D7CFFD",
      },
      fontSize: {
        "6xl": "4rem",
      },
      screens: {
        lg: "1124px",
      },
    },
  },
  plugins: [],
};
