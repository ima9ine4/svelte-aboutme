import adapter from '@sveltejs/adapter-auto';
//import { vitePreprocess } from "@sveltejs/kit/vite";
import sveltePreprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		sveltePreprocess(),
		mdsvex({ extensions: ['.svx', '.md'] }),
	],
	extensions: ['.svelte', '.svx', '.md'],

	kit: {
		// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://svelte.dev/docs/kit/adapters for more information about adapters.
		
		adapter: adapter()
	}
};

export default config;
