/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Verdana", "Geneva", "Tahoma", "sans-serif"],
      },
      colors: {
        testgreen: "#00ff00",
      },
    },
  },
  plugins: [],
};
