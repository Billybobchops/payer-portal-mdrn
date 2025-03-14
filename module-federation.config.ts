import { createModuleFederationConfig } from '@module-federation/modern-js';

export default createModuleFederationConfig({
    name: 'payer-portal',
    remotes: {
        remoteDesignSystem:
            process.env.NODE_ENV === 'production'
                ? 'remoteDesignSystem@https://starling-ui-design-system.netlify.app/static/remoteEntry.js'
                : 'remoteDesignSystem@http://localhost:3001/static/remoteEntry.js',
        payByText:
            process.env.NODE_ENV === 'production'
                ? 'payByText@https://pay-by-text.netlify.app/static/remoteEntry.js'
                : 'payByText@http://localhost:3003/static/remoteEntry.js',
    },
    shared: {
        react: { singleton: true, requiredVersion: '18.3.1' },
        'react-dom': { singleton: true, requiredVersion: '18.3.1' },
        'react-router-dom': { singleton: true, requiredVersion: '18.3.1' },
        clsx: { singleton: true, requiredVersion: '2.1.1' },
    },
});
