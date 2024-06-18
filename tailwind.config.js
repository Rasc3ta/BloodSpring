/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        crimson: "#DC143C",
      },
      screens: {
        big: "800px",
      },
    },
  },
  plugins: [require("daisyui")],
};
