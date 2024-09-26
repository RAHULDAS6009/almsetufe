/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      stroke: ['hover'], // Ensure this is present
    },
  },
  plugins: [ require('tailwind-scrollbar'),],
}