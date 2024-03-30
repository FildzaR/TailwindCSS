/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        gelap: 'rgba(0,0,0,0.7)',
        navbar: '#1e1f1f',
        body: '#f8f8f8',
        biru: '#0b6df1',
        footerIcon: '#f66951', 
        abu: '#b4b7ba',
      },
      sizing: {
        1: '1px',
        13: '3.25rem',
      },
    },
  },
  plugins: [],
}

