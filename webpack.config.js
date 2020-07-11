const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isProd = process.env.NODE_ENV === 'production';
const filename = (ext) => isProd ? `bundle.[hash:4].${ext}` : `bundle.${ext}`;

const jSLoaders = () => {
  const loaders = [{
    loader: 'babel-loader',
    options: {
      presets: [
        '@babel/preset-env',
      ],
      plugins: [
        '@babel/plugin-proposal-class-properties',
      ],
    },
  }];

  if (!isProd) {
    loaders.push('eslint-loader')
  }

  return loaders
};

module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: 'development',
  entry: ['@babel/polyfill', './index.js'],
  devtool: !isProd ? 'source-map' : false,
  devServer: {
    port: 3000,
    hot: !isProd,
  },
  output: {
    filename: filename('js'),
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.js'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@core': path.resolve(__dirname, 'src/core'),
      '@components': path.resolve(__dirname, 'src/components'),
    },
  },
  plugins: [
    /** Clearing dist directory */
    new CleanWebpackPlugin(),
    /** Generate html */
    new HtmlWebpackPlugin({
      template: 'assets/index.html',
      minify: {
        collapseWhitespace: isProd,
        removeComments: isProd,
      },
    }),
    /** Copy public files */
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'public/favicon.ico'),
          to: path.resolve(__dirname, 'dist'),
        },
      ],
    }),
    /** Transforming CSS */
    new MiniCssExtractPlugin({
      filename: filename('css'),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: !isProd,
              reloadAll: true,
            },
          },
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: jSLoaders(),
      },
    ],
  },
};
