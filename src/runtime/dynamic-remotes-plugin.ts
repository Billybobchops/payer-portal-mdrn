import type { RuntimePluginFuture } from '@modern-js/runtime';
import type { FederationRuntimePlugin } from '@module-federation/runtime/types';

declare global {
    interface Window {
        invoiceCloud?: {
            configuration: {
                REMOTE_DESIGN_SYSTEM_URL?: string;
                PAY_BY_TEXT_URL?: string;
                [key: string]: string | undefined;
            };
        };
        __FEDERATION__?: {
            remotes?: Record<string, { entry?: string } & Record<string, unknown>>;
            runtimePlugins?: Array<FederationRuntimePlugin>;
            [key: string]: unknown;
        };
    }
}

const remoteToConfigMap: Record<string, string> = {
    remoteDesignSystem: 'REMOTE_DESIGN_SYSTEM_URL',
    payByText: 'PAY_BY_TEXT_URL',
};

const createFederationPlugin = (): FederationRuntimePlugin => ({
    name: 'runtime-dynamic-remotes',

    beforeInit: args => {
        console.log('[DynamicRemotesPlugin] beforeInit', args);
        return args;
    },

    init: async args => {
        console.log('[DynamicRemotesPlugin] init', args);
        const config = window.invoiceCloud?.configuration || {};

        if (args.options.remotes) {
            await Promise.all(
                Object.entries(args.options.remotes).map(async ([remoteName, remoteConfig]) => {
                    const configKey = remoteToConfigMap[remoteName];
                    const remoteUrl = configKey && config[configKey];

                    if (remoteUrl) {
                        // Update the remote entry URL
                        const remote = remoteConfig as { entry?: string };
                        const originalUrl = remote.entry;
                        remote.entry = remoteUrl;
                        console.log(`[DynamicRemotesPlugin] Replaced ${remoteName} URL: ${originalUrl} → ${remoteUrl}`);
                    } else {
                        console.warn(`[DynamicRemotesPlugin] No config found for remote "${remoteName}"`);
                    }
                }),
            );
        }

        return args;
    },
});

// Create a Modern.js runtime plugin that registers the federation plugin
const DynamicRemotesPlugin = (): RuntimePluginFuture => ({
    name: 'runtime-dynamic-remotes-plugin',

    setup: api => {
        if (typeof window !== 'undefined') {
            if (window.__FEDERATION__) {
                window.__FEDERATION__.runtimePlugins = window.__FEDERATION__.runtimePlugins || [];
                window.__FEDERATION__.runtimePlugins.push(createFederationPlugin());
                console.log('[DynamicRemotesPlugin] Plugin registered with Federation runtime');
            } else {
                Object.defineProperty(window, '__FEDERATION__', {
                    get: function () {
                        return this._federationValue;
                    },
                    set: function (newValue) {
                        this._federationValue = newValue;
                        if (newValue) {
                            newValue.runtimePlugins = newValue.runtimePlugins || [];
                            newValue.runtimePlugins.push(createFederationPlugin());
                            console.log('[DynamicRemotesPlugin] Plugin registered with Federation runtime');
                        }
                    },
                    configurable: true,
                });
            }
        }
    },
});

export default DynamicRemotesPlugin;

////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
//////////////// Simpler approach? /////////////////////
////////////////////////////////////////////////////////

// import type { FederationRuntimePlugin } from '@module-federation/runtime/types';

// declare global {
//     interface Window {
//         invoiceCloud?: {
//             configuration: {
//                 REMOTE_DESIGN_SYSTEM_URL?: string;
//                 PAY_BY_TEXT_URL?: string;
//                 [key: string]: string | undefined;
//             };
//         };
//     }
// }

// const DynamicRemotesPlugin = (): FederationRuntimePlugin => ({
//     name: 'runtime-dynamic-remotes',

//     beforeInit: args => {
//         console.log('[DynamicRemotesPlugin] beforeInit', args);
//         return args;
//     },

//     init: async args => {
//         console.log('[DynamicRemotesPlugin] init', args);
//         const config = window.invoiceCloud?.configuration || {};

//         // Map of remote names to config keys
//         const remoteToConfigMap = {
//             remoteDesignSystem: 'REMOTE_DESIGN_SYSTEM_URL',
//             payByText: 'PAY_BY_TEXT_URL',
//         };

//         if (args.options.remotes) {
//             await Promise.all(
//                 Object.entries(args.options.remotes).map(async ([remoteName, remoteConfig]) => {
//                     const configKey = remoteToConfigMap[remoteName as keyof typeof remoteToConfigMap];
//                     const remoteUrl = configKey && config[configKey];

//                     if (remoteUrl) {
//                         // Update the remote entry URL
//                         const remote = remoteConfig as { entry?: string };
//                         const originalUrl = remote.entry;
//                         remote.entry = remoteUrl;
//                         console.log(`[DynamicRemotesPlugin] Replaced ${remoteName} URL: ${originalUrl} → ${remoteUrl}`);
//                     } else {
//                         console.warn(`[DynamicRemotesPlugin] No config found for remote "${remoteName}"`);
//                     }
//                 }),
//             );
//         }

//         return args;
//     },
// });

// export default DynamicRemotesPlugin;
