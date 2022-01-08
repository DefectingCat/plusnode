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
            400: ' rgba(189,189,189)',
            700: 'rgba(97,97,97)',
          },
        },
      },
    },
  },
  plugins: [],
};
