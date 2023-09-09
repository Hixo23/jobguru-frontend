import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        text: "#fefbfb",
        background: "#171717",
        primary: "#2a7374",
        secondary: "#0c1722",
        accent: "#42b87f",
      },
    },
  },
  plugins: [],
};
export default config;
