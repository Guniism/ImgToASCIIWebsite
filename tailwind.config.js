/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
        'base': '#232323',
        'bd': '#3B3B3C',
        'con': '#2C2C2C',
        'wht': '#DCDCDC',
        'green': '#40C173',
        'lgreen': '#52eb73'
    },
  },
  plugins: [],
}