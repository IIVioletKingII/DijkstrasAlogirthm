import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	build: {
		outDir: 'docs',
		rollupOptions: {
			input: 'src/app.html'
		}
	},
});
