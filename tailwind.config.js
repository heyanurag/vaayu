const colors = require("tailwindcss/colors");

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
        good: colors.emerald,
        moderate: colors.yellow,
        usg: colors.orange,
        unhealthy: colors.red,
        veryUnhealthy: colors.purple,
        hazardous: colors.rose,
      },
    },
  },
  plugins: [],
};
