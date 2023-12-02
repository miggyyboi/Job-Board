/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        primary: 'Poppins, sans-serif',
        secondary: 'Dhurjati, sans-serif',
        little: 'Oswald, sans-serif'
      },
    },
  },
  plugins: [],
};
