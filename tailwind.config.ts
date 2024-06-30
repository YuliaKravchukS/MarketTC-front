import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        xl: '1200px',
        '2xl': '1440px',
      },
      colors: {
        primary: {
          100: '#BAE6EF',
          500: '#248888',
        },
        secondary: {
          100: '#FDCD8D',
          500: '#FF9506',
        },
        black: {
          100: '#BDC6C6',
          500: '#181C1C',
        },
        background: {
          100: '#EFEFEF',
          500: '#E6E6E6',
        },
        error: {
          500: '#F10606',
        },
      },
      gridTemplateColumns: {
        md: '1fr 8fr 132px',
        xl: '94px 732px 132px',
        '2xl': '160px 718px 148px',
      },
      gridTemplateAreas: {
        mobile: ['banner banner', 'logo nav'],
        desktop: ['logo banner nav'],
      },
    },
    fontSize: {
      h1: ['64px', '72px'],
      h2: ['56px', '64px'],
      h3: ['48px', '56px'],
      h4: ['40px', '48px'],
      h5: ['32px', '40px'],
      h6: ['24px', '36px'],
      lg: ['18px', '32px'],
      base: ['16px', '24px'],
      sm: ['14px', '24px'],
      p: ['16px', '32px'],
    },
    boxShadow: {
      md: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
      hmd: '2px 6px 6px 0px rgba(0, 0, 0, 0.35)',
    },
  },
  plugins: [require("@savvywombat/tailwindcss-grid-areas")],
};
export default config;