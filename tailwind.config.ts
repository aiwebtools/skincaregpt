
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Enhanced divine theme colors
				cyber: {
					dark: '#0F0C29',
					purple: '#9b87f5',
					'purple-dark': '#7E69AB',
					'purple-vivid': '#8B5CF6',
					pink: '#D946EF',
					orange: '#F97316',
					blue: '#1EAEDB',
					'sky-blue': '#33C3F0',
				},
			},
			fontFamily: {
				cyber: ['Orbitron', 'sans-serif'],
				sans: ['Inter', 'sans-serif'],
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'pulse-glow': {
					'0%, 100%': { 
						boxShadow: '0 0 20px 0 rgba(155, 135, 245, 0.7), 0 0 40px 0 rgba(255, 119, 198, 0.5)',
						transform: 'scale(1)'
					},
					'50%': { 
						boxShadow: '0 0 40px 10px rgba(155, 135, 245, 0.9), 0 0 80px 20px rgba(255, 119, 198, 0.8)',
						transform: 'scale(1.05)' 
					}
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
					'33%': { transform: 'translateY(-20px) rotate(120deg)' },
					'66%': { transform: 'translateY(-10px) rotate(240deg)' }
				},
				'scan-line': {
					'0%': { transform: 'translateY(-100%) scaleY(1)' },
					'50%': { transform: 'translateY(50%) scaleY(3)' },
					'100%': { transform: 'translateY(200%) scaleY(1)' }
				},
				'divine-shimmer': {
					'0%': { 
						backgroundPosition: '-200% 0',
						transform: 'skewX(-20deg)'
					},
					'100%': { 
						backgroundPosition: '200% 0',
						transform: 'skewX(-20deg)'
					}
				},
				'ethereal-pulse': {
					'0%, 100%': {
						opacity: '0.5',
						transform: 'scale(1) rotate(0deg)',
						filter: 'hue-rotate(0deg)'
					},
					'50%': {
						opacity: '0.8',
						transform: 'scale(1.1) rotate(180deg)',
						filter: 'hue-rotate(90deg)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
				'float': 'float 8s ease-in-out infinite',
				'scan-line': 'scan-line 3s linear infinite',
				'divine-shimmer': 'divine-shimmer 3s ease-in-out infinite',
				'ethereal-pulse': 'ethereal-pulse 4s ease-in-out infinite'
			},
			spacing: {
				'18': '4.5rem',
				'22': '5.5rem',
				'26': '6.5rem',
				'30': '7.5rem'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
