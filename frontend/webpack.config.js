import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import TerserPlugin from 'terser-webpack-plugin';
import FaviconsWebpackPlugin from 'favicons-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

const isDebug = process.argv.includes('--debug');
const isAnalyse = process.argv.includes('--analyse');
const API = isDebug
  ? JSON.stringify('http://localhost:8000/graphql')
  : JSON.stringify('/graphql');

module.exports = {
  mode: isDebug ? 'development' : 'production',

  entry: {
    app: ['@babel/polyfill', path.resolve(__dirname, './source/index.jsx')],
  },

  output: {
    path: path.resolve(__dirname, 'public'),
    publicPath: '/',
    filename: isDebug ? '[name].js' : '[name].[hash].js',
    chunkFilename: isDebug ? '[id].[name].js' : '[id].[hash].js',
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: [
          /node_modules\/babel-/m,
          /node_modules\/core-js\//m,
          /node_modules\/regenerator-runtime\//m,
        ],

        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(ttf|woff|woff2|jpeg|png)$/,
        loader: 'file-loader',
      },
      {
        test: /\.svg$/,
        loader: 'svg-sprite-loader',
      },
    ],
  },

  resolve: {
    modules: ['node_modules', path.resolve(__dirname, './source')],
    extensions: ['.js', '.jsx', '.scss', '.css'],
  },

  plugins: [
    ...(isDebug ? [new webpack.HotModuleReplacementPlugin()] : []),

    new webpack.DefinePlugin({
      __DEV__: isDebug,
      API,
    }),

    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './source/index.html'),
      minify: {
        removeComments: !isDebug,
        collapseWhitespace: !isDebug,
      },
      cache: false, // Emit the file only if it was changed
      title: 'Электрооборудование в один клик',
      base: '/',
    }),

    new FaviconsWebpackPlugin(
      path.resolve(__dirname, './source/static/images/favicon.png')
    ),

    ...(isAnalyse ? [new BundleAnalyzerPlugin()] : []),
  ],

  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          chunks: 'all',
          minChunks: 2,
        },
      },
    },
    moduleIds: isDebug ? 'named' : 'hashed',
    usedExports: true,
    noEmitOnErrors: isDebug,
    concatenateModules: true,
    minimize: !isDebug,
    minimizer: [new TerserPlugin()],
  },

  performance: {
    hints: isDebug ? false : 'warning',
    maxAssetSize: 1512000,
    maxEntrypointSize: 1512000,
  },

  devtool: isDebug ? 'cheap-module-source-map' : false,
};
