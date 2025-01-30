import { createModuleFederationConfig } from '@module-federation/modern-js';

export default createModuleFederationConfig({
    name: 'payer-portal',
    remotes: {
        remoteDesignSystem: 'remoteDesignSystem@http://localhost:3001/mf-manifest.json',
    },
    shared: {
        react: { singleton: true },
        'react-dom': { singleton: true },
    },
});
