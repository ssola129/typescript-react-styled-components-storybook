const createStyledComponentsTransformer = require('typescript-plugin-styled-components').default;
const styledComponentsTransformer = createStyledComponentsTransformer();

module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  output: {
    filename: 'main.js',
    path: __dirname + '/dist',
  },
  devtool: 'source-map',
  devServer: {
    contentBase: './',
    publicPath: '/dist',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [{
      test: /\.tsx?$/,
      loader: 'ts-loader',
      options: {
        getCustomTransformers: () => ({
          before: [styledComponentsTransformer],
        }),
      },
    }],
  },
};