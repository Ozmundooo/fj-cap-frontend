/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        heroImage: "url('/HomeHeroImage.png')",
      },
      fontFamily: {
        title: ["Yeseva One", "sans sarif"],
        subtitle: ['"Poppins"', "sans sarif"],
      },
    },
  },
  plugins: [nextui()],
};
