const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

/** @typedef {import('webpack').Configuration} WebpackConfiguration */

/**
 * @typedef {Object} Options
 * @prop {WebpackConfiguration} Options.config
 */

/**
 * @param {Options} opts
 */
module.exports = (opts) => {
  const {config} = opts;

  config.module.rules.push(
    {
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve('ts-loader'),
          options: {
            transpileOnly: true,
          },
        },
      ],
    },
  );

  config.resolve.extensions.push('.ts', '.tsx');

  config.resolve.plugins = [
    new TsconfigPathsPlugin({
      configFile: path.resolve(__dirname, '../tsconfig.json'),
    }),
  ];

  config.devServer = {
    inline: true,
    hot: true,
  };

  return config;
};
