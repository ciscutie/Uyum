/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        kanit: ['Kanit', 'sans'],
        nabla: ['Nabla'],
        foldit: ['Foldit'],
        playfair: ['Playfair Display'],
        alumni: ['Alumni Sans Collegiate One'],
        bungee: ['Bungee Spice'],
      },
      colors: {},
      keyframes: {
        cooking: {
          '0%, 100%': {
            transform: 'translateY(0)',
          },
          '25%': {
            transform: 'translateY(5px)' /* Simulate a cooking motion */,
          },
          '50%': {
            transform:
              'translateY(-5px)' /* Simulate the opposite cooking motion */,
          },
          '75%': {
            transform: 'translateY(5px)' /* Simulate a cooking motion again */,
          },
        },
      },
    },
  },
  plugins: [],
};
