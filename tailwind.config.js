module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        secondary: '#00c4cc',
        primary: '#6366F1',
      },
      width: {
        '1/20': '5%',
      },
      maxWidth: {
        '4/10': '40%',
        '1/2': '50%',
      },
    },
  },
  plugins: [],
};
