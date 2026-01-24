import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			screens: {
				'xs': '360px',
			},
			colors: {
				// Premium Light Theme
				background: {
					primary: '#FFFFFF',
					secondary: '#F9FAFB',
					card: '#FFFFFF',
				},
				// Brand Color System
				brand: {
					primary: '#2B4593',    // Deep Tech Blue
					secondary: '#E6E2C5',  // Soft Premium Cream
					hover: '#1E3270',      // Darker blue for hover
					light: '#3D5AB8',      // Lighter blue variant
				},
				// Accent System (for highlights and CTAs)
				accent: {
					primary: '#2B4593',
					secondary: '#E6E2C5',
					hover: '#1E3270',
				},
				// Text System
				text: {
					primary: '#1F2937',    // Dark gray for body text
					muted: '#6B7280',      // Medium gray for secondary text
					heading: '#111827',    // Near black for headings
				},
				'background-primary': '#FFFFFF',
				'background-secondary': '#F9FAFB',
				// Border System
				border: {
					DEFAULT: '#E5E7EB',
					light: '#F3F4F6',
					accent: '#2B4593',
				},
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
				'gradient-premium': 'linear-gradient(135deg, #2B4593 0%, #1E3270 100%)',
				'gradient-soft': 'linear-gradient(135deg, #F9FAFB 0%, #FFFFFF 100%)',
				'gradient-cream': 'linear-gradient(135deg, #E6E2C5 0%, #F5F3E8 100%)',
			},
			animation: {
				'fade-in': 'fadeIn 0.8s ease-out',
				'slide-up': 'slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
				'slide-down': 'slideDown 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
				'scale-in': 'scaleIn 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
				'float': 'float 4s ease-in-out infinite',
				'gentle-pulse': 'gentlePulse 3s ease-in-out infinite',
			},
			backdropBlur: {
				xs: '2px',
			},
			boxShadow: {
				'soft': '0 1px 3px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.04)',
				'medium': '0 4px 6px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.04)',
				'large': '0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.04)',
				'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.08), 0 10px 10px -5px rgba(0, 0, 0, 0.02)',
				'premium': '0 4px 20px rgba(43, 69, 147, 0.12)',
				'premium-hover': '0 8px 30px rgba(43, 69, 147, 0.18)',
				'inner-soft': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.04)',
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
				float: {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-10px)' },
				},
				gentlePulse: {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.9' },
				},
			},
		},
	},
	plugins: [],
};
export default config;
