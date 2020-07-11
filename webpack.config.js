const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: 'development',
  entry: './index.js',
  output: {
    filename: 'bundle.[hash:4].js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: ['.js'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@core': path.resolve(__dirname, 'src/core'),
    }
  },
  plugins: [
    /** Clearing dist directory */
    new CleanWebpackPlugin(),
    /** Generate html */
    new HtmlWebpackPlugin({
      template: "public/index.html"
    }),
    /** Copy public files */
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/public/favicon.ico'),
          to: path.resolve(__dirname, 'dist')
        },
      ],
    }),
    /** Transforming CSS */
    new MiniCssExtractPlugin({
      filename: 'bundle.[hash:4].css'
    })
  ],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: {
          loader: "babel-loader",
          options: {
            "presets": [
              "@babel/preset-env"
            ]
          }
        }
      }
    ],
  },
};
