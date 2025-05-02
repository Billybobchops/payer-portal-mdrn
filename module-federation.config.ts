import { createModuleFederationConfig } from '@module-federation/modern-js';

export default createModuleFederationConfig({
    name: 'payer-portal',
    runtimePlugins: ['./src/runtime/dynamic-remotes-plugin'],
    remotes: {
        remoteDesignSystem:
            'remoteDesignSystem@http://localhost:3001--INVALID-TO-SHOW-RUNTIME-PLUGIN-WORKS--/static/remoteEntry.js',
        payByText: 'payByText@http://localhost:3003--INVALID-TO-SHOW-RUNTIME-PLUGIN-WORKS--/static/remoteEntry.js',
    },
    shared: {
        react: { singleton: true, requiredVersion: '18.3.1' },
        'react-dom': { singleton: true, requiredVersion: '18.3.1' },
        'react-router-dom': { singleton: true, requiredVersion: '18.3.1' },
        clsx: { singleton: true, requiredVersion: '2.1.1' },
        'react-hook-form': { singleton: true, requiredVersion: '7.54.2' },
    },
});
