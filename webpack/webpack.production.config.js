const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const StatsPlugin = require('stats-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const OfflinePlugin = require('offline-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

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
      publicPath: distDir,
      filename: 'client.js'
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
              loader: MiniCssExtractPlugin.loader,
              options: {
                modules: true,
                importLoaders: 1,
                modules: {
                  localIdentName: '[hash:base64:10]',
                },
                sourceMap: false,
              }
            },
            {
              loader: 'css-loader',
              options: {
                modules: true,
                importLoaders: 1,
                modules: {
                  localIdentName: '[hash:base64:10]',
                },
                sourceMap: false,
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
      new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: 'styles.css'
      }),
      new CompressionPlugin({
        filename: "[path].gz[query]",
        algorithm: "gzip",
        test: /\.js$|\.css$|\.html$/,
        threshold: 10240,
        minRatio: 0.8
      }),
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: '"production"'
        }
      }),
      new webpack.optimize.OccurrenceOrderPlugin(),
      new CopyWebpackPlugin([
        { from: 'src/assets/icons', to: 'icons/' },
        { from: 'src/app/manifest.json' },
        { from: 'src/app/robots.txt', to: 'static/' },
        { from: 'src/app/sitemap.xml', to: 'static/' },
      ]),
      new OfflinePlugin({
        caches: {
          main: ['client.js.gz', ':rest:']
        },
        excludes: ['client.js'],
        publicPath: '/',
        appShell: '/',
        externals: [
          '/'
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
                modules: {
                  localIdentName: '[hash:base64:10]',
                },
                sourceMap: false
              }
            },
            {
              loader: 'sass-loader'
            }
          ]
        }
      ]),
    }
  }
];
