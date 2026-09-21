/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // "Obsidian Telemetry" tiered surfaces
        void: '#090d16',
        'surface-lowest': '#060911',
        'surface-1': '#0d1322',
        'surface-2': '#151d30',
        'surface-3': '#1e293b',
        outline: '#334155',
        'outline-variant': '#1e293b',
        // Telemetry accents
        primary: '#10b981',
        'primary-bright': '#34d399',
        secondary: '#38bdf8',
        'on-surface': '#f1f5f9',
        'on-surface-variant': '#94a3b8',
      },
      fontFamily: {
        headline: ['Geist', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        code: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      borderRadius: {
        DEFAULT: '0.25rem',
      },
      maxWidth: {
        shell: '72rem',
      },
      boxShadow: {
        telemetry: '0 0 24px rgba(16, 185, 129, 0.08)',
      },
      keyframes: {
        beacon: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.35' },
        },
      },
      animation: {
        beacon: 'beacon 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
