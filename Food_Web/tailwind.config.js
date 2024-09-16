/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brightColor: "#D82813",
        backgroundColor: "#b7bca9",
        lightText: "#959595",
        primaryColor: "#C60E05",
        secundaryColor: "#Ea8C36"
      },
    },
  },
  plugins: [],
};
