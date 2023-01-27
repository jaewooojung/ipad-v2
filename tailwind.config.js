/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      height: {
        screen05: "50vh",
        screen15: "150vh",
        screen20: "200vh",
        screen55: "550vh",
        screen190: "1900vh",
        screen150: "1500vh",
      },
      fontSize: {
        "10xl": "12rem",
      },
      keyframes: {
        flowdown: {
          "0%": { transform: "translateY(-50%)", opacity: 0 },
          "50%": { transform: "translateY(0)", opacity: 1 },
          "100%": { transform: "translateY(50%)", opacity: 0 },
        },
      },
      animation: {
        flowdown: "flowdown 1.5s linear infinite",
      },
    },
  },
  plugins: [],
};
// main > section:nth-child(1) {
//   height: 550vh;
// }
// main > section:nth-child(2) {
//   height: 1900vh;
// }
// main > section:nth-child(3) {
//   height: 1500vh;
// }
// main > section:nth-child(4) {
//   height: 200vh;
// }
// main > section:nth-child(5) {
//   height: 150vh;
// }
