import { nextui } from '@nextui-org/theme';
import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        shimmer: {
          '0%': {
            transform: 'translateY(5px)',
          },
          '100%': {
            transform: 'translateY(-5px)',
            opacity: '0',
          },
        },
      },
      animation: {
        shimmer: 'shimmer 1.3s ease forwards', // use 'animate-shimmer'
      },
    },
  },
  darkMode: 'class',
  plugins: [require('daisyui'), nextui()],
} satisfies Config;
