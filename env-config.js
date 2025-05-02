/**
 * Runtime environment configuration (SUPER BASIC POC)
 * This file is loaded at runtime and provides environment-specific configuration
 * These values can be updated by deployment pipelines without rebuilding the application
 */
(window => {
    window.invoiceCloud = window.invoiceCloud || {};

    const devConfig = {
        REMOTE_DESIGN_SYSTEM_URL: 'http://localhost:3001/static/remoteEntry.js',
        PAY_BY_TEXT_URL: 'http://localhost:3003/static/remoteEntry.js',
    };

    // const prodConfig = {
    //     REMOTE_DESIGN_SYSTEM_URL: '{{PROD_DS_URL}}',
    //     PAY_BY_TEXT_URL: '{{PROD_PBT_URL}}',
    // };

    // that can be replaced by a build script or server
    const prodConfig = {
        REMOTE_DESIGN_SYSTEM_URL: 'https://starling-ui-design-system.netlify.app/static/remoteEntry.js',
        PAY_BY_TEXT_URL: 'https://pay-by-text.netlify.app/static/remoteEntry.js',
    };

    // More sophisticated detection will be added
    const isProduction =
        window.location.hostname.includes('starling') && !window.location.hostname.includes('localhost');
    const config = isProduction ? prodConfig : devConfig;

    window.invoiceCloud.configuration = {
        REMOTE_DESIGN_SYSTEM_URL: config.REMOTE_DESIGN_SYSTEM_URL,
        PAY_BY_TEXT_URL: config.PAY_BY_TEXT_URL,
    };
})(window);
