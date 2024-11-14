// config-overrides.js
module.exports = function override(config, env) {
    // Add any custom Webpack configuration here
    config.module.rules.push({
      test: /\.js$/,
      enforce: 'pre',
      use: ['source-map-loader'],
      exclude: /node_modules/,
    });
    return config;
  };
  