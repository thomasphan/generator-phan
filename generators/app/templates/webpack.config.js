const merge = require('webpack-merge')
const path = require('path')
const webpack = require('webpack')

const rules = [
  {
    test: /\.(png|svg)$/,
    use: ['file-loader'],
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
]

const extensions = [
  '.tsx',
  '.ts',
  '.js',
]

const output = {
  path: path.resolve(__dirname, './public/js'),
  publicPath: '/js/',
}

const config = {
  module: { rules },
  output,
  mode: 'development',
  resolve: { extensions },
}

const configs = [
  require('./webpack.devServer.js'),
  require('./webpack.plugins.js'),
  config,
]

module.exports = merge(configs)