/** @type {import('tailwindcss').Config} */

import { nextui } from "@nextui-org/react";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/**/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        OleoScript: ["Oleo Script", "cursive"],
        Valera: ["Varela Round", "sans-serif"],
      },
      fontSize: { heading: "4rem", subheading: "2rem", body: "1rem" },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
