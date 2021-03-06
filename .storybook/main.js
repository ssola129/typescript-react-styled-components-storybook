const {
  resolve
} = require('path');
const basePath = resolve(__dirname, '../');

module.exports = {
  stories: ['../stories/**/*.stories.([tj]s|mdx)'],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-knobs/register',
    '@storybook/addon-links',
    '@storybook/addon-a11y/register',
    '@storybook/addon-actions',
  ],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [{
          loader: require.resolve('ts-loader'),
        },
        {
          loader: require.resolve('react-docgen-typescript-loader'),
        },
      ],
    });
    config.resolve.extensions.push('.ts', '.tsx');
    config.resolve.modules.push(resolve(basePath, 'src'));
    config.resolve.alias = {
      ...config.resolve.alias,
      asset: resolve(basePath, 'assets'),
    };
    return config;
  },
};