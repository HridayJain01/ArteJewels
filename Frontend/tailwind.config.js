/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom-dark': '0 10px 20px rgba(0, 0, 0, 0.7), 0 6px 6px rgba(0, 0, 0, 0.5)',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(180deg, #E1E7EB 0%, #746191 100%)',
        'cards-pattern': "url('assets/images/gradient.png')",
        },
      fontFamily: {
        sans: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
}