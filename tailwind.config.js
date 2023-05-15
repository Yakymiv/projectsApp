/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        dark: "#101313",
        tagSelected: "#2b8ce5",
        bgButton: "#2b8ce6",
      },
      boxShadow: {
        myShadow: "1px 0px 0px rgba(45 ,50 ,50)",
      },
    },
  },
  plugins: [],
};
