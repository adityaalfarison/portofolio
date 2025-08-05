// tailwind.config.ts
export default {
  darkMode: 'class',
  content: [
    './components/**/*.{vue,js}',
    './layouts/**/*.{vue,js}',
    './pages/**/*.{vue,js}',
    './app.vue',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: '#3B82F6', // Tambah warna custom (opsional)
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
