/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        linearBlue: {
          1: "#1B5AA8",
          2: "#4F7BB0",
          3: "#96B5DC",
        },
        linearOrange: {
          100: "#FDAC3D",
          200: "#ED912A",
        },
        mixcolor: ["#1b5aa8b3", "#fe9526b3"],
      },
      borderRadius: {
        "5xl": "250px",
      },
      linearBorderGradients: (theme) => ({
        colors: theme("colors"),
        borderRadius: theme("borderRadius"),
      }),
      fontFamily: {
        poppins: ["Poppins"],
      },

      screens: {
        mobile: { max: "768px" },
        tablet: { min: "768px", max: "1024px" },
		  desktop: {max: "1400px" , min: "1024px"}
      },
    },
  },
  plugins: [require("tailwindcss-border-gradients")()],

};
