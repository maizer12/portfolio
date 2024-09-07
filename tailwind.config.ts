import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: {
          200: '#7C5BCE',
          700: '#4C3979',
        },
        light: {
          200: '#9096A1',
          400: '#C7C8C9',
          900: '#E9E9E9',
        },
        dark: {
          400: '#1D1D1D',
          700: '#151515',
          900: '#111',
        },
      },
    },
  },
  plugins: [],
};
export default config;
