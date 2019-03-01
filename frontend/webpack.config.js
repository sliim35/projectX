import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import UglifyJsPlugin from 'uglifyjs-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import dotenv from 'dotenv';

dotenv.load();

const isDebug = process.argv.includes('--debug');
const isAnalyse = process.argv.includes('--analyse');

module.exports = {
  mode: isDebug ? 'development' : 'production',

  entry: {
    app: ['@babel/polyfill', path.resolve(__dirname, './source/index.jsx')],
  },

  output: {
    path: path.resolve(__dirname, 'public'),
    publicPath: isDebug ? '/' : '',
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
        test: /\.(ico|jpg|jpeg|png|webp|svg|gif|eot|otf|ttf|woff|woff2)(\?.*)?$/,
        loader: 'file-loader',
        options: {
          name: isDebug ? '[path][name].[ext]?[hash:8]' : '[hash:8].[ext]',
        },
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
    }),

    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './source/index.html'),
      minify: {
        removeComments: !isDebug,
        collapseWhitespace: !isDebug,
      },
      cache: false, // Emit the file only if it was changed
      title: 'Электрооборудование в 2 клика',
    }),

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
    minimizer: [new UglifyJsPlugin()],
  },

  performance: {
    hints: isDebug ? false : 'warning',
    maxAssetSize: 1512000,
    maxEntrypointSize: 1512000,
  },

  devtool: isDebug ? 'cheap-module-source-map' : false,
};
