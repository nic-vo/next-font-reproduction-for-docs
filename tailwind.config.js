/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				poppins: ['var(--font-poppins)'],
				lato: ['var(--font-lato)'],
				overpass: ['var(--font-overpass)'],
			},
		},
	},
	plugins: [],
};
