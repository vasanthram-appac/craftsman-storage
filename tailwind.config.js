/** @type {import('tailwindcss').Config} */
export default {
  // Scan only the folders where you actually write JSX/TSX.
  content: [
    './app/**/*.{js,ts,jsx,tsx}',      // App Router pages & components
    './components/**/*.{js,ts,jsx,tsx}', // Shared components
    './src/**/*.{js,ts,jsx,tsx}',       // If you keep extra code in src
  ],

theme: {
    extend: {
      keyframes: {
        gradientMove: {
          '0%':   { backgroundPosition: '0% 50%' },
          '50%':  { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      animation: {
        gradientMove: 'gradientMove 4s ease infinite',
      },
    },
  },

  // Enable dark mode if needed:
  // darkMode: 'class', // or 'media'
  plugins: [
    require( '@tailwindcss/line-clamp'),
  ],
};
