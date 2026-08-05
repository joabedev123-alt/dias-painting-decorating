/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#16181C',      // Deep editorial dark charcoal
          darker: '#0F1012',    // Deeper rich charcoal
          light: '#FAF9F6',     // Warm off-white
          cream: '#F4F2EC',     // Soft architectural cream
          accent: '#C5A880',    // Soft refined champagne / warm gold
          'accent-hover': '#B3946B',
          sage: '#7C8C7C',      // Muted sage green accent option
          slate: '#2E323B',     // Card / container dark grey
          muted: '#6B7280',     // Body text muted grey
          border: '#E5E2D9',    // Light warm border
          'border-dark': '#2A2D35',
        }
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'premium': '0 20px 40px -15px rgba(0, 0, 0, 0.07)',
        'premium-hover': '0 30px 60px -12px rgba(0, 0, 0, 0.12)',
        'glow': '0 0 25px rgba(197, 168, 128, 0.25)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-up': 'slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'pulse-subtle': 'pulseSubtle 3s infinite ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSubtle: {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.04)', opacity: '0.9' },
        }
      }
    },
  },
  plugins: [],
}
