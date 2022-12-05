const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
	content: ["index.html", "./src/scripts/**/*.js"],
	theme: {
		fontFamily: {
			sans: ["'Inter'", ...defaultTheme.fontFamily.sans],
		},
		spacing: {
			0: "0rem",
			12: "0.75rem",
			28: "1.75rem",
			42: "2.625rem",
			60: "3.75rem",
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
			yellow: "#E8E36B",
			red: "#DF3128",
			grey: {
				DEFAULT: "#343434",
				light: "#D1D1D1",
			},
		},
		extend: {
			height: {
				screen: "calc(var(--vh, 1vh) * 100)",
			},
			maxHeight: {
				screen: "calc(var(--vh, 1vh) * 100)",
			},
			minHeight: {
				screen: "calc(var(--vh, 1vh) * 100)",
			},
		},
	},
};
