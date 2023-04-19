import { sveltekit } from '@sveltejs/kit/vite';
import { sentrySvelteKit } from '@sentry/sveltekit';
import type { UserConfigExport } from 'vite';

const config: UserConfigExport = {
	plugins: [sentrySvelteKit({autoUploadSourceMaps: false}), sveltekit()],

	css: {
		preprocessorOptions: {
			scss: {
				additionalData: '@use "src/variables.scss" as *;'
			}
		}
	}
};

export default config;
