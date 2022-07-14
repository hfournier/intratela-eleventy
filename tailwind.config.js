/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,njk,json}", "./.eleventy.js"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#FFF0E5",
          100: "#FFE1CC",
          200: "#FFC499",
          300: "#FFA666",
          400: "#FF8833",
          500: "#FF6A00",
          600: "#cc5500",
          700: "#994000",
          800: "#662B00",
          900: "#331500",
        },
        secondary: {
          50: "#E5F4FF",
          100: "#CCEAFF",
          200: "#99D5FF",
          300: "#66BFFF",
          400: "#33AAFF",
          500: "#0095FF",
          600: "#0077cc",
          700: "#005999",
          800: "#003C66",
          900: "#001E33",
        },
      },
      fontFamily: {
        cunia: ["Cunia", "sans-serif"],
      },
      transformOrigin: {
        0: "0%",
      },
      animation: {
        floating: "floating 3s ease-in-out infinite",
        revfloating: "revfloating 3s ease-in-out infinite",
      },
      keyframes: {
        floating: {
          "0%, 100%": {
            transform: "translate(0, 0px)",
          },
          "25%": {
            transform: "translate(8px, 8px)",
          },
          "50%": {
            transform: "translate(0, 16px)",
          },
          "75%": {
            transform: "translate(-8px, 8px)",
          },
        },
        revfloating: {
          "0%, 100%": {
            transform: "translate(0, 0px)",
          },
          "25%": {
            transform: "translate(-8px, 8px)",
          },
          "50%": {
            transform: "translate(0, 16px)",
          },
          "75%": {
            transform: "translate(8px, 8px)",
          },
        },
      },
    },
  },
  plugins: [],
};
