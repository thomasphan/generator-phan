const merge = require('webpack-merge')
const path = require('path')

const output = {
  path: path.resolve(__dirname, './public/js'),
  publicPath: '/js/',
}

const config = {
  output,
  mode: 'development',
}

const configs = [
  require('./webpack.devServer.js'),
  config,
]

module.exports = merge(configs)