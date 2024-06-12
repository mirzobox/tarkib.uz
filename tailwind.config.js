/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      roboto: ["Roboto", "Arial", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        log: "url('/public/log.png')",
      },
    },
  },
  plugins: [],
});
