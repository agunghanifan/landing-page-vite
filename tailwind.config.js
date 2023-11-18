/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      padding: '2rem'
    },
    fontFamily: {
      'sans': ['"Poppins"'],
      'serif': ['"Inter"'],
      'mono': ['"Roboto"'],
    },
    extend: {},
  },
  // add daisyUI plugin
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],

  // daisyUI config (optional - here are the default values)
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#ECE3CE",
          "secondary": "#739072",
          "accent": "#4F6F52",
          "neutral": "#3A4D39",
          "base-100": "#ffffff",
          "info": "#38bdf8",
          "success": "#16a34a",
          "warning": "#fde047",
          "error": "#e11d48",
        },
      },
    ], // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "dark", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },
}