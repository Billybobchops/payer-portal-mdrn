import { createModuleFederationConfig } from '@module-federation/modern-js';

export default createModuleFederationConfig({
    name: 'payer-portal',
    remotes: {
        remoteDesignSystem:
            process.env.NODE_ENV === 'production'
                ? 'remoteDesignSystem@https://starling-ui-design-system.netlify.app/static/mf-manifest.json'
                : 'remoteDesignSystem@http://localhost:3001/static/mf-manifest.json',
        // payByText:
        // 	process.env.NODE_ENV === 'production'
        // 		? 'payByText@https://payby-text.netlify.app/mf-manifest.json'
        // 		: 'payByText@http://localhost:3003/mf-manifest.json',
    },
    shared: {
        react: { singleton: true },
        'react-dom': { singleton: true },
        'react-router-dom': { singleton: true },
    },
});
