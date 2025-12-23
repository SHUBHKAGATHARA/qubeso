import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Futuristic Dark Theme
        background: {
          primary: '#000000',
          secondary: '#0F172A',
          card: '#111827',
        },
        // Neon Accent System
        accent: {
          primary: '#22D3EE',
          secondary: '#A855F7',
          hover: '#67E8F9',
        },
        // Text System
        text: {
          primary: '#E5E7EB',
          muted: '#9CA3AF',
          heading: '#FFFFFF',
        },
        // Border System
        border: {
          DEFAULT: 'rgba(255, 255, 255, 0.06)',
          accent: '#22D3EE',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-neon': 'linear-gradient(135deg, #22D3EE 0%, #A855F7 100%)',
        'gradient-dark': 'linear-gradient(135deg, #000000 0%, #0F172A 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out',
        'slide-up': 'slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-down': 'slideDown 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
        'scale-in': 'scaleIn 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
        'glow': 'glow 2s ease-in-out infinite',
        'float': 'float 4s ease-in-out infinite',
        'neon-pulse': 'neonPulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'soft': '0 2px 8px rgba(0, 0, 0, 0.3)',
        'medium': '0 4px 16px rgba(0, 0, 0, 0.4)',
        'strong': '0 8px 24px rgba(0, 0, 0, 0.5)',
        'glow': '0 0 20px rgba(34, 211, 238, 0.5)',
        'glow-lg': '0 0 40px rgba(34, 211, 238, 0.6)',
        'neon': '0 0 20px rgba(34, 211, 238, 0.4), 0 0 40px rgba(34, 211, 238, 0.2)',
        'neon-purple': '0 0 20px rgba(168, 85, 247, 0.4), 0 0 40px rgba(168, 85, 247, 0.2)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(40px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-40px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(34, 211, 238, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(34, 211, 238, 0.6)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        neonPulse: {
          '0%, 100%': { opacity: '1', boxShadow: '0 0 20px rgba(34, 211, 238, 0.5)' },
          '50%': { opacity: '0.85', boxShadow: '0 0 40px rgba(34, 211, 238, 0.7)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
