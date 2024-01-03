import { nextui } from "@nextui-org/react";
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-color': '#2a2b44',
        'input-color': '#454566',
        'body-color': '#222236',
      },
      fontFamily: {
        'finlandica': ['Finlandica', 'sans-serif'],
      },
      fontSize: {
        '14': '14px',
      },
      boxSizing: {
        'border-box': 'border-box',
      },
    },
  },
  darkMode: "class",
  plugins: [nextui(),
  function ({ addUtilities }) {
    const newUtilities = {
      '.gradient-text': {
        backgroundImage: 'linear-gradient(122deg,#f17b85,#f79393 15%,#fee4a5 45%,#9ae8b0 65%,#5ba5d0 90%,#9078d0)',
        WebkitMaskImage: 'linear-gradient(122deg,#f17b85,#f79393 15%,#fee4a5 45%,#9ae8b0 65%,#5ba5d0 90%,#9078d0)',
        WebkitBoxDecorationBreak: 'clone',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      },
    };
    addUtilities(newUtilities);
  },
  ]
}
