const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const StatsPlugin = require('stats-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const distDir = path.join(__dirname, '../dist');
const srcDir = path.join(__dirname, '../src');

module.exports = [
  {
    name: 'client',
    mode: 'production',
    target: 'web',
    entry: `${srcDir}/client.js`,
    output: {
      path: distDir,
      filename: 'client.js',
      publicPath: distDir,
    },
    resolve: {
      extensions: ['.js', '.jsx']
    },
    module: {
      rules: [
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
      ],
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
      rules: [
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
      ],
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
