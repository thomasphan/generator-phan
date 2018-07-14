const merge = require('webpack-merge')
const webpack = require('webpack')

const plugins = [
  // Because globals can also be added with expose-loader
  /* new webpack.ProvidePlugin({
    '$': 'jquery',
    'jQuery': 'jquery',
    'window.$': 'jquery',
    'window.jQuery': 'jquery',
  }), */
]

const config = {
  plugins,
}

const configs = [
  config,
]

module.exports = merge(configs)