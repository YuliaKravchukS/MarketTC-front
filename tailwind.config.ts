import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#BAE6EF",
          500: "#248888",
        },
        secondary: {
          100: "#FDCD8D",
          500: "#FF9506",
        },
        black: {
          100: "#BDC6C6",
          500: "#181C1C",
        },
        background: {
          100: "#EFEFEF",
          500: "#E6E6E6",
        },
        error: {
          500: "#F10606",
        },
      },
      gridTemplateAreas: {
        mobile: ["banner banner", "logo nav"],
        desktop: ["logo banner banner  banner banner nav nav"],
      },
    },
    fontSize: {
      h1: ["64px", "72px"],
      h2: ["56px", "64px"],
      h3: ["48px", "56px"],
      h4: ["40px", "48px"],
      h5: ["32px", "40px"],
      h6: ["24px", "36px"],
      lg: ["18px", "32px"],
      base: ["16px", "24px"],
      sm: ["14px", "24px"],
      p: ["16px", "32px"],
    },
  },
  plugins: [require("@savvywombat/tailwindcss-grid-areas")],
};
export default config;
