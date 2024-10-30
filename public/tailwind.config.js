/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          marineBlue: "hsl(213, 96%, 18%)",
          purplishBlue: "hsl(243, 100%, 62%)",
          lightBlue: "hsl(206, 94%, 87%)",
          strawberryRed: "hsl(354, 84%, 57%)",
        },

        secondary: {
          coolGray: "hsl(231, 11%, 63%)",
          lightGray: "hsl(229, 24%, 87%)",
          mongolia: "hsl(217, 100%, 97%)",
          alabaster: "hsl(231, 100%, 99%)",
        },
      },
      backgroundImage: {
        desktop: "url('../images/bg-sidebar-desktop.svg')",
        mobile: "url('../images/bg-sidebar-mobile.svg')",
      },
    },
    fontFamily: {
      ubuntu: ["Ubuntu", "sans-serif"],
    },
  },
  plugins: [],
};
