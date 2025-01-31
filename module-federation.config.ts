import { createModuleFederationConfig } from '@module-federation/modern-js';

export default createModuleFederationConfig({
    name: 'payer-portal',
    remotes: {
        remoteDesignSystem:
            process.env.NODE_ENV === 'production'
                ? 'remoteDesignSystem@https://starling-ui-design-system.netlify.app/remoteEntry.js'
                : 'remoteDesignSystem@http://localhost:3001/remoteEntry.js',
    },
    shared: {
        react: { singleton: true },
        'react-dom': { singleton: true },
    },
});
