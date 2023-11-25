/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily:{
        primary: 'Playfair Display',
        body: 'Work Sans',
        inter: ["inter", "serif"]
      },
      boxShadow: {
        'center': '0 0 10px 5px',
      },
      borderColor:{
        accent_hover: "#fa7505",
        Instagram: "#FB0060",
        Spotify: "#1ED760",
        Facebook: "#0A65C2",
        Linkedin: "#0A65C2",
        Projects: "#F9BC03"
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
      container: {
        padding: {
          DEFAULT: '1rem',
          lg: '3rem',
        },
      },
      colors: {
        primary: '#050402',
        secondary: '#1C1D24',
        tertiary: '#131419',
        accent: {
          DEFAULT: '#ac6b34',
          hover: '#fa7505',
        },
        paragraph: '#878e99',
        Instagram: "#FB0060",
        Spotify: "#1ED760",
        Facebook: "#0A65C2",
        Linkedin: "#0A65C2",
        Projects: "#F9BC03"
      },
      content: {
        services: 'url("/src/assets/img/outline-text/services.svg")',
        testimonials: 'url("/src/assets/img/outline-text/testimonials.svg")',
      },
    },
  },
  plugins: [],
}

