/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#FF3811",

          secondary: "#151515",

          accent: "#444444",

          neutral: "#737373",

          info: "#99D0F4",

          success: "#2CCEA3",

          warning: "#ECC836",

          error: "#EE1717",
        },
      },
      "light",
    ],
  },
  plugins: [require("daisyui")],
};
