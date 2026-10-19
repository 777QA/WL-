/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ochre': '#8B6914',
        'ochre-light': '#A08020',
        'ink-green': '#2D5016',
        'warm-white': '#FAF8F5',
      },
      fontFamily: {
        'song': ['Source Han Serif SC', 'Noto Serif SC', 'SimSun', 'serif'],
        'hei': ['Source Han Sans SC', 'Noto Sans SC', 'Microsoft YaHei', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
