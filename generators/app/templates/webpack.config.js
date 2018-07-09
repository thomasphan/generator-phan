const merge = require('webpack-merge')
const path = require('path')

const rules = [
  {
    test: /\.(png|svg)$/,
    use: ['file-loader']
  },
  {
    test: /\.css$/,
    use: ['style-loader', 'css-loader']
  },
  {
    test: /\.tsx?$/,
    use: ['ts-loader'],
    exclude: /node_modules/,
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
  config,
]

module.exports = merge(configs)