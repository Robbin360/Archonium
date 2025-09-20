/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Sovereign color authority
        'void-absolute': '#000000',
        'authority-blue': '#3B82F6',
        'dominance-cyan': '#06B6D4',
        'control-white': '#FFFFFF',
        'power-gray': {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        }
      },
      fontFamily: {
        'authority': ['Inter', 'system-ui', 'sans-serif'],
        'power': ['Orbitron', 'monospace'],
        'control': ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'authority': '0 0 30px rgba(59, 130, 246, 0.3)',
        'dominance': '0 0 50px rgba(6, 182, 212, 0.2)',
        'sovereign': 'inset 0 0 20px rgba(59, 130, 246, 0.1)',
      },
      animation: {
        'authority-pulse': 'authorityPulse 3s ease-in-out infinite',
        'dominance-glow': 'dominanceGlow 2s ease-in-out infinite alternate',
        'sovereign-float': 'sovereignFloat 6s ease-in-out infinite',
      },
      keyframes: {
        authorityPulse: {
          '0%, 100%': { boxShadow: '0 0 30px rgba(59, 130, 246, 0.3)' },
          '50%': { boxShadow: '0 0 60px rgba(59, 130, 246, 0.6)' },
        },
        dominanceGlow: {
          '0%': { textShadow: '0 0 10px rgba(6, 182, 212, 0.5)' },
          '100%': { textShadow: '0 0 20px rgba(6, 182, 212, 0.8)' },
        },
        sovereignFloat: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
