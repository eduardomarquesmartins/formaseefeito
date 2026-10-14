/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./*.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: '#ea580c',
          'orange-hover': '#c2410c',
          'orange-light': '#fff7ed',
          black: '#111827',
          'black-pure': '#000000',
          dark: '#0f172a',
          slate: '#1e293b',
          paper: '#faf7f2',
          surface: '#fcfbf9',
          border: '#e8e5dc',
          peach: '#fdd8c5',
          'peach-light': '#fff4ed',
          'peach-dark': '#e26d40',
          yellow: '#f4cf65',
        }
      },
      fontFamily: {
        sans: ['"Montserrat"', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['"Poppins"', 'sans-serif'],
        display: ['"Poppins"', 'sans-serif'],
        logo: ['"Libre Bodoni"', '"Bodoni Moda"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      letterSpacing: {
        'tightest': '-0.03em',
        'wider-subtle': '0.08em',
      }
    },
  },
  plugins: [],
}
