import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        pink: "#E94C8E",
        green: "#CAE580",
        peach: "#FFCABA",
        "dark-gray": "#0C0A09",
        cream: "#FFFAF7",
        "light-peach": "#FFEBE5",
        "dark-pink": "#DD2572"
      }
    }
  },
  plugins: [],
};
export default config;
