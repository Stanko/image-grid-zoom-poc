const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const htmlPlugin = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: './index.html',
});

const isProd = process.env.NODE_ENV === 'production';
const useLocalImages = process.env.USE_LOCAL_IMAGES === 'true';

let outputPath = path.resolve(__dirname, 'dist');
let publicPath;

if (isProd && !useLocalImages) {
  outputPath = path.resolve(__dirname, 'docs');
  publicPath = '/image-grid-zoom-poc/';
}

module.exports = {
  entry: './src/js/index.js',
  output: {
    path: outputPath,
    publicPath,
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.USE_LOCAL_IMAGES': JSON.stringify(
        process.env.USE_LOCAL_IMAGES
      ),
    }),
    htmlPlugin,
  ],
};
