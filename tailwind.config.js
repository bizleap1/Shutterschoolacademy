/** @type {import('tailwindcss').Config} 
 *  Forcing a reload to ensure classes are generated
 */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'off-white': '#F5F2EC',
        'soft-ivory': '#FAF8F3',
        'matte-black': '#080808',
        'charcoal': '#151515',
        'graphite': '#222222',
        'dark-text': '#111111',
        'secondary-text': '#555555',
        'light-text': '#F7F7F7',
        'muted-text': '#B8B8B8',
        'graphite-black': '#2B2B2B',
        'metallic-silver': '#B8B8B8',
        'shadow-grey': '#3A3A3A',
        'border-light': '#D8D3C8',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
