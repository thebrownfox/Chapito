import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'node:url';

export default defineConfig({
	build: {
		lib: {
			entry: fileURLToPath(new URL('index.ts', import.meta.url)),
			name: 'Chapito',
			fileName: (format) => `chapito.${format}.js`,
			formats: ['es'],
		},
		rollupOptions: {
			// Do NOT externalize gsap, so it gets bundled
			external: [],
			output: {
				globals: {},
			},
		},
		outDir: 'dist',
		emptyOutDir: true,
		sourcemap: true,
	},
});
