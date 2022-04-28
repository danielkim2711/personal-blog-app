module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1279px',
      '2xl': '1536px',
      '3xl': '1921px',
    },
    extend: {},
  },
  plugins: [require('daisyui')],
};
