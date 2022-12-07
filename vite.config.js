import { resolve } from "path";
import { defineConfig } from "vite";
import manifestSRI from "vite-plugin-manifest-sri";
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
				app: resolve(__dirname, "src/js/app.js"),
				main: resolve(__dirname, "index.html"),
				outside: resolve(__dirname, "outside/index.html"),
				library: resolve(__dirname, "library/index.html"),
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
