const createExpoWebpackConfigAsync = require('@expo/webpack-config');
const path = require("path");

module.exports = async function (env, argv) {
  const config = await createExpoWebpackConfigAsync(env, argv);
  // Customize the config before returning it.
  if (env.mode === 'production') {
    config.output.publicPath = path.resolve(config.output.path);
  }
  return config;
};
