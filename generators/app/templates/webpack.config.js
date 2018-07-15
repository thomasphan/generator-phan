const merge = require('webpack-merge')
const path = require('path')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
const webpack = require('webpack')

const rules = [
  {
    test: /\.(png|svg)$/,
    use: ['file-loader'],
  },
  {
    test: /\.(pug)$/,
    use: ['file-loader?name=[hash].html', 'pug-html-loader'],
  },
  {
    test: /\.css$/,
    use: ['style-loader', 'css-loader'],
  },
  {
    test: /\.tsx?$/,
    use: ['ts-loader'],
    exclude: /node_modules/,
  },
  {
    test: require.resolve('jquery'),
    use: [
      {
        loader: 'expose-loader',
        options: 'jQuery',
      },
      {
        loader: 'expose-loader',
        options: '$',
      },
    ],
  },
  // Because there is code dependent on angular being globally available
  // TODO: Consider removing
  {
    test: require.resolve('angular'),
    use: [
      {
        loader: 'expose-loader',
        options: 'angular',
      },
    ],
  },
]

const extensions = [
  '.tsx',
  '.ts',
  '.js',
]

const plugins = [
  new TsconfigPathsPlugin(),
]

const resolve = {
  extensions,
  plugins,
}

const output = {
  path: path.resolve(__dirname, './public/js'),
  publicPath: '/js/',
}

const config = {
  module: { rules },
  output,
  mode: 'development',
  resolve,
}

const configs = [
  require('./webpack.devServer.js'),
  require('./webpack.plugins.js'),
  config,
]

module.exports = merge(configs)