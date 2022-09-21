/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  content: ["./index.html"],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    screens: {
      desktop: "992px",
    },
    colors: {
      white: "#ffffff",
      attribution: "hsl(228, 45%, 44%)",
      primary: {
        pale: "hsl(225, 100%, 94%)",
        bright: "hsl(245, 75%, 52%)",
        active: "hsl(245, 83%, 68%)",
      },
      neutral: {
        pale: "hsl(225, 100%, 98%)",
        desaturated: "hsl(224, 23%, 55%)",
        dark: "hsl(223, 47%, 23%)",
      },
    },

    extend: {
      fontFamily: {
        sans: ["Proxima Nova", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        mobile: "url('/images/pattern-background-mobile.svg')",
        desktop: "url('/images/pattern-background-desktop.svg')",
      },
    },
  },
  plugins: [],
}
