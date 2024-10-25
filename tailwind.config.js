/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        NavbarDark: {
          800: '#404040',
          900: '#262626',
        },
        ContentDark: {
          300: '#1f1f1f',
          400: '#1a1a1a',
          500: '#151515',
          600: '#101010',
        },
      },
    },
  },
  plugins: [],
}
