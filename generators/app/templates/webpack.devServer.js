const merge = require('webpack-merge')
const path = require('path')

const devServer = {
  contentBase: path.resolve(__dirname, './public'),
  https: true,
  open: true,
}

const config = {
  devServer
}

const configs = [
  config
]

module.exports = merge(configs)