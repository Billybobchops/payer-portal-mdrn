import { appTools, defineConfig } from '@modern-js/app-tools';
import { moduleFederationPlugin } from '@module-federation/modern-js';

// https://modernjs.dev/en/configure/app/usage
export default defineConfig({
    runtime: {
        router: true,
    },
    plugins: [
        appTools({
            bundler: 'rspack',
        }),
        moduleFederationPlugin(),
    ],
    output: {
        copy: [
            {
                from: './env-config.js',
                to: 'static/js/env-config.js',
            },
        ],
    },
    html: {
        favicon: './src/assets/favicon-32x32.png',
        tags: [
            {
                tag: 'script',
                attrs: {
                    src: '/static/js/env-config.js',
                },
                append: false,
                head: true,
            },
        ],
    },
});
