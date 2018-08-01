const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
var webpack = require('webpack');

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
    loader: 'url-loader?limit=8000&name=images/[name].[ext]'
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
          test: /\.(scss|css)$/,
          use: [
            'css-hot-loader',
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                minimize: {
                  safe: true
                },
                modules: true,
                importLoaders: 1,
                localIdentName: '[name]__[local]___[hash:base64:5]',
                // localIdentName: '[local]',
                sourceMap: true,
              }
            },
            {
              loader: "sass-loader",
              options: {}
            }
          ]
        },
      ]),
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoEmitOnErrorsPlugin(),
      new MiniCssExtractPlugin({
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
          test: /\.(scss|css)$/,
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
