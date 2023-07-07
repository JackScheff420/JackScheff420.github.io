/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {

      colors: {
        'theme':'#87ceeb',
        'theme-alt':'#093ab3',
      },
      backgroundColor: {
        'theme':'#093ab3',
        'theme-alt': '#87ceeb',
      },

    },
  },
  plugins: [],
}
