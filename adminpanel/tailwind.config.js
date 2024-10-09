/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customPurple: {
          900: "#3F183B", // Darkest shade
          800: "#4F264A",
          700: "#5E345A",
          600: "#9D6B98",
          400: "#DCA2D6",
          300: "#EAC7E6",
          200: "#F4E3F3",
          100: "#FAF0F9", // Lightest shade
        },
      },
    },
  },
  plugins: [],
};
