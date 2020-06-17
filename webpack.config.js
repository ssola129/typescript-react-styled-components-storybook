const createStyledComponentsTransformer = require('typescript-plugin-styled-components')
  .default;
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
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          getCustomTransformers: () => ({
            before: [styledComponentsTransformer],
          }),
        },
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        loader: 'url-loader',
        include: [/assets/],
        options: {
          limit: 10000,
        },
      },
      {
        test: /\.(ttf|eot|otf|woff2?)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader',
        include: [/assets/],
        query: {
          name: '[name].[ext]',
        },
      },
    ],
  },
};
