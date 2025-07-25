// @ts-check
import {defineConfig} from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
    site: 'https://heroic-wisp-9c6a1f.netlify.app',

    adapter: netlify(),

    integrations: [],

    vite: {
        plugins: [tailwindcss()]
    }
});
