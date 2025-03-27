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
        sans: ["Titillium Web", "sans-serif"],
      },
      colors: {
        frenchGray: "#ACADBC",
        coolGray: "#312F2F",
        slateBlue: "#6665DD",
        palatinateBlue: "#473BF0",
        black: "#000500",
      },
    },
  },
  plugins: [],
};
