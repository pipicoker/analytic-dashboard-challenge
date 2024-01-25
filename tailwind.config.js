/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        "PJS": ["Plus Jakarta Sans"],
        'inter': "Inter"
      },
      colors: {
        'light-green': 'rgba(52, 202, 165, 0.12)',
        'light-red': 'rgba(237, 84, 78, 0.12)',
        'tableHeading': 'var(--60, #9CA4AB)'
      }
    },
  },
  plugins: [],
}

