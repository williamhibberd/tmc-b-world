import { defineConfig } from "vite";
import manifestSRI from "vite-plugin-manifest-sri";
import path from "path";
import viteCompression from "vite-plugin-compression";

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
	build: {
		commonjsOptions: {
			transformMixedEsModules: true,
		},
		manifest: true,
		outDir: "web/",
		rollupOptions: {
			input: {
				app: "src/js/app.js",
				main: "index.html",
			},
			output: {
				sourcemap: true,
			},
		},
	},
	plugins: [
		manifestSRI(),
		viteCompression({
			filter: /\.(js|mjs|json|css|map)$/i,
		}),
	],
}));
