module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './styles/**/*.css'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'ui-sans-serif', 'system-ui'],
        display: ['var(--font-poppins)', 'ui-sans-serif', 'system-ui']
      },
      colors: {
        primary: '#0F172A',
        accent: '#2563EB',
        muted: '#94A3B8',
        background: '#F8FAFC'
      },
      boxShadow: {
        glow: '0 20px 45px -15px rgba(37, 99, 235, 0.35)'
      }
    }
  },
  plugins: []
};
