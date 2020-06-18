const createStyledComponentsTransformer = require('typescript-plugin-styled-components')
  .default;
const styledComponentsTransformer = createStyledComponentsTransformer();

const {
  resolve
} = require('path');

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
    modules: [resolve(__dirname, 'src'), resolve(__dirname, 'node_modules')],
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