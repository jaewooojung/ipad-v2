/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: ["./index.html"],
  content: ["./src/**/*.{html,js,ts}"],
  theme: {
    extend: {
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
