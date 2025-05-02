/**
 * Runtime environment configuration
 * This file is loaded at runtime and provides environment-specific configuration
 * These values can be updated by deployment pipelines without rebuilding the application
 */
(window => {
    console.log('[env-config] Starting env-config.js initialization');

    // Initialize the global configuration object
    window.invoiceCloud = window.invoiceCloud || {};

    // Default values that will be used in development
    const defaultConfig = {
        REMOTE_DESIGN_SYSTEM_URL: 'http://localhost:3001/static/remoteEntry.js',
        PAY_BY_TEXT_URL: 'http://localhost:3003/static/remoteEntry.js',
    };

    // Production values - these would be replaced during deployment
    // Since process.env isn't available in the browser, we use placeholders
    // that can be replaced by a build script or server
    const prodConfig = {
        REMOTE_DESIGN_SYSTEM_URL: '{{PROD_DS_URL}}',
        PAY_BY_TEXT_URL: '{{PROD_PBT_URL}}',
    };

    // Simple environment detection based on hostname
    // More sophisticated detection can be added as needed
    const isProduction = window.location.hostname.startsWith('www.') && !window.location.hostname.includes('localhost');

    console.log('[env-config] Environment detected as:', isProduction ? 'production' : 'development');

    // Use production config only if the URLs are actually set (not placeholders)
    const config = isProduction ? prodConfig : defaultConfig;

    // Final check to fallback to default values if production URLs are placeholders
    window.invoiceCloud.configuration = {
        REMOTE_DESIGN_SYSTEM_URL: config.REMOTE_DESIGN_SYSTEM_URL.includes('{{')
            ? defaultConfig.REMOTE_DESIGN_SYSTEM_URL
            : config.REMOTE_DESIGN_SYSTEM_URL,
        PAY_BY_TEXT_URL: config.PAY_BY_TEXT_URL.includes('{{') ? defaultConfig.PAY_BY_TEXT_URL : config.PAY_BY_TEXT_URL,
    };

    // Log the configuration for debugging
    console.log('[env-config] Runtime environment configuration:', window.invoiceCloud.configuration);

    // Create a custom event to signal that the config is ready
    const configReadyEvent = new CustomEvent('invoicecloud-config-ready', {
        detail: window.invoiceCloud.configuration,
    });
    document.dispatchEvent(configReadyEvent);
    console.log('[env-config] Configuration ready event dispatched');
})(window);
