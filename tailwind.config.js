/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
	theme: {
		extend: {
			colors: {
				'green-primary': '#3b8070',
				'green-secondary': '#00C58E',
				'green-light': '#00E0A1',
				'gray-font': '#F5F7FA',
				'gray-hover': '#E2E8F0',
				'gray-hover-dark': '#2D3748',
				'gray-background': '#2F495E',
				'gray-secondary': '#F8FAFC',
				'gray-primary': '#35495e',
				'gray-dark': '#2C3E50',
			},
			borderWidth: {
				'14': '14px',
			},
			fontFamily: {
				sans: ['Quicksand'],
				serif: ['Quicksand'],
				mono: ['Quicksand'],
				display: ['Quicksand'],
				body: ['Quicksand']
			},
			fontSize: {
				'7xl': '5rem',
				'8xl': '6rem',
			},
			spacing: {
				'14': '3.20rem',
				'7': '1.70rem',
			}
		},
		container: {
			padding: '1rem'
		},
	},
	variants: {
		scale: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
	},
	plugins: []
}
