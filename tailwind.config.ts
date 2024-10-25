import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './public/**/*.{js,ts,jsx,tsx,mdx}',
    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      primary: '#FED767',
      accent: '#48BCBB',
      secondary: '#FFF8E8',
      'secondary-dark': '#FFA07A',
      color: '#212F3D',
      fade: '#747474',
      'button-color': '#48BCBB',
      hover: '#FFA500',
      white: '#FFFFFF',
      grey: '#f5f5f5',
      transparent: 'transparent',
      'dark-grey': '#333333',
      'fade-grey': '#E3E3E3',
      'transparent-overlay': 'rgba(0, 0, 0, 0.5)',
      black: 'rgb(18 18 18)',
    },
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
      serif: ['Playfair Display', 'serif'],
      lobster: ['Lobster Two', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
};
export default config;
