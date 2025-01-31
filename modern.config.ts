import { appTools, defineConfig } from '@modern-js/app-tools';
import { moduleFederationPlugin } from '@module-federation/modern-js';

// https://modernjs.dev/en/configure/app/usage
export default defineConfig({
    runtime: {
        router: true,
    },
    // output: {
    //     assetPrefix:
    //         process.env.NODE_ENV === 'production'
    //             ? 'https://payer-portal-mdrn.netlify.app/'
    //             : 'http://localhost:8080/',
    // },
    plugins: [
        appTools({
            bundler: 'rspack', // Set to 'webpack' to enable webpack
        }),
        moduleFederationPlugin(),
    ],
    html: {
        favicon: './src/assets/favicon-32x32.png',
    },
});
