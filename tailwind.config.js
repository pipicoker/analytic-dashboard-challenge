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
        'hover':'linear-gradient(180deg, #34CAA5 0%, rgba(52, 202, 165, 0.00) 100%)',
        'light-green': 'rgba(52, 202, 165, 0.12)',
        'light-red': 'rgba(237, 84, 78, 0.12)',
        'tableHeading': 'var(--60, #9CA4AB)',
        'trans-nav': 'rgba(247, 248, 250, 0.9)'
      }

    },
  },
  plugins: [],
}

