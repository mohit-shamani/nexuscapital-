/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Deep institutional navy — the foundation of trust
        ink: {
          DEFAULT: '#0A1420',
          900: '#070D16',
          800: '#0A1420',
          700: '#0F1E2E',
          600: '#16293C',
        },
        // Warm ivory canvas — editorial, luxurious, never stark white
        ivory: {
          DEFAULT: '#F6F3EC',
          50: '#FBFAF6',
          100: '#F6F3EC',
          200: '#ECE7DA',
        },
        // Muted brass accent — restraint over flash
        brass: {
          DEFAULT: '#B08D57',
          light: '#C5A572',
          dark: '#967640',
        },
        slatey: {
          DEFAULT: '#5A6675',
          light: '#8A95A3',
        },
      },
      fontFamily: {
        serif: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display': ['clamp(2.75rem, 6vw, 6rem)', { lineHeight: '1.02', letterSpacing: '-0.02em' }],
        'hero': ['clamp(3.5rem, 9vw, 9rem)', { lineHeight: '0.98', letterSpacing: '-0.03em' }],
      },
      letterSpacing: {
        'micro': '0.18em',
      },
      maxWidth: {
        'container': '1400px',
      },
      transitionTimingFunction: {
        'expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'reveal': {
          '0%': { transform: 'translateY(110%)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
    },
  },
  plugins: [],
};
