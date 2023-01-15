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
          "primary": "#a7ff89",
          "secondary": "#ff5efc",
          "accent": "#9333ea",
          "neutral": "#2F2730",
          "base-100": "#2E303D",
          "info": "#2E69D6",
          "success": "#46D293",
          "warning": "#FBC341",
          "error": "#F52E31",
        },
      },
    ],
  },
  plugins: [require('daisyui')],
}
