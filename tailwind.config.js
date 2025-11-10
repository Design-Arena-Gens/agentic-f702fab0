/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0EA5E9',
          dark: '#0284C7',
        },
        accent: '#22D3EE',
        industrial: '#1F2937'
      },
      boxShadow: {
        soft: '0 10px 25px -10px rgba(0,0,0,0.2)'
      }
    },
  },
  plugins: [],
};
