/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#EFF6FF',
          100: '#DBEAFE', 
          300: '#93C5FD',
          600: '#274BB3',
          700: '#1F3A8A',
          800: '#172554',
        },
        indigo: '#4F46E5',
        accent: {
          info: '#0EA5E9',
          success: '#10B981',
        },
        slate: {
          700: '#334155',
          900: '#0F172A',
        },
        border: '#E2E8F0',
        bg: '#F8FAFC',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['IBM Plex Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}