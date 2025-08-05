/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/features/**/*.{js,ts,jsx,tsx}',
    './src/shared/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      xs: '480px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      fontWeight: {
        light: '300',
        regular: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },
      colors: {
        gray: {
          light: '#374151',
          muted: '#6b7280',
          lighter: '#cbd5e1',
          border: '#d1d5db',
          'border-light': '#e5e7eb',
          text: '#1f2937',
        },
        green: {
          DEFAULT: '#10b981',
          dark: '#059669',
          bg: '#ecfdf5',
          border: '#d1fae5',
          text: '#047857',
          title: '#065f46',
        },
        blue: {
          DEFAULT: '#3b82f6',
          bg: '#f0f9ff',
          border: '#bae6fd',
          accent: '#60a5fa',
          'accent-hover': '#93c5fd',
        },
        background: {
          DEFAULT: '#1e2a78',
          dark: '#1e3a8a',
          light: '#f9fafb',
        },
        error: {
          DEFAULT: '#ef4444',
        },
        white: '#ffffff',
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
};
