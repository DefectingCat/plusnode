module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './layouts/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          grey: {
            200: 'rgba(238,238,238)',
            400: 'rgba(189,189,189)',
            700: 'rgba(97,97,97)',
            800: 'rgba(66,66,66)',
            900: 'rgba(24,25,26)',
          },
          blue: 'rgba(41,98,255)',
        },
        bluish: {
          gray: 'rgba(245,247,250)',
        },
        border: {
          color: 'rgba(204,214,221,.5)',
        },
      },
    },
  },
  plugins: [],
};
