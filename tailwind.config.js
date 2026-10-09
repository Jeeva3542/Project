/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        midnight: '#0B1220',      // Main background
        deepNavy: '#111827',      // Secondary background
        cardNavy: '#172033',      // Cards and panels
        borderNavy: '#334155',    // Subtle borders
        royalBlue: {
          DEFAULT: '#2563EB',     // Primary buttons and links
          hover: '#1D4ED8',
          light: '#3B82F6',
        },
        skyBlue: {
          DEFAULT: '#38BDF8',     // Hover and decorative accents
          hover: '#0EA5E9',
          glow: 'rgba(56, 189, 248, 0.15)',
        },
        offWhite: '#F8FAFC',      // Main text
        coolGray: '#CBD5E1',      // Secondary text
        mutedGray: '#94A3B8',     // Tertiary / metadata text
      },
      fontFamily: {
        sans: ['Inter', 'Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 4px 20px -2px rgba(11, 18, 32, 0.5), 0 2px 6px -1px rgba(0, 0, 0, 0.3)',
        'card-hover': '0 10px 25px -3px rgba(37, 99, 235, 0.15), 0 4px 10px -2px rgba(56, 189, 248, 0.1)',
        'glow-blue': '0 0 25px -5px rgba(37, 99, 235, 0.4)',
        'glow-sky': '0 0 25px -5px rgba(56, 189, 248, 0.35)',
      }
    },
  },
  plugins: [],
}
