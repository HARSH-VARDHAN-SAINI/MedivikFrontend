/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0B7A3E', // Medivik Green
          light: '#129a50',
          dark: '#085a2d',
        },
        accent: {
          DEFAULT: '#FFD700', // Yellow accent 
          light: '#FFE44D',
          dark: '#CCAC00',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
        'card': '0 2px 10px rgba(0, 0, 0, 0.08)',
      }
    },
  },
  plugins: [],
}
