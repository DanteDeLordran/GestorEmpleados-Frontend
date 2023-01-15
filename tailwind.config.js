/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,ts}'],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#e11d48",
          "secondary": "#1be2ce",
          "accent": "#d34a9c",
          "neutral": "#2C2442",
          "base-100": "#fae8ff",
          "info": "#87D0F8",
          "success": "#22c55e",
          "warning": "#facc15",
          "error": "#dc2626",
        },
      },
    ],
  },
  plugins: [require('daisyui')],
}
