const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');

const distDir = path.join(__dirname, '../dist');
const srcDir = path.join(__dirname, '../src');

require("babel-polyfill");

const commonLoader = [
  {
    test: /\.(js|jsx)$/,
    exclude: /(node_modules\/)/,
    use: [
      {
        loader: 'babel-loader',
      }
    ]
  }
]

module.exports = [
  {
    name: 'client',
    mode: 'development',
    target: 'web',
    entry: [
      'babel-polyfill',
      'webpack-hot-middleware/client',
      `${srcDir}/client.js`,
    ],
    output: {
      path: path.join(__dirname, 'dist'),
      filename: 'client.js',
      publicPath: '/dist/',
    },
    resolve: {
      extensions: ['.js', '.jsx']
    },
    devtool: 'source-map',
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
                  localIdentName: '[name]__[local]___[hash:base64:5]',
                  // localIdentName: '[local]',
                  sourceMap: true,
                }
              },
              {
                loader: 'sass-loader'
              }
            ]
          })
        },
      ]),
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoEmitOnErrorsPlugin(),
      new ExtractTextPlugin({
        filename: 'styles.css',
        allChunks: true
      })
    ]
  },
  {
    name: 'server',
    mode: 'development',
    target: 'node',
    entry: [
      `${srcDir}/server.js`,
    ],
    output: {
      path: path.join(__dirname, 'dist'),
      filename: 'server.js',
      libraryTarget: 'commonjs2',
      publicPath: '/dist/',
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
                localIdentName: '[name]__[local]___[hash:base64:5]',
                // localIdentName: '[local]',
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
  }
];
