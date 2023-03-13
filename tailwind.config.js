/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        moon: "url('/svg/moon.svg')",
        meteor: "url('/image/bg.png')",
      },
      boxShadow: {
        neumorphism:
          "inset 23px 23px 46px #424279,  inset -23px -23px 46px #505095",
      },
    },
  },
  plugins: [],
};
