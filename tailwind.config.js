/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        radialr: ["Radial Regular", "sans-serif"],
        radialb: ["Radial Bold", "sans-serif"],
        pinga: ["Ping Arabic", "sans-serif"],
      },
      colors: {
        titleDarkGrey: "#292929",
        paragraphLightGrey: "#54545c",
        ctaGreen: "#3BFF9D",
        ctaBlue: "#131C26",
        ctaPurple: "#3835af",
      },
    },
  },
  plugins: [],
};
