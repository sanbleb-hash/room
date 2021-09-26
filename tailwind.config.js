module.exports = {
	mode: 'jit',
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			fontFamily: {
				spartan: ['spartn', 'sans-serif'],
			},
			letterSpacing: {
				widest: '.35em',
			},
			color: {
				backG: 'rgba(122, 116, 116, 0.2)',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
