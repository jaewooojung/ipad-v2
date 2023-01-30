/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: ["./index.html"],
  content: ["./src/**/*.{html,js,ts}"],
  theme: {
    extend: {
      spacing: {
        "header-height": "48px",
        "header-height-lg": "96px",
      },
      height: {
        header: "48px",
        "header-lg": "96px",
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
