/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#5D3FD3',
        'primary-dark': '#4B32A8',
        'primary-light': '#6E4FF6',
        secondary: '#F5B041',
        'secondary-dark': '#E67E22',
        'secondary-light': '#F8C471',
        success: '#2ECC71',
        'success-dark': '#27AE60',
        'background-dark': 'var(--background-dark)',
        'background-card': 'var(--background-card)',
        'background-sidebar': 'var(--background-sidebar)',
        'text-primary': 'var(--text-primary)',
        'text-secondary': 'var(--text-secondary)',
        warning: '#F39C12',
        'warning-dark': '#D35400',
        danger: '#E74C3C',
        'danger-dark': '#C0392B',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderColor: {
        'background-dark': 'var(--background-dark)',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'slide-in': 'slideIn 0.3s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};