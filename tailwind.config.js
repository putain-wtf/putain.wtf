module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      backgroundImage: {
        'nav-burger': "url('/nav-burger.svg')",
        'nav-logo': "url('/nav-logo.svg')",
      },

      fontFamily: {
        'arial': ['arial'],
        'times': ['Times-New-Roman'],
      },
      backdropBlur: {
        'nav-sm': '10px',
      },
    },
  },
  plugins: [],
}