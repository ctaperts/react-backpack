const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const StatsPlugin = require('stats-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const OfflinePlugin = require('offline-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const distDir = path.join(__dirname, '../dist');
const srcDir = path.join(__dirname, '../src');

const commonLoader = [
  {
    test: /\.(js|jsx)$/,
    exclude: /(node_modules\/)/,
    use: [
      {
        loader: 'babel-loader',
      }
    ]
  },
  {
    test: /\.(jpe?g|png|gif|pdf|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
    loader: 'url-loader'
  }
]

module.exports = [
  {
    name: 'client',
    mode: 'production',
    target: 'web',
    entry: [
      'babel-polyfill',
      `${srcDir}/client.js`,
    ],
    output: {
      path: distDir,
      filename: 'client.js',
      publicPath: distDir,
    },
    resolve: {
      extensions: ['.js', '.jsx']
    },
    module: {
      rules: commonLoader.concat([
        {
          test: /\.scss$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
              {
                loader: 'css-loader',
                options: {
                  modules: true,
                  importLoaders: 1,
                  localIdentName: '[hash:base64:10]',
                  sourceMap: false,
                }
              },
              {
                loader: 'sass-loader'
              }
            ]
          })
        }
      ]),
    },
    plugins: [
      new ExtractTextPlugin({
        filename: 'styles.css',
        allChunks: true
      }),
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: '"production"'
        }
      }),
      new CleanWebpackPlugin(distDir),
      new webpack.optimize.OccurrenceOrderPlugin(),
      new CopyWebpackPlugin([
        { from: 'src/assets/icons', to: 'icons/' },
        { from: 'src/manifest.json' },
      ]),
      new OfflinePlugin({
        publicPath: '../dist/',
        appShell: '/dist/',
        externals: [
          '/dist/'
        ],
        version: "[hash]",
        AppCache: {
          events: true
        },
        ServiceWorker: {
          events: true
        }
      }),
    ]
  },
  {
    name: 'server',
    mode: 'production',
    target: 'node',
    entry: `${srcDir}/server.js`,
    output: {
      path: distDir,
      filename: 'server.js',
      libraryTarget: 'commonjs2',
      publicPath: distDir,
    },
    resolve: {
      extensions: ['.js', '.jsx']
    },
    module: {
      rules: commonLoader.concat([
        {
          test: /\.scss$/,
          use: [
            {
              loader: 'isomorphic-style-loader',
            },
            {
              loader: 'css-loader',
              options: {
                modules: true,
                importLoaders: 1,
                localIdentName: '[hash:base64:10]',
                sourceMap: false
              }
            },
            {
              loader: 'sass-loader'
            }
          ]
        }
      ]),
    },
    plugins: [
      new OptimizeCssAssetsPlugin({
        cssProcessorOptions: {discardComments: {removeAll: true}}
      }),
      new StatsPlugin('stats.json', {
        chunkModules: true,
        modules: true,
        chunks: true,
        exclude: [/node_modules[\\\/]react/],
      }),
    ]
  }
];
