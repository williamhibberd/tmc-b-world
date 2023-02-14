const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
	content: ["index.html", "./src/js/**/*.js"],
	theme: {
		fontSize: {
			sm: "0.875rem", //14
			md: ["1.3125rem", "1.8125rem"], //21/29
			body: ["1rem", "1.375rem"], //16/22
			lg: ["1.625rem", "2.125rem"], //26/34
		},
		spacing: {
			0: "0rem",
			2: "0.125rem",
			10: "0.625rem",
			12: "0.75rem",
			18: "1.125rem",
			24: "1.5rem",
			28: "1.75rem",
			30: "1.875rem",
			36: "2.25rem",
			40: "2.5rem",
			42: "2.625rem",
			44: "2.75rem",
			48: "3rem",
			60: "3.75rem",
			80: "5rem",
			350: "21.875rem",
			px: "1px",
			em: "1em",
			rem: "1rem",
		},
		colors: {
			transparent: "transparent",
			current: "currentColor",
			white: "#FFF",
			black: "#000",
			blue: "#27369C",
			yellow: {
				DEFAULT: "#E8E36B",
				light: "#F7F7F2",
			},
			red: "#DF3128",
			grey: {
				DEFAULT: "#343434",
				light: "#D1D1D1",
			},
		},
		extend: {
			fontFamily: {
				sans: [
					"'neue-haas-grotesk-display'",
					...defaultTheme.fontFamily.sans,
				],
			},
			height: {
				screen: "calc(var(--vh, 1vh) * 100)",
				"screen-w-header": "calc(calc(var(--vh, 1vh) * 100) + 48px)",
			},
			maxHeight: {
				screen: "calc(var(--vh, 1vh) * 100)",
			},
			minWidth: {
				350: "21.875rem",
			},
			minHeight: {
				screen: "calc(var(--vh, 1vh) * 100)",
				"3/4": "75%",
			},
			borderRadius: {
				large: "20px",
			},
		},
	},
};
