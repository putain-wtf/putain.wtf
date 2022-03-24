module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      backgroundImage: {
        'nav-burger': "url('/nav-burger.svg')",
        'nav-logo': "url('/putain-logo-black.svg')",
        'footer-logo': "url('/putain-logo-white.svg')",
        'menu-cross': "url('/menu-cross.svg')",
        'foundation-black': "url('/foundation-black.png')",
        'insta-black': "url('/insta-black.svg')",
        'discord-black': "url('/discord-black.svg')",
        'github-black': "url('/github-black.svg')",
        'fundraiser-gallery': "url('/fundraiser-gallery.svg')",

      },

      fontFamily: {
        'arial-black': ['Arial Black', 'Arial Bold', 'Gadget', 'sans-serif'],
        'arial': ['arial'],
        'times': ['Times New Roman'],
      },
      colors: {
        'stories-green': "#72AD99",
        'stories-blue': "#0506FE",
        'stories-pink': "#A46786",
        'stories-orange': "#A66128",
        'error-red': '#FF0000'
      },

    },
  },
  plugins: [],
}

