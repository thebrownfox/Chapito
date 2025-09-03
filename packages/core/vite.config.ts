import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import { viteStaticCopy } from "vite-plugin-static-copy";

export default defineConfig({
	plugins: [
		dts({
			include: ["**/*.ts"], // Remove CSS from type generation to keep raw
		}),
		viteStaticCopy({
			targets: [
				{
					src: "chapito.module.css",
					dest: ".",
					overwrite: true,
					rename: "chapito.css",
				},
				{
					src: "chapito.module.css",
					dest: ".",
					overwrite: true,
				},
			],
		}),
	],
	build: {
		lib: {
			entry: fileURLToPath(new URL("index.ts", import.meta.url)),
			name: "Chapito",
			fileName: (format) => `index.${format === "es" ? "esm" : format}.js`,
			formats: ["es", "cjs"],
		},
		rollupOptions: {
			external: [],
			output: {
				globals: {},
				assetFileNames: (assetInfo) => {
					if (assetInfo.names.includes("core.css")) {
						return `chapito2.css`;
					}
					return "[name]-[hash][extname]";
				},
			},
		},
		outDir: "dist",
		emptyOutDir: true,
		sourcemap: true,
		cssCodeSplit: false,
	},
	css: {
		modules: {
			localsConvention: "camelCaseOnly",
		},
	},
});
