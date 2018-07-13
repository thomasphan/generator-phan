const merge = require('webpack-merge')
const webpack = require('webpack')

const plugins = [
  new webpack.ProvidePlugin({
    '$': 'jquery',
    'jQuery': 'jquery',
    'window.$': 'jquery',
    'window.jQuery': 'jquery',
  }),
]

const config = {
  plugins,
}

const configs = [
  config,
]

module.exports = merge(configs)