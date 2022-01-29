const colors = require("tailwindcss/colors");
const Nth = require("tailwindcss-nth-child");
const plugin = new Nth("2");

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      display: ["Poppins", "sans-serif"],
    },
    extend: {
      colors: {
        white: "#faf9f9",
        background: "#1d1d23",
        cyan: colors.cyan,
        green: colors.emerald,
        orange: colors.orange,
        purple: colors.purple,
        rose: colors.rose,
      },
    },
  },
  plugins: [plugin.nthChild()],
};
