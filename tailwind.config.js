export default {
  content: ["./src/**/*.tsx", "./src/**/*.css"],
  theme: {
    extend: {
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
       animation: {
        marquee: 'marquee 5s linear infinite',
      },
    },
    colors: {
      transparent: "transparent",
      black: "#000000",
      white: "#ffffff",
      cream: "#f6eee0",
      peach: "#e4b7a0",
      dessert: "#a45c40",
      coral: "#c38370",
      blue: {
        1: "#315ebe", // dark
        2: "#f4f8fd", // very light
        3: "#1e293b", // daaaark blue for texts
        4: "#dbeafe", // light blue
        5: "#597fe4", //medium blue
      },
      grey: {
        1: "#e4e4e7", //borders
        2: "#8b8b8b", // secondary text
      },
    },
    fontFamily: {
      roboto: ["Roboto"],
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
