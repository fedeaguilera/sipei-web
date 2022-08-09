/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				main: "Noto Serif",
				title: "Noto Serif Bold",
			},
			colors: {
				primary: "#2f2c79",
				secondary: "#f6f6f6",
				bg_primary: "#000000",
				bg_secondary: "#f3f3f0",
			},
			minHeight: {
				banner: "50vh",
			},
		},
	},
	plugins: [],
};

// bg-gradient-to-b from-blue-600 via-blue-700 to-blue-800
