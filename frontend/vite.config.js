/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  server:{
    proxy:{
      '/api' : "http://localhost:4000",
    }
  },
  plugins: [],
}