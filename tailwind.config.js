/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "gray-1": "#9B9B9B",
        "secondary-color": "#E61236",
        "text-color": "#37474F",
        "gray-border": "#D4D4D4",
        "primary-color": "#45CBB8",
      },
    },
  },
  plugins: [],
};
