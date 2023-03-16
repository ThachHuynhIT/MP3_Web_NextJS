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
        wave: "url('/image/wave.svg')",
      },
      boxShadow: {
        neumorphism:
          "inset 28px 28px 24px #0d5247, inset -28px -28px 24px #116e5f",
        // #117967
        circle: " 16px 16px 32px  #0e6758,  -16px -16px 32px #148b76",
      },
    },
  },
  plugins: [],
};
