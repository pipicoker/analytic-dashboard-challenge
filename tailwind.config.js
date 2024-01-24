/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        "PJS": ["Plus Jakarta Sans", "sans-serif"],
        'inter': "Inter"
      }
    },
  },
  plugins: [],
}

