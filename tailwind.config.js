module.exports = {
  content: ["./src/**/*.{html,njk}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f9ebe0",
          100: "#f0ccb3",
          200: "#e6aa80",
          300: "#db884d",
          400: "#d46f26",
          500: "#cc5500",
          600: "#c74e00",
          700: "#c04400",
          800: "#b93b00",
          900: "#ad2a00",
        },
        secondary: {
          50: "#e0eff9",
          100: "#b3d6f0",
          200: "#80bbe6",
          300: "#4da0db",
          400: "#268bd4",
          500: "#0077cc",
          600: "#006fc7",
          700: "#0064c0",
          800: "#005ab9",
          900: "#0047ad",
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
