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
    }
}

const remoteToConfigMap: Record<string, string> = {
    remoteDesignSystem: 'REMOTE_DESIGN_SYSTEM_URL',
    payByText: 'PAY_BY_TEXT_URL',
};

const DynamicRemotesPlugin: FederationRuntimePlugin = () => {
    return {
        name: 'runtime-dynamic-remotes',

        beforeInit: (args: { options: { remotes?: Record<string, unknown> } }) => {
            return args;
        },

        init: async (args: { options: { remotes?: Record<string, { entry?: string }> } }) => {
            const config = window.invoiceCloud?.configuration || {};

            // Handle both object and array formats for remotes
            if (args.options.remotes) {
                const remoteEntries = Array.isArray(args.options.remotes)
                    ? args.options.remotes
                    : Object.entries(args.options.remotes);

                for (const remoteEntry of remoteEntries) {
                    const remoteName = Array.isArray(remoteEntry) ? remoteEntry[0] : remoteEntry.name;
                    const remoteConfig = Array.isArray(remoteEntry) ? remoteEntry[1] : remoteEntry;
                    const configKey = remoteToConfigMap[remoteName];
                    const remoteUrl = configKey && config[configKey];

                    if (remoteUrl) {
                        const remote = remoteConfig as { entry?: string };
                        const originalUrl = remote.entry;
                        remote.entry = remoteUrl;
                        console.log(`[DynamicRemotesPlugin] Replaced ${remoteName} URL: ${originalUrl} → ${remoteUrl}`);
                    } else {
                        console.warn(`[DynamicRemotesPlugin] No config found for remote "${remoteName}"`);
                    }
                }
            }

            return args;
        },
    };
};

// Add console log to confirm the plugin is loaded
console.log('[DynamicRemotesPlugin] Plugin module loaded');

export default DynamicRemotesPlugin;
