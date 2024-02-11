/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        bgColor:"hsl(0 0% 100%)",
        textColor:"hsl(240 10% 3.9%)"
      }
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
}

