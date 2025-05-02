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

            if (args.options.remotes && Array.isArray(args.options.remotes)) {
                for (const remoteEntry of args.options.remotes) {
                    const remoteName = remoteEntry.name;
                    const configKey = remoteToConfigMap[remoteName];
                    const remoteUrl = configKey && config[configKey];

                    if (remoteUrl) {
                        const originalUrl = remoteEntry.entry;
                        remoteEntry.entry = remoteUrl;

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

export default DynamicRemotesPlugin;
