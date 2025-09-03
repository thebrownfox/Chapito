import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

// https://vite.dev/config/
export default defineConfig({
	plugins: [react(), dts()],
	css: {
		modules: {
			localsConvention: "camelCaseOnly",
		},
	},
});
