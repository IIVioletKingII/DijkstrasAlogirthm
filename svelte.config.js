// import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://svelte.dev/docs/kit/adapters for more information about adapters.
		// adapter: adapter()

		// Paths for static sites
		adapter: adapter({
			pages: 'docs',   // Specifies where to output the build
			assets: 'docs',  // Specifies the folder for assets
			fallback: '404.html',  // Set to 'index.html' if you want a fallback
			precompress: false,
			strict: true
		}),
		paths: {
			// base: '/DijkstrasAlogirthm',  // The subdirectory where your app is hosted
			base: process.argv.includes('dev') ? '' : process.env.BASE_PATH
		},


		// // Optional: If you want to adjust Vite-specific settings (e.g., for dev or build process)
		// vite: {
		// 	build: {
		// 		outDir: 'docs', // Custom output folder for static files
		// 	},
		// },
	}
};

export default config;
