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
        "main-yellow": "#C69F4B",
        "gradient-yellow": "#EAD8B1",
        "dark-blue": "#001F3F",
      },
    },
  },
  plugins: [],
};
